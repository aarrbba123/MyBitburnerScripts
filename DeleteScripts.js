/** @param {NS} ns */
export async function main(ns) {
	//Deletes all files from your (bitburner) computer.
	ns.tprint("-\nWARNING: Are you sure you want to Delete All scripts?\nType 'yes' to proceed, Type 'no' to exit the program.");
	while (true) {
		let data = '';
		data = getInput();
		if (data.toLowerCase == "yes") {
			ns.tprint("yes");
			setInput("");

			//The deletion loop!!!
			let host = ns.getHostname()
			let fdata = ns.ls(host);
			for (let i = 0; i < fdata.length; i + 1) {
				//Don't delete it self for now.
				if (fdata[i] != "DeleteAll.js" && dataIn(fdata[i].split(".")[1], ["js", "ns" , "script", "ts"])){
					ns.rm(fdata[i], host);
				}
			}

		} else if (data.toLowerCase == "no") {
			ns.tprint("why :C");
			setInput("");
			ns.exit();
		}
		await ns.sleep(100);
	}
}

//taken from computerMusic.js getInput and setInput since I still don't know how to do that much DOM
export function getInput() {
	let terminalInput = ''
	terminalInput = document.getElementById("terminal-input");
	if (!terminalInput)
		return false;
	return terminalInput.value;
}



export function setInput(input) {
	let terminalInput = ''
	terminalInput = document.getElementById("terminal-input");
	if (!terminalInput)
		return false;
	terminalInput.value = input;
	ns.print(Object.keys(terminalInput));
	ns.print(Object.keys(terminalInput)[1]);
	const handler = Object.keys(terminalInput)[1];
	terminalInput[handler].onChange({ target: terminalInput });
	terminalInput[handler].onKeyDown({ keyCode: 13, preventDefault: () => null });
	return true;
}

function dataIn(str, list) {
	for (let i = 0; i < list.length; i++) {
		if (str == list[i]) {
			return true;
		}
	}
	return false;
}

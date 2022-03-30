/** @param {NS} ns **/
export async function main(ns) {
	if (!ns.fileExists("datamgr.txt")) {
		ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/datamgr.txt", "datamgr.txt");
	}
	//download sequence here
	var data = ns.read("datamgr.txt");
	if (data[1] != true) {
		var dwrite = [ns.getTimeSinceLastAug(), data[1]];
		var datasum = ns.getTimeSinceLastAug() - data[0];
		if (datasum < 216000) {
			if (ns.fileExists("GeneralHackV2.js", "home")) {
				ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/GeneralHackV2.js", "GeneralHackV2.js", "home");
				ns.tprint("Updated GeneralHackV2.js to home");
			}
			if (ns.fileExists("GeneralHack.script", "home")) {
				ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/GeneralHack.script", "GeneralHack.script", "home");
				ns.tprint("Updated GeneralHack.script to home");
			}
			if (ns.fileExists("PlayMusic.js", "home")) {
				ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/PlayMusic.js", "PlayMusic.js", "home");
				ns.tprint("Updated PlayMusic.js to home");
			}
			if (ns.fileExists("autoupdater.js", "home")) {
				ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/autoupdater.js", "autoupdater.js", "home");
				ns.tprint("Updated autoupdater.js to home");
			}
			ns.write("datamgr.txt", dwrite, "w");

		}
		while (true) {
			await ns.sleep(100);
			switch (getInput().toString().toLowerCase()) {
				case "download all":
					ns.tprint("Are you sure do you want to download ALL scripts? (Y/N)");
					while (true) {
						await ns.sleep(100);
						if (getInput().toString().toLowerCase() == "y") {
							ns.tprint("Downloading all scripts...");
							setInput('');
							downloadAll();
							break;
						}
						else if (getInput().toString().toLowerCase() == "n") {
							setInput('');
							break;
						}
					}
					break;
				case "download generalhack":
					ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/GeneralHack.script", "GeneralHack.script", "home");
					ns.tprint("Downloaded GeneralHack.js to home");
					setInput('');
					break;
				case "download generalhackv2":
					ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/GeneralHackV2.js", "GeneralHackV2.js", "home");
					ns.tprint("Downloaded GeneralHackV2.js to home");
					setInput('');
					break;
				case "download playmusic":
					ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/PlayMusic.js", "PlayMusic.js", "home");
					ns.tprint("Downloaded PlayMusic.js to home");
					setInput('');
					break;
					case "download autoupdater":
					ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/autoupdater.js","autoupdater.js","home");
					ns.tprint("Downloaded autoupdater.js to home");
					setInput('');
					break;
					//additional commands
					case "help":
					ns.tprint("\n--------------------\nhelp\n--------------------\nhelp - shows this help page\nexit - exits the program (not VIM tho...)\ndownload [script] - downloads a program\n-List of downloads-\nautoupdater\nGeneralHackV2\nGeneralHack\nPlayMusic");
					setInput('');
					break;
					case "exit":
					setInput('');
					ns.exit();
					break;
			}
		}
	}
	else {
		ns.tprint("Error,You cannot use autodownloader.js while dev-protection is active");
	}
}
//taken from computerMusic.js getInput and setInput since I still don't know how to do that much DOM
export function getInput() {
	let terminalInput = ''
	eval('terminalInput = document.getElementById("terminal-input")')
	if (!terminalInput)
		return false;
	return terminalInput.value;
}
export function setInput(input) {
	let terminalInput = ''
	eval('terminalInput = document.getElementById("terminal-input")')
	if (!terminalInput)
		return false;
	terminalInput.value = input;
	const handler = Object.keys(terminalInput)[1];
	terminalInput[handler].onChange({ target: terminalInput });
	terminalInput[handler].onKeyDown({ keyCode: 13, preventDefault: () => null });
	return true;
}
//Install EVERYTHING(Except text and github files)
export function downloadAll() {
	let filename = ["GeneralHackV2.js", "GeneralHack.script", "AutoUpdater.js", "PlayMusic.js"];

	for (i = 0; urls.length < i; i++) {
		ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/" + filename[i], filename[i], "home");
	}
}
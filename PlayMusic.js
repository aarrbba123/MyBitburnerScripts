/** @param {NS} ns **/
export async function main(ns) {
	var server = ns.args[0];
	var confirmation = ns.args[1];
	var additional = ns.args[2];
	/*
	var additional2 = ns.args[3];
	 if (additional2 === null){
			additional2 = 0;
		}
		else
		if (additional2 == ("a"||"A")&&("l"||"L")&&("t"|"T")){
			addtitional2 = 1;
		}
		else{
			additional2 = 0;
		}
		Alt music track(Music2.txt),too lazy to reenable it at computerMusic.js
		*/
	if (server === null) {
		server = "MusicServer";
	}
	if (additional === null) {
		additional = 0;
	}
	if (ns.serverExists(server)) {
		if (!ns.fileExists("computerMusic.js", server)) {
			await ns.scp("computerMusic.js", "home", server);
			ns.tprint("Downloading ComputerMusic.js to " + server + ".....");
			await ns.sleep(5000);
			ns.tprint("Download Complete!");
		}
		if (!ns.fileExists("data.txt", ns.getHostname())) {
			await ns.wget("https://raw.githubusercontent.com/aarrbba123/MyBitburnerScripts/main/data.txt", "data.txt");
		}
		var data = await ns.read("data.txt");
		var time = ns.getTimeSinceLastAug();
		var clk = time - data;
		if (clk > 3600000) {
			await ns.wget("https://raw.githubusercontent.com/MatiasCardullo/JavaScripts-Bitburner/main/computerMusic.js", "computerMusic.js");
			await ns.scp("computerMusic.js", "home", server);
			ns.tprint("Updating computerMusic.js...");
			await ns.sleep(5000);
			ns.tprint("computerMusic.js Updated!");
			await ns.write("data.txt", time, "w");
		}
		ns.tprint("Running ComputerMusic Launcher,ComputerMusic.js at " + server);


		ns.exec("computerMusic.js", server, 1, additional);
		//ns.exec("computerMusic.js", server, 1, additional,additional2);
	}
	else if (confirmation > 0) {
		ns.tprint("Trying to Purchase " + server);
		ns.purchaseServer(server, 64);
	}
	else {
		ns.tprint("No Server is in its name,use the second parameter to confirm purchase.\nUse third parameter for file");
	}
}
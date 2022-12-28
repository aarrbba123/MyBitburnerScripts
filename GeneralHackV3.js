/** @param {NS} ns */
export async function main(ns) {
	//Disable Logging of data
	ns.disableLog("hack");
	ns.disableLog("grow");
	ns.disableLog("weaken");
	ns.disableLog("getServerMoneyAvailable");
	ns.disableLog("getServerSecurityLevel");

	//Main code
	var server = ns.args[0];
	var supressUpdates = ns.args[1];

	//API args
	var skip = ns.args[2];

	//constants
	const version = '3.0.0';
	const versionID = 300;

	let serverScript = ns.getRunningScript();
	var threads = serverScript.threads;

	var moneyThresh = ns.getServerMaxMoney(server) * 0.75;
	var securityThresh = ns.getServerMinSecurityLevel(server) + 5;
	var serverRam = ns.getServerMaxRam(server);

	ns.print("GeneralHack V" + version + " Started!");	
	if (skip == false) {
		if (ns.fileExists("BruteSSH.exe", "home")) {
			ns.brutessh(server);
		}
		if (ns.fileExists("FTPCrack.exe", "home")) {
			ns.ftpcrack(server);
		}
		ns.print("Nuking Target...");
		ns.nuke(server);
		ns.print("Target Nuked!");
	}

	//Hack (Main Code Loop)
	while (true){
		//Payload Itself
		if (ns.getServerSecurityLevel(server) > securityThresh) {
			ns.weaken(server);
		}else if (ns.getServerMoneyAvailable(server) < moneyThresh) {
			ns.grow()
		}else{
			ns.hack(server);
		}
		checkUpdates(supressUpdates,server,versionID,threads);
		await ns.sleep(100);
	}
}

//A function to check Updates
function checkUpdates(supressUpdates,server,versionID,threads){
	
	let data = ns.read("UpdateData.txt");
	data = JSON.parse(data);
	if ((data["GeneralHackV3"] != versionID) && (supressUpdates != true)) {
		if (ns.getHostname() != "home") {
			ns.scp("GeneralHackV3.js",ns.getHostname(),"home");
		}
		ns.run("GeneralHackV3.js",threads,server,false,true);
	}
}

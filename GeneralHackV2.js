/** @param {NS} ns **/
export async function main(ns) {
	if (ns.fileExists("autoupdater.js","home")){
	ns.disableLog("hack");
	ns.disableLog("grow");
	ns.disableLog("weaken");
	ns.disableLog("getServerMoneyAvailable");
	ns.disableLog("getServerSecurityLevel");
	const d1 = ns.getHostname()
	var server = ns.args[0];
	var changelog = ns.args[1];
	var cont = ns.args[2];
	const version = '2.5.2';
	const idf = 251;
	var moneyThresh = ns.getServerMaxMoney(server) * 0.75;
	var securityThresh = ns.getServerMinSecurityLevel(server) + 5;
	var serverram = ns.getServerMaxRam(server);
	if (changelog > 0) {
		ns.tprint("\n====================\nGeneral Hack V" + version + "\n====================\nChangelogs\n====================\n-Made SURE that the script only works with autoupdater.js available\n-Fixed some minor bugs\n-Fixed that SUPER annoying bug that stops the script during an update\n-Added More statements to prevent over copying\n-Fixed Auto Updater\n-Changed to always hack due to money issues.\n-Changed to make grow and weaken repeat. This WILL reduce update intervals\n\nAutoUpdater.js is now required for this script\n====================\n")
	}
	if (cont == 1) {
		ns.print("GeneralHack V" + version + " Updated!");
	}
	else {
		ns.print("GeneralHack V" + version + " Started");
		if (ns.fileExists("BruteSSH.exe", "home")) {
			ns.brutessh(server);
		}
		if (ns.fileExists("FTPCrack.exe", "home")) {
			ns.ftpcrack(server);
		}
		ns.print('NUKING ' + server);
		ns.nuke(server);
		ns.print(server + ' Successfully NUKED!');
		if (serverram > ns.getScriptRam('GeneralHackV2.js')) {
			if (ns.fileExists("GeneralHackV2.js", server) && ns.scriptRunning("GeneralHackV2.js", server)) {
				ns.scriptKill("GeneralHackV2.js", server);
				ns.tprint('\nKilling and Manually updating previous script...\n');
			}
			if (ns.fileExists("GeneralHackV2.js", server)) {
				ns.tprint('Manually Updating Script...')
			}
			/*
			Attempt to copy this from home to target server
			As of 2.4.4,autoupdater.js is now a dependency of this script
			*/
			await ns.scp('GeneralHackV2.js', "home", server);
			ns.tprint('Repli-Script Activated');
		}
	}
	var i = 0;
	while (i < 28) {
		var x = 0;
		//typical payload stuff
		if (ns.getServerSecurityLevel(server) > securityThresh) {
			while (x < 10){
			await ns.weaken(server);
			x++;
			}
		} else if (ns.getServerMoneyAvailable(server) < moneyThresh) {
			while (x < 5){
			await ns.grow(server);
			x++;
			}
		}
		await ns.hack(server);
		i++;
		ns.print("Iteration " + i);
	}
	//Update script
	ns.print("Updating GeneralHackV2.js...");
	//autoupdater.js format Goes as follows:Name of Current Program,Host server,Threads,High-priority Alarm(bool),Additional data
	ns.exec("autoupdater.js", "home", 1, /*Args>>*/"GeneralHackV2.js", d1, 1, 0, server);
 }
 else{tprint("\nError: Dependency 'autoupdater.js' Missing");}
}
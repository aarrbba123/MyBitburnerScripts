/** @param {NS} ns **/
export async function main(ns) {
	var file = ns.args[0];
	var server = ns.args[1];
	var threads = ns.args[2];
	//if I need to notice this,set hpriority to 1.
	var hpriority = ns.args[3];
	var target = ns.args[4];
	await ns.scp(file, "home", server);
	if (hpriority == 1) {
		tprint(file + " at " + server + " is Updating.");
	}
	ns.exec(file,server,threads, /*args>*/target,0,1);
}
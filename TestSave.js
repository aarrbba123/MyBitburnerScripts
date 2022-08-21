import {processSave, processLoad} from "SaveFunctions.js";
/** @param {NS} ns */
export async function main(ns) {
	var destination = "TestData.txt";

	if (ns.args[0] == "w") {
		let data = ["Haha Lol This works",69420,["LMAO","YESSSSS"],"Done WOOOO!!!!"];
		let save = processSave(data);
		ns.tprint(save);
		ns.write(destination,save,"w");
	}
	else {
		let vread = processLoad(ns.read(destination));
		ns.tprint("Read Test Data;");
		for(let i = 0;i < vread.length;i++){
			ns.tprint("Test Data " + i + ": " + vread[i]);
		}
		let aread = processLoad(vread[2],",");
		ns.tprint(aread[0]);
	}
}
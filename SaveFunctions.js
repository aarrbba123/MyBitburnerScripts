/** @param {NS} ns */
//for some reason,ns.read and ns.write functions don't work here :p
export function processSave(arrValue,seperator) {
//Saves
	if (seperator === null || seperator === undefined){
		seperator = "|";
	}
	let fstring = arrValue[0];
	for(let i = 1;i < arrValue.length;i++){
		fstring = fstring + seperator + arrValue[i];
	}
	return fstring;
}


export function processLoad(input,seperator) {
	//loads
	if (seperator === null || seperator === undefined){
		seperator = "|";
	}
	input = input.toString()
	let fstring = input.split(seperator);
	return fstring;
}

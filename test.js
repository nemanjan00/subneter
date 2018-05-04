const subneter = require("./");


const subnetComputers = [
	100,
	100,
	255,
	15,
	2,
	2,
	2
];

let network = "172.16.0.0";
let mask = "16";

let result = subneter(subnetComputers, network, mask);

console.log(result);


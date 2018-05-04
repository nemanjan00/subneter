const subneter = require("./");


const subnetComputers = [
	25,
	25,
	25,
	25
];

let network = "192.15.22.0";
let mask = "24";

let result = subneter(subnetComputers, network, mask);

console.log(result);


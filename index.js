const ip = require("ip");

module.exports = (subnetComputers, network, mask) => {
	let subneter = {
		main: (subnetComputers, network, mask) => {
			let binaryNetwork = ip.toLong(network);
			let binaryMask = subneter.maskToBinary(mask);

			let used = subneter.fillArray(32, 0);

			subnetComputers = subnetComputers.sort((a, b) => a - b);
			subnetComputers.reverse();

			let result = subnetComputers.map(subneter.countToMask);

			result = result.map((result) => {
				let addition = 0;

				for(let i = 0; i < used.length; i++){
					addition = addition << 1;
					addition += used[i];
				}

				result.network = ip.fromLong(binaryNetwork + addition);
				result.firstIP = ip.fromLong(binaryNetwork + addition + 1);

				used[result.mask - 1]++;

				return result;
			});

			return result;
		},
		maskToBinary: (mask) => {
			let binaryMask = 0;

			for(let i = 0; i < 32; i++){
				binaryMask = binaryMask << 1;

				if(mask > 0){
					binaryMask++;
				}

				mask--;
			}

			return binaryMask;
		},
		countToMask: (count) => {
			let counter = 0;
			let i = 0;

			do {
				i++;
				counter = counter << 1;
				counter++;
			} while(counter - 1 < count);

			return {
				computerCount: count,
				mask: 32 - i,
				binaryMask: subneter.maskToBinary(32 - i)
			};
		},
		fillArray: (size, content) => {
			let arrayResult = [];

			for(let i = 0; i < size; i++) {
				arrayResult.push(content);
			}

			return arrayResult;
		}
	}

	return subneter.main(subnetComputers, network, mask);
}


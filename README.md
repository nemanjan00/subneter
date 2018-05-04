# subneter

```bash
[nemanjan00@nemanjan00-mlaptop subneter (master)]$ cat test.js                
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

[nemanjan00@nemanjan00-mlaptop subneter (master)]$ node test.js   
[ { computerCount: 25,
    mask: 27,
    binaryMask: -32,
    network: '192.15.22.0',
    firstIP: '192.15.22.1' },
  { computerCount: 25,
    mask: 27,
    binaryMask: -32,
    network: '192.15.22.32',
    firstIP: '192.15.22.33' },
  { computerCount: 25,
    mask: 27,
    binaryMask: -32,
    network: '192.15.22.64',
    firstIP: '192.15.22.65' },
  { computerCount: 25,
    mask: 27,
    binaryMask: -32,
    network: '192.15.22.96',
    firstIP: '192.15.22.97' } ]
```

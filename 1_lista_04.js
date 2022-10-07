var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

var A = Number.parseInt(lines.shift());
var B = Number.parseInt(lines.shift());

let PROD = A*B;

console.log(`PROD = ${PROD}`);



var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

var A = Number.parseInt(lines.shift());
var B = Number.parseInt(lines.shift());
var C = Number.parseInt(lines.shift());
var D = Number.parseInt(lines.shift());

let DIFERENCA = (A*B - C*D);

console.log(`DIFERENCA = ${DIFERENCA}`);
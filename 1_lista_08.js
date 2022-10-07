var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

var A = Number.parseInt(lines.shift());
var B = Number.parseInt(lines.shift());
var C = Number.parseFloat(lines.shift());

let SALARY = B * C

console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

var A = Number.parseFloat(lines.shift());
var B = Number.parseFloat(lines.shift());
var C = Number.parseFloat(lines.shift());

let MEDIA = (A*2 + B*3 + C*5)/10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
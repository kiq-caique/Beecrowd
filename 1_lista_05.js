var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

var A = Number.parseFloat(lines.shift());
var B = Number.parseFloat(lines.shift());

let MEDIA = (A*3.5 + B*7.5)/11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);

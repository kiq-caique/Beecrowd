var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

const pi = 3.14159;

var R = parseInt(lines.shift());

let VOLUME = (4/3)*pi * Math.pow(R,3);

console.log(`VOLUME = ${VOLUME.toFixed(3)}`);

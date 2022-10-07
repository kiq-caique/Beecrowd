var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('stdin', 'utf8');

const pi = 3.14159;
let raio = parseFloat(input);
let area = pi * Math.pow(raio,2);

console.log("A=" + area.toFixed(4));
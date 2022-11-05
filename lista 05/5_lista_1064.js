var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var positivos = 0
c = 0
for (var cont = 0; cont < 7; cont++){
    var x = parseFloat(lines.shift());
    if (x > 0) {
    positivos++ 
    c = x + c
    }
}
console.log(`${positivos} valores positivos`);
console.log((c/positivos).toFixed(1))
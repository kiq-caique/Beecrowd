var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var positivos = 0

for (var cont = 0; cont < 7; cont++){
    var x = parseFloat(lines.shift());
    if (x > 0) {
    positivos++   
    }
}
console.log(`${positivos} valores positivos`);
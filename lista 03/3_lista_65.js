var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pares = 0

for (var cont = 0; cont < 5; cont++){
    var x = parseInt(lines.shift());
    if (x % 2 === 0) {
    pares++   
    }
}
console.log(`${pares} valores pares`);
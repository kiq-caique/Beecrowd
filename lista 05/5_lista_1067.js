var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());

for (var cont = 0; cont <= x; cont++){
        
    if (cont % 2 === 1) {
        console.log(cont)
    }
}

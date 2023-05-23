var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

pares = 0
impares = 0 
positivos = 0 
negativos = 0

for (cont = 0; cont < 5; cont++) {
    x = Number(lines.shift())
    if (x === 0) {
        pares++
    }else if (x > 0 && x % 2 !== 0) {
        positivos++
        impares++
    }else if (x < 0 && x % 2 === 0) {
        negativos++
        pares++
    }else if (x < 0 && x % 2 !== 0) {
        negativos++
        impares++
    }else if (x > 0 && x % 2 === 0) {
        positivos++
        pares++
    }
}
console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)
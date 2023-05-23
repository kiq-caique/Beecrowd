// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// let valor = parseInt(input);

// console.log(valor);

// let qtdNotas = parseInt(valor) / 100;
// console.log(`${qtdNotas} nota (s) de R$ ${100},00` )
// valor = valor % 100;

// qtdNotas = parseInt(valor) / 50;
// console.log(`${qtdNotas} nota (s) de R$ ${50},00` )
// valor = valor % 50;
    
// qtdNotas = parseInt(valor) / 20;
// console.log(`${qtdNotas} nota (s) de R$ ${20},00` )
// valor = valor % 20;
        
// qtdNotas = parseInt(valor) / 10;
// console.log(`${qtdNotas} nota (s) de R$ ${10},00` )
// valor = valor % 10;
            
// qtdNotas = parseInt(valor) / 5;
// console.log(`${qtdNotas} nota (s) de R$ ${5},00` )
// valor = valor % 5;
                
// qtdNotas = parseInt(valor) / 2;
// console.log(`${qtdNotas} nota (s) de R$ ${2},00` )
// valor = valor % 2;
                    
// qtdNotas = parseInt(valor) / 1;
// console.log(`${qtdNotas} nota (s) de R$ ${1},00` )
// valor = valor % 1;

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota in notas) {
    let qtdNotas = parseInt(valor/nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`)
    valor = valor % nota;
}

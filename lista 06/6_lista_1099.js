var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n')

let numeroDeTestes = parseInt(lines.shift());
let testes = [];
let x = [];
let y = [];

for (let i = 0; i < numeroDeTestes; i++) {
let aux = 0;
testes[i] = lines.shift();
x[i] = parseInt(testes[i].split(" ").shift());
y[i] = parseInt(testes[i].split(" ").pop());

for (let i = 0; i < numeroDeTestes; i++) {
    if (x[i] < y[i]){
        for (let i = x[i] + 1 ; u < y[i]; i++) {
            if (i % 2 !== 0) {
                aux = aux + i;
            }
        }
    }
}

}



//  console.log(numeroDeTestes)
 console.log(u)
//  console.log(x)
//  console.log(y)
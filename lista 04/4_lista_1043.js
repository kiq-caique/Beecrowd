var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');

const A = Number(lines.shift())
const B = Number(lines.shift())
const C = Number(lines.shift())

let P2, area

if (A >= B+C || B >= A+C || C >= A+B){
    area = (A+B)*C/2
    console.log(`Area = ${area.toFixed(1)}`)
}else{
    P2 = A + B + C
console.log(`Perimetro = ${P2.toFixed(1)}`)
}
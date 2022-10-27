var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split(" ")

var a = parseFloat(valores.shift())

if (a >= 0 && a <= 400) {
    b = 1.15
    console.log(`Novo salario: ${(a*b).toFixed(2)}`)
    console.log(`Reajuste ganho: ${((a*b)-a).toFixed(2)}`)
    console.log(`Em percentual: 15 %`)
}
else if (a > 400 && a <= 800) {
    b = 1.12
    console.log(`Novo salario: ${(a*b).toFixed(2)}`)
    console.log(`Reajuste ganho: ${((a*b)-a).toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
}
else if (a > 800 && a <= 1200) {
    b = 1.10
    console.log(`Novo salario: ${(a*b).toFixed(2)}`)
    console.log(`Reajuste ganho: ${((a*b)-a).toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
}
else if (a > 1200 && a <= 2000) {
    b = 1.07
    console.log(`Novo salario: ${(a*b).toFixed(2)}`)
    console.log(`Reajuste ganho: ${((a*b)-a).toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
}
else if (a > 2000) {
    b = 1.04
    console.log(`Novo salario: ${(a*b).toFixed(2)}`)
    console.log(`Reajuste ganho: ${((a*b)-a).toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}
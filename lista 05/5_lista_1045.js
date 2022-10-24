var input = require("fs").readFileSync("stdin", "utf8");

const valores = input.split(" ")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())
var C = parseFloat(valores.shift())

if (B > A && B > C) {
    aux = A;
    A = B;
    B = aux;
} 
if (C > A) {
    aux = A;
    A = C;
    C = aux;
}

if (A >= (B + C)) { 
    console.log("NAO FORMA TRIANGULO");
} else {
    if (A*A == (B*B) + (C*C)) console.log("TRIANGULO RETANGULO");
    if (A*A > (B*B) + (C*C)) console.log("TRIANGULO OBTUSANGULO");
    if (A*A < (B*B) + (C*C)) console.log("TRIANGULO ACUTANGULO");
    if (A == B && A == C) console.log("TRIANGULO EQUILATERO");
    if ((A == B && A != C) || (A == C && A != B) || (B == C && B != A)) console.log("TRIANGULO ISOSCELES");
}
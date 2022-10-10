var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split(" ");

const pi = 3.14159;

var A = Number.parseFloat(valores.shift());
var B = Number.parseFloat(valores.shift());
var C = Number.parseFloat(valores.shift());

let AreaTriangle = A * (C/2);
let AreaCircle =  pi * Math.pow(C,2);
let AreaTrapezium = (A+B)*(C/2);
let AreaSquare = Math.pow(B,2);
let AreaRectangle = A*B;

console.log(`TRIANGULO: ${AreaTriangle.toFixed(3)}`);
console.log(`CIRCULO: ${AreaCircle.toFixed(3)}`);
console.log(`TRAPEZIO: ${AreaTrapezium.toFixed(3)}`);
console.log(`QUADRADO: ${AreaSquare.toFixed(3)}`);
console.log(`RETANGULO: ${AreaRectangle.toFixed(3)}`);
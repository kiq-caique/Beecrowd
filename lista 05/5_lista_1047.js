var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split(" ")

var A = parseInt(valores.shift())
var a = parseInt(valores.shift())
var B = parseInt(valores.shift())
var b = parseInt(valores.shift())

if (A > B && a === b){
    console.log(`O JOGO DUROU ${24-A+B} HORA(S) E ${a-b} MINUTO(S)`)
}else if(B > A && a === b){
    console.log(`O JOGO DUROU ${24-(24-B+A)} HORA(S) E ${a-b} MINUTO(S)`)
}else if(A > B && a > b){
    console.log(`O JOGO DUROU ${24-A+B-1} HORA(S) E ${60-a+b} MINUTO(S)`)
}else if(B > A && b > a){
    console.log(`O JOGO DUROU ${24-(24-B+A)} HORA(S) E ${60-(60-b+a)} MINUTO(S)`)
}else if(A > B && a < b){
    console.log(`O JOGO DUROU ${24-A+B} HORA(S) E ${60-(60-b+a)} MINUTO(S)`)
}else if(B > A && a > b){
    console.log(`O JOGO DUROU ${24-(24-B+A)-1} HORA(S) E ${60-a+b} MINUTO(S)`)
}else if (A === B && a === b) {
    console.log(`O JOGO DUROU 24 HORA(S) E ${a-b} MINUTO(S)`)
}else if (A === B && a > b) {
    console.log(`O JOGO DUROU 23 HORA(S) E ${60-a+b} MINUTO(S)`)
}else if (A === B && b > a) {
    console.log(`O JOGO DUROU 0 HORA(S) E ${b-a} MINUTO(S)`)
}
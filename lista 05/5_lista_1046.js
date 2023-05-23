var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split(" ")

var A = parseInt(valores.shift())
var B = parseInt(valores.shift())

if (A > B){
    console.log(`O JOGO DUROU ${24-A+B} HORA(S)`)
}else if(B > A){
    console.log(`O JOGO DUROU ${24-(24-B+A)} HORA(S)`)
}else if (A === B) {
    console.log(`O JOGO DUROU 24 HORA(S)`)
}
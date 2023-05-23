var input = require("fs").readFileSync("stdin", "utf8");

const valores = input.split(" ")

const n1 = parseFloat(valores.shift())
const n2 = parseFloat(valores.shift())
const n3 = parseFloat(valores.shift())

let a, b, c 

if (n1<n2 && n1<n3){
    a = n1
    if(n2 > n3){
        b = n3
        c = n2
    }else{
        b = n2
        c = n3
    }
}else if(n1>n2 && n1>n3){
    c = n1 
    if(n2 > n3){
        a = n3
        b = n2
    }else{
        a = n2
        b = n3
    }
}else{
    b = n1
    if(n2 > n3){
        a = n3
        c = n2
    }else{
        a = n2
        c = n3
    }
}
    if (a>=b+c){
        console.log('NAO FORMA TRIANGULO')
    }else{
    if (Math.pow(a,2) = Math.pow(b,2) + Math.pow(c,2)){
        console.log('TRIANGULO RETANGULO')
    }
    else if (Math.pow(a,2) > Math.pow(b,2) + Math.pow(c,2)){
        console.log('TRIANGULO OBTUSANGULO')
    }
    else if (Math.pow(a,2) < Math.pow(b,2) + Math.pow(c,2)){
        console.log('TRIANGULO ACUTANGULO')
    }
    else if (a===b && a===c){
        console.log('TRIANGULO EQUILATERO')
    }
    else if (a===b || a===c || b===c){
        console.log('TRIANGULO ISOSCELES')
    }
}
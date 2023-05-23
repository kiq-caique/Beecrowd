var input = require('fs').readFileSync('stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split(' ');

const A = Number(lines.shift())
const B = Number(lines.shift())


if (B > A && B % A === 0){
    console.log('Sao Multiplos')
}
else if (A > B && A % B === 0){
    console.log('Sao Multiplos')
}
else {
    console.log('Nao sao Multiplos')}
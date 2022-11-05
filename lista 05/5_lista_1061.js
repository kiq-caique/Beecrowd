const SEGUNDO = 1;
const MINUTO = 60 * SEGUNDO;
const HORA = 60 * MINUTO;
const DIA = 24 * HORA;

// Transforma tempo em segundos.
function tempoParaSegundos(tempo) {
    const [
        hora,
        minutos,
        segundos,
    ] = tempo.split(' : ');

    return (
        (Number(hora) * HORA) +
        (Number(minutos) * MINUTO) +
        (Number(segundos) * SEGUNDO)
    );
}

const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.replace(/\r/ig, '').split('\n');
const [
    diaInicial,
    horaInicial,
    diaFinal,
    horaFinal,
] = lines;
const diaFinalNum = Number(diaFinal.replace('Dia ', ''));
const diaInicialNum = Number(diaInicial.replace('Dia ', ''));
const diasEmSegundos = (diaFinalNum - diaInicialNum) * DIA;
const segundosRestantes = tempoParaSegundos(horaFinal) - tempoParaSegundos(horaInicial);
const totalSegundos = diasEmSegundos + segundosRestantes;

// Math.floor() arredonda o número para baixo, ex: Math.floor(2.9) === 2;
console.log(Math.floor(totalSegundos / DIA) + ' dia(s)')
console.log(Math.floor((totalSegundos % DIA) / HORA) + ' hora(s)')
console.log(Math.floor((totalSegundos % HORA) / MINUTO) + ' minuto(s)')
console.log(Math.floor((totalSegundos % MINUTO) / SEGUNDO) + ' segundo(s)')

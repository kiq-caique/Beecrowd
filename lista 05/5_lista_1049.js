var input = require('fs').readFileSync('stdin', 'utf8');

const tipos = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba"
    },
    mamifero: {
      onivoro: 'homem',
      herbivoro: 'vaca'
    }
  },
  invertebrado: {
    inseto: {
      hematofago: 'pulga',
      herbivoro: 'lagarta'
    },
    anelideo: {
      hematofago: 'sanguessuga',
      onivoro: 'minhoca'
    }
  }
};

var lines = input.replace(/\r/ig, '').split('\n');
var a = lines.shift()
var b = lines.shift()
var c = lines.shift()


console.log(tipos[a][b][c])


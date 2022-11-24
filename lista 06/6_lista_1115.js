var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


// var [x, y] = lines[0].split(" ").map(item => parseInt(item));

var x = lines.split("");
var y = lines.split("");

while (x != 0 && y != 0) {
    if (x > 0 && y > 0) {
        System.out.println("primeiro");
    } else if (x > 0 && y < 0) {
        System.out.println("quarto");
    } else if (x < 0 && y < 0) {
        System.out.println("terceiro");
    } else if (x < 0 && y > 0) {
        System.out.println("segundo");
    }
}
    x = input.nextDouble();
    y = input.nextDouble();




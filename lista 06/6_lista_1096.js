let cont = 0


function x (i,j) {
    if (cont>=3) {
        i+=2
        j+=5
        cont=0
    }
    if(i<=9){
        console.log(`I=${i} J=${j}`)
        j--
        cont++
        x(i,j)
        }
}
x(1,7)
function x (i,j) {
    if (j<0) {
        i+=2
        j+=5;
    }
    if(i<=9){
        console.log(`I=${i} J=${j}`)
        j--
        x(i,j)
        }
}
x(1,7)
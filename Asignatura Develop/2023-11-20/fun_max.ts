function max2(a: number, b: number): number {
    // let m=a;
    // if (b>m){
    //     m=b;
    // }
    // return m;
    return (a > b ? a : b);
}

//console.log("Maximos;" , max2(12,5));

function añade_valor (array: number[],valor: number){
    array.push(valor);
}

let A = [1,2,3];
añade_valor(A,4);
console.log(A);
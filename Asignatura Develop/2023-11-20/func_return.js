function nonsensica(a) {
    a++
    return 42;
}


function useless() {
    let a = 1;
    let b = a + 1;
}

let a = 3;
nonsensica(7);
let resultado2 = useless()
console.log(resultado2);
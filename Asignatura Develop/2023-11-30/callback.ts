//import { callbackify } from "util";

function sum(a, b) {
	return a + b;
}

function sumCallback(a: number,b:number,callback:(result:number)=> unknown) {
    const r = a+b;
    //setTimeout(()=>console.log("hola"),1000)
    setTimeout(()=>callback(r),2000)
    //callback(r);
}

console.log(sum(4,5));
sumCallback(4,5,(r) => {
    console.log("Result is",r);
});
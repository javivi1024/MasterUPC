
const promiseResponse = fetch("https://www.google.com");
promiseResponse
.then((response)=> response.text())
.then((text)=> console.log(text));
.catch((e)=>console.error("Algo ha pasado",e));
let TestObj = {
   "otro campo": true,
   'otr más': 24,
};
let person = {
  last: 'Bond',
  first: 'James',
  age: 27
};

//añadir campos
TestObj.a=1;
TestObj.b="3";
TestObj.c={};
TestObj.c.name = "cv";

// Quitar campos
//delete person.age;
console.log(`My name is ${person.last}, ${person.first} ${person.last} and my age is  ${person.age}`);
//console.log (TestObj)

console.log("last" in TestObj);
console.log("a" in TestObj);
console.log("edad" in person);
console.log("last" in person);

for (const prop in TestObj){
    //TestObj[prop]
    console.log (`Campo "${prop}"=`, TestObj[prop]);
}
// Lesson 2 - Is Even - Check if the given number is even or not
function isEven(num: number): boolean {
    return !(num % 2)
       if (num % 2===0) {return true
        
    } else return false;
}

console.log(isEven(2));
console.log(isEven(3));

// Lesson 3 - Rectangle Perimeter - How to find the perimeter?
//Utilizando una función clasica
function rectanglePerimeter(length: number, width: number): number {
    // your code here
    return 2 * length + 2 * width;
}
// Utilizando un arrow function
const rectanglePerimeter_arrow = (length: number, width: number): number => 2 * (length+width);

console.log(rectanglePerimeter(3, 2));
console.log(rectanglePerimeter_arrow(3, 2));

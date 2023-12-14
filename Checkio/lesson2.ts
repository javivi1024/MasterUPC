//Lesson 2 - Is Even - Check if the given number is even or not
function isEven(num: number): boolean {
    //return !(num % 2)
    return num % 2 === 0;
    /*
    if (num % 2) {return true 
    } else return false;
    */
    
}

console.log(isEven(6));

//Lesson 3 - Rectangle Perimeter - How to find the perimeter?
function rectanglePerimeter(length: number, width: number): number {
    // your code here
    return 2 * (length + width) ;
}

const rectanglePerimeter_arrow = (length: number, width: number): number => 2 * (length + width);

console.log(rectanglePerimeter(5,4));
console.log(rectanglePerimeter_arrow(5,4));
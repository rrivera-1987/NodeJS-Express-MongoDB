const rect = require('./rectangle');
// {
//     perimeter: (x, y) => 2 * (x + y),
//     area: (x, y) => x * y
// };

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}
        

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);

/* Create a variable named rect, short for rectangle.
It will take two methods. Methods are always written inside curly braces.
First method is the perimeter and it takes two values. The perimeter is the sum of all four sides.
The area method also takes two values. Then return the product of those two values by multiplying them together. 
L and W stand for Length and Width. 
Use templeta literal, meaning use backticks, not quotation marks (Line7). 

Assing to const rect the "require" function. Asing the relative path to this file will look inside the same folder.

*/

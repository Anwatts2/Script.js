// # Basic arithmetic with javascript
let num1 = 13;
let num2 = 3;
// # Add the two numbers together and print out the result
let sum = num1 + num2;
console.log("Sum: ", sum);
// # Subtract the two numbers and print out the result
let difference = num1 - num2;
console.log("Difference: ", difference);
// # Multiply the two numbers and print out the result
let product = num1 * num2;
console.log("Product: ", product);
// # Divide the two numbers and print out the result
let divide_result = num1 / num2;
console.log("Quotient: ", divide_result);
/* # Find the remainder when dividing the two numbers 
and print out the result, HINT: use the modulus operator */
let remainder = num1 % num2;
console.log("Remainder: ", remainder);

// # Use the Number object to complete the following tasks
// # Convert the string to a number and print it out
let str = "13";
let convertedNum = Number.parseInt(str);
console.log("Converted number: ", convertedNum);
// # Use the Number object to convert the string to a float and print it out
let float_string = "13.5";
let convertedInt = Number.parseFloat(float_string);
console.log("Converted integer: ", convertedInt);
// # Use the Number object to check if the follow variables are integers and print out the result
let num = 10;
let not_num = "hello";
console.log("Is num an integer: ", Number.isInteger(num));
console.log("Is not_num an integer: ", Number.isInteger(not_num));

// # Calculate the area of a circle using the formula A = PI * r^2 and print out the result
let radius = 7;
let PI = Math.PI; // # Use the Math object to get the value of PI
let area = PI * (Math.pow(radius,2));
console.log("Area: ", area);
// # Generate a random number between 1-20 and print it out
let randomNum =  (Math.random()) * 20 + 1;
console.log("Random number: ", randomNum);
// # Round the number to the nearest integer and print it out
let myFloat = 45.17;
let roundedNumber = (Math.round(myFloat));
console.log("Rounded number: ", roundedNumber);
// # Round the number up to the nearest integer and print it out
let roundedUpNumber = Math.ceil(myFloat);
console.log("Rounded up number: ", roundedUpNumber);
// # Round the number down to the nearest integer and print it out
let roundedDownNumber = Math.floor(myFloat);
console.log("Rounded down number: ", roundedDownNumber);

// # Below are two numbers, we will use the comparison operators to compare them

let numA = 15;
let numB = 16;
console.log("Is numA greater than numB: ", (numA > numB))
console.log("Is numA less than numB: ", (numA < numB));
console.log("Is numA equal to numB: ", (numA === numB));
console.log("Is numA not equal to numB: ", (numA !== numB));

//# Define a function call greetUser that takes in a name and prints out a greeting to the user.
function greetUser() {
  const name = "Obi Wan Kenobi";
  console.log(`Hello there, ${name}`);
}
// # change the function to an expression called greetUserExpression
let greetUserExpression = function greetUser() {
  const name = "Obi Wan Kenobi";
  console.log(`Hello there, ${name}`);
};
// # change the function to an arrow function called greetUserArrow
let greetUserArrow = () => {
  const name = "Obi Wan Kenobi";
  console.log(`Hello there, ${name}`);
};
// call the functions below

greetUser()
greetUserExpression()
greetUserArrow()

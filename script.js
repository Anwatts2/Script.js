// # Get the first character, second character of
let my_string = "Hello, World!";
console.log("First character: ", my_string[0]);
console.log("Second character: ", my_string[1]);
// # Get the first character, second character of
console.log("First character: ", my_string.charAt(0));
console.log("Second character: ", my_string.charAt(1));

// # combine the variables into a new variable and print
let first_name = "Slim";
let last_name = "Bay";
let full_name = first_name + " " + last_name;
console.log("My full name is:", full_name)
// # combine the first_name and last_name variables
let template_string = `${first_name} ${last_name}`;
console.log("My full name is:", "Once Again, " + template_string);

// # Change the values of the variables, then compare
const a = "2";
const b = "8";
console.log("a > b: ", a > b);
console.log("a < b: ", a < b);
console.log("a === b: ", a === b);
console.log("a !== b: ", a !== b);

// # Find the length of the string and print it out
let str = "How long is this string?";
console.log("The length of the string is: ", str.length);
// # Below we will practice using some string methods
let sentence = "It's over anakin! I have the high ground!";
// # Convert the sentence to all uppercase and print it out
console.log("Uppercase: ", sentence.toUpperCase());
// # Convert the sentence to all lowercase and print it out
console.log("Lowercase: ", sentence.toLowerCase());
// # Replace the word "high" with "low" and print it out
console.log("Modified sentence: ", sentence.replace("high", "low"));
// # Use the words variable and follow the instructions below
let words = "I am a string of words that will be split into an array of words";
// # Split the words into an array, assign the value to wordArray of words and print it out
let wordArray = words.split(" ");
console.log("Word array: ", wordArray);
// # Join the wordArray back into a string variable called joinedWords and print it out
let joinedWords = wordArray.join(" ");
console.log("Joined words: ", joinedWords);

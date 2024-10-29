// 1.String Manipulation:
// Create a string and convert it to uppercase and lowercase. Trim any extra spaces and check if it contains a specific substring.
const str1 = "HELLO,WORLD";
console.log(str1.toLowerCase());
const str2 = str1.trim();
console.log(str2);
console.log(str2.substring(2,7));


// 2.Substring Extraction:
// Use substring() and slice() to extract different parts of a string and compare the results.

// 3.String Splitting and Joining:
// Split a string into an array using a delimiter and then join the array back into a string.

// 4.Replace and Repeat:
// Replace a word in a string and then create a repeated version of the new string.
const strreplace = "india, Dhoni";
console.log(strreplace.replace("india","Csk"));
const strrepeat = strreplace;
console.log(strrepeat.repeat(2));

// 5.Template Literals:
// Use template literals to create a formatted string that includes variables and multi-line text.
let a = "Mani,Me";
console.log(a.includes("Me"));
let b = "Use template literals to create a formatted string that includes variables and multi-line text."
console.log(b.includes("to create a formatted"));




// Write a Function to Add Two Numbers
function addtwoNumber(x,y){
    return x+y;
}
console.log(addtwoNumber(2,3));

// Write a Function to Check Even or Odd
const number = 8;
function evenOdd(number) {
    if (number % 2 === 0) {
        console.log("This is Even Number");
    } else {
        console.log("This is Odd Number");
    }
}
console.log(evenOdd(number));

// Write a Function to Find the Maximum of Two Number
let max1 = 8;
let max2 = 2;
function maxNumber(){
    if(max1 > max2){
        console.log("max1 is heighest number")
    } else {
        console.log("max2 is hieghst number")
    }
}
maxNumber()

// Write a Function to Concatenate Strings
let concat1 = "Vanakkam";
let concat2 = "Machan";
function Concatenate(){
    console.log(concat1.concat(concat2));
}
Concatenate()


// Write a Function to Calculate Factorial
function factorial(n){
    if(n === 0){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
console.log(factorial(5))


// Write a Function to Reverse a String
let rev = "Virat";
function reverseString(){
    console.log(rev.split("").reverse().join(""));
}
reverseString()


// Write a Function to Count Vowels in a String
const v = "Hello";
function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}
console.log(countVowels(v));


// Write a Function to Find the Length of an Array
function lengthArray(arr){
    return arr.length
}
console.log(lengthArray([1,2,3,4,5]));

// Write a Function to Convert Celsius to Fahrenheit
let n = 10;
function celsiustoFahrenheit(n){
    return ((n * 9.0 / 5.0) + 32.0);
}
console.log(celsiustoFahrenheit(n))


// Write a Function to Filter Even Numbers from an Array
let even = [1,2,3,4,5,100];
let evenEmpty = [];
function arrayEven(){
    for(let i=0; i<even.length; i++){
        if(even[i] % 2 === 0){
            evenEmpty.push(even[i]);
        }
    }
    console.log(evenEmpty)
}
arrayEven()
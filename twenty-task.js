// Print numbers from 1 to 10
for(let i=1; i<=10; i++){
    console.log(i);
}

// Print even numbers from 1 to 20
for(let i=1; i<=20; i+=2){
    console.log(i);
}

// Print odd numbers from 1 to 20
for(let i=2; i<=20; i++){
    console.log(i)
}

// Sum of numbers from 1 to 10
let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;
}
console.log(sum);

// Factorial of a number (e.g., 5!)
let number = 5;
let factorial = 1;
for(let i=1; i<=number; i++){
    factorial *= i;
}
console.log(factorial);


// Print the elements of an array
let array = [1,2,3,4,5];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

// Reverse the elements of an array
let arrays = [1,2,3,4,5];
for(let i=arrays.length-1; i>=0; i--){
    console.log(arrays[i]);
}

// Print a multiplication table of 5
let multiple = 5;
for(let i=0; i<=15; i++){
    console.log(i * multiple + multiple);
}

// Find the maximum number in an array
let max = [1,2,3,4,5];
let empty = [0];
for(let i=1; i<max.length; i++){
    if(max[i] > empty){
        empty = max[i];
    }
}
console.log(empty);

// Find the minimum number in an array
let min = [1,2,3,4,5];
let minn = min.reduce((acc,cur) => (cur < acc ? cur : acc), min[0]);
console.log(minn);



// Count the number of vowels in a string
const string = "Ho";
function countVowel(str) { 
    const count = str.match(/[aeiou]/gi);
    return count;
}length
const vo = countVowel(string);
console.log(vo);


// Print the first 10 Fibonacci numbers
const fibnumber = 10;
function fibonacci(n){
    let fib = [0,1];
    for(let i=2; i < n; i++){
        fib[i] = fib[i-1] + fib [i-2];
    }
    return fib.slice(0,n);
}
console.log(fibonacci(fibnumber));



// Print numbers from 10 to 1
for(let i=10; i>=1; i--){
    console.log(i);
}




// Count digits in a number
const cnum = 12345;
function countDigit(num){
    return num.toString().length;
}
console.log(countDigit(cnum));



// Sum of digits in a number
let sumnum = 0;
for(let i=0; i<=10; i++){
    sumnum += i;
}
console.log(sumnum);


// Print all elements of an object
const obj = {name: "Mani", age:23, city:"Tenkasi"}
for(let key in obj){
    console.log(key + ":" + obj[key]);
}




// Create a pattern using a loop (e.g., triangle pattern)
function triangle(rows){
    for(let i=1; i<=rows; i++){
        let star = ";"
        for(let j=1; j<=i; j++){
            star += '*';
        }
        console.log(star);
    }
}
triangle(5);

// Print numbers from 1 to 100, but skip multiples of 3
for(let i=1; i <=100; i++){
    if(i%3 !== 0){
        console.log(i);
    }
}



// Convert a string to uppercase using a loop.
const result = toUppercase("Mani");
function toUppercase(str){
    let upperStr = "";
    for(let i=0; i < str.length; i++){
        upperStr += str[i].toUpperCase();
    }
    return upperStr;
}
console.log(result);



// Check if a number is prime
let inputValue= 7;
let isprime = inputValue == 1 ? false:true;  

for(let i=2; i<inputValue; i++){
  inputValue % i == 0 ? isprime *= false :isprime *= true;
};
console.log(`${inputValue} is ${isprime ? 'prime':'not prime'} number`)
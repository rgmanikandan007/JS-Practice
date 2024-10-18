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
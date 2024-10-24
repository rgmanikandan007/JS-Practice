
// Create and Modify Array:
// Create an array of your favorite fruits. Add a new fruit to the end and remove the last fruit.
const fruits = ["Apple","Orange","Banana","Cherry"];
const fruitsAdd = fruits.push("Grapes");
console.log(fruits);
const fruitsRemove = fruits.pop();
console.log(fruits);

// Array Methods:
//  Use splice() to replace the second element in an array with two new elements.
const spliceFruits = ["Apple","Orange","Banana","Cherry"];
const addspliceFruits = spliceFruits.splice(2,2, "Grape","Tomatto");
console.log(spliceFruits);


// Array Copy:
// Use slice() to create a new array that contains a subset of elements from the original array.
const sliceElement = ["Apple","Orange","Banana","Cherry","Tomatto","Carrot"];
const subset = sliceElement.slice(2,5);
console.log(subset);


// Concatenate Arrays:
// Create two arrays, one with numbers and another with letters. Use concat() to merge them into one array.
const concat1 = [1,2,3];
const concat2 = [4,5,6];
const concat3 = concat1.concat(concat2);
console.log(concat3);


// Transform and Filter:
// Use map() to create a new array where each element is doubled. Then use filter() to keep only the even numbers.
const mapMethod1 = [1,2,3,4,5];
const mapMethod2 = mapMethod1.map(function(num){
    return num * num
});
console.log(mapMethod2);
const evenMap = mapMethod2.filter(function(num2){
    return num2 % 2 === 0;
})
console.log(evenMap);


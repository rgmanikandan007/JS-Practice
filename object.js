// 1.Create and Access Object:
// Create an object representing a book with properties like title, author, and year. Access and modify these properties.
let book = {
    title: "Psycology of Money",
    author: "Morgan",
    year: 2020
}
console.log(book.title);
console.log(book.author);
console.log(book.year);


// 2.Object Methods:
// Add a method to the book object that prints a summary of the book (title and author).  
let book2 = {
        title: "Psycology of Money",
        author: "Morgan",
        summary: "Add a method to the book object that prints a summary of the book (title and author).  "
    }
    console.log(book2.summary);


// 3.Object Destructuring:
// Use object destructuring to extract the title and year of the book from the object.
const book3 = {
    title : "The Pillars of the Earth",
    author : "Ken Follet",
    year : 1989,
  }
  let {title,author} = book3;
  console.log(author);


// 4.Object Spread:
// Create another object with additional properties. Use the spread operator to merge it with the original book object.
let book4 = {
    title: "Psycology of Money",
    author: "Morgan",
    year: 2020
}
let updateBook = {...book, city: "Tenkasi"};
console.log(updateBook);


// 5.Iterate Properties:
// Write a for...in loop to iterate over the properties of the book object and log them to the console.
var obj = {
    name: "mani",
    age: "20",
    clothing: {
        style: "simple",
        hipster: true
    }
}
for(var val in obj){
    console.log(val + ': ' + obj[val]);
}
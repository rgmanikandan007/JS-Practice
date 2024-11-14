// 1. Create a JSON object that contains information about a book. It should include the title, author, publication year, genre, and an array of reviews.
const book = {
    "title": "ABC",
    "author": "xy",
    "publication year": 2020,
    "reviews": [
        {
            "review": "***"
        }
    ]
}
console.log(book);


// 2. Convert a JavaScript Object to JSON
let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
};
let movie2 = JSON.stringify(movie);
console.log(movie2);


// 3. Parse JSON Data from a String
const json = '{"name": "Charlie", "age": 25, "city": "London"}';
const obj = JSON.parse(json);

console.log(obj.name);
console.log(obj.age);


// 4. Create a Nested JSON Object
const nested = {
    "name": "Mani",
    "age": 23,
    "Address": [{
        "street": "Bus Stand Road",
        "city": "Tenkasi",
        "contry": "India"
    },
    {
        "skills": "FullStack Development"
    }
    ]
};
console.log(nested.Address[0].city);


// 5.  Modify a JSON Array
let modify = [
    { "name": "John", "age": 28 },
    { "name": "Anna", "age": 22 },
    { "name": "Peter", "age": 35 }
];

let newItem = { "name": "mani", "age": 23 };
let addItem = [...modify, newItem];
console.log(addItem);

let removeItem = { "name": "Anna", "age": 22 };
delete removeItem.name
console.log(removeItem);

let changeAge = 40;
let updatePerson = { "name": "Peter", "age": 35 };
let newChange = modify.map(item => item.age === updatePerson.age ? { ...updatePerson, age: changeAge } : item);
console.log(newChange);
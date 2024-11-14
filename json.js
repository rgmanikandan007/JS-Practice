// 1. Create a JSON object that contains information about a book. It should include the title, author,
//    publication year, genre, and an array of reviews.
const book = {
    "title": "ABC",
    "author": "xy",
    "publication year": 2020,
    "reviews": [
        {
            "first": "Good",
            "last": "Bad"
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



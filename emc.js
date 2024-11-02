// let price = 200;
// let product = "Glanza";
// let tax = 20;
// console.log("Product : " + product);
// console.log("Total : ", price + tax);

// let fruitName = "Apple";
// let count = 10;
// let Price = 20;
// let total = count * Price;
// console.log(fruitName);
// console.log(total);



// function redmi(){
//     console.log("Redmi");
// }
// redmi()

// function oppo(){
//     console.log("Oppo");
// }
// oppo()

// function realme(){
//     console.log("Realme");
// }
// realme()


// let a = 10;
// let b = 20;
// function add(){
//     console.log(a+b);
// }
// add()


// let factor = "Surya";
// let fplayer = "Dhoni";
// let fmovie = "Che";
// function Fav(){
//     console.log("Fav Actor : " + factor);
//     console.log("Fav Player : " + fplayer);
//     console.log("Fav Movie : " + fmovie);
// }
// Fav()


// function area(length, breath){
//     console.log(length * breath);
// }
// area(3,20)

// let rain = true;
// if(rain){
//     console.log("I need upmprela")
// } else {
//     console.log("No need umperla")
// }

// Did you finish your homework?
// let hw = "no";
// if(hw === "yes"){
//     console.log("Completed")
// } else {
//     console.log("Not Completed")
// }


// Are there any cookies left?
// let cookies = "yes";
// if(cookies === "yes"){
//     console.log("would you like a cookie?")
// } else {
//     console.log("Time to bake more cookies.")
// }


// Did you brush your teeth?
//  let brush = "yes";
//  if(brush === "yes"){
//     console.log("Your teeth are clean")
// } else {
//     console.log("GO and brush your teeth now")
// }


// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item)=>{
//     console.log(item);
// })


// function first(){
//     return 5;
// }
// function second(){
//     return 10;
// }

// let third = (second(),first());
// console.log(third);



// const one = ["one", "tow", "three"];
// console.log(one.includes("ow"));
// const second = "hello";
// console.log(second.includes("ll"));



function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

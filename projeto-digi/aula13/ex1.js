// Objects are a way to store data in key-value pairs.
// Example: bird = {
//   name: "Sparrow",
//   age: 1,
//   sings: true,
// };

// Exercises:

// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.
let cat = {
    name: "Mimi",
    color: "blue",
    age: 7,
}
//console.log("o nome do gato é ", cat.name, ", a idade é ", cat.age, " e a cor é ", cat.color);

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.
    //cat.toy = "little mouse",
    //cat.age = 8,

//console.log("o nome do gato é ", cat.name, ", a idade é ", cat.age, ", a cor é ", cat.color, " e ele brinca com ",cat.toy);

// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".
let dog = {
    name: "Bob",
    breed: "poodle",
    bark: function(){
        console.log("latir!");
    }
};
//console.log(dog.name);
//dog.bark();

// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.
let market = [
    {name: "banana", price: 2},
    {name: "maça", price: 3},
];
for (let i =0; i < market.length; i++){
   // console.log("Product: " +market[i].name + ", Price: " +market[i].price);
}

// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.
let movie = [
    {
        title: "um file", 
        director: "fulano",
        rating:5, 
        comment: "great"
    }
] 
//console.log("Review - rating: ",movie[0].rating," and comment: ",movie[0].comment );
// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

let scores = {
    Alice: 5,
    Bob: 7,
    Charlie: 4,
  };
  
  let total = 0;

  for(let players in scores){
    total += scores[players]
  }
  console.log(total)
   
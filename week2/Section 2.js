// create two variables: pizzaPlace and numberOfToppings
// reference the name of your pizza place and the number of toppings they offer
// print the variables and their types
// print a template literal that uses both variables to construct a short sentence about your pizza place
// construct an if statement that prints "Quality, not quantity", if you offer less than 10 toppings, or "a whole lot of pizza.", if you offer 10 or more toppings.
// Add, commit and push your JS file to your GitHub repo.

    
let pizzaPlace = "PapaJohn's";
let numberOfToppings = 5;
console.log(`${pizzaPlace} offers ${numberOfToppings} toppings.`);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
console.log( `${pizzaPlace} offers ${numberOfToppings} toppings.`)

if (numberOfToppings < 10) {
    console.log("Quality, not quantity");
} else {
    console.log("A whole lot of pizza.");
}

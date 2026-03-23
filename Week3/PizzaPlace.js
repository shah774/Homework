
// Create an array of PizzaToppings with at least four different toppings
// Create a greetCustomer function that prints a message that welcomes a guest,then informs them of the available toppings by looping over pizzaToppings "Welcome to Pizza House, our toppings are: a, b, c,..."
// Create a getPizzaOrder function has the parameters size, crust, and an indefinite amount of toppings as inputs, prints the order, i.e. "One large thick crust pizza with x,y,z ...coming up!", outputs a list with the size, crust, and toppings
// Create a preparePizza function that has an array as its parameters with three items: a size, a crust, and a list of toppings, prints something like "...Cooking pizza...", outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
// Create a servePizza function that has a parameter of a pizza Object, logs a message that the pizza is ready and repeats the order, i.e "Order up! Here's your large thick crust pizza with x,y,z,... Enjoy!"
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// Add, commit, and push your JS file to your Github repo
const pizzaToppings = ["Jalapenos", "Mushrooms", "Green Pepper", "Olives"];
function greetCustomer() {
    let message = "Welcome to Pizza House, our toppings are: ";
    for(let i =0; i < pizzaToppings.length; i++) {
        message += pizzaToppings[i];
        if (i < pizzaToppings.length - 1) {
            message += ", ";
        }
    }
    console.log(message);
}
greetCustomer();
function getPizzaOrder(size, crust, ...toppings) {console.log(`One ${size} ${crust} pizza with ${toppingList} coming up!`);
function getOrder(size, crust, toppings) {
    return { size, crust, toppings };
}
function preparePizza({ size, crust, toppings }) {
    console.log("...Cooking pizza...");
    return {
        size,
        crust,
        toppings
    };
}
function servePizza(pizza) {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} pizza with ${pizza.toppings.join(", ")}, Enjoy!`);
}
const pizzaOrder = getOrder("large", "thick", ["Jalapenos", "Mushrooms", "Green Pepper", "Olives"]);
const preparedPizza = preparePizza(pizzaOrder);
servePizza(preparedPizza);
}

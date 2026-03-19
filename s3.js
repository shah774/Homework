const pizzaToppings = ["black olive", "green pepper", "jalapenos", "mushroom"];
function greetCustomer() {
  const pizzaToppings = ["black olive", "green pepper", "jalapenos", "mushroom"];
  console.info("Welcome to our pizzeria! Our delicious toppings include: " + pizzaToppings.join(", ") + ".");
  console.info("We offer the following toppings:")
  for (let i = 0; i < pizzaToppings.length; i++) {
    console.info("- " + pizzaToppings[i]);
  }
}
function getPizzaOrder(size, crust, ...toppings) {
  let toppingsStr = toppings.length > 0 ? toppings.join(", ") : "no toppings";
  console.info(`One ${size} pizza with ${crust} crust and ${toppingsStr} coming up!`);
  return [size, crust, ...toppings];
}
order = getPizzaOrder("large", "thin", "black olive", "jalapenos");
console.info("Order details:", order);
function servePizza(pizza) {
  const { size, crust, toppings } = pizza;
  console.info(`Serving a ${size} pizza with ${crust} crust and the following toppings: ${toppings.join(", ")}.`);
}
const toppingsStr = toppings && toppings.length > 0 ? toppings.join(", ") : "no toppings";
console.info(`Order up! Here is your ${size} pizza with ${crust} crust and ${toppingsStr}.`);
return pizza;
const order = getPizzaOrder("large", "thin", "black olive", "jalapenos");
const preparedPizza = servePizza(order);
const servedPizza = servePizza(preparedPizza);
console.info(servedPizza);

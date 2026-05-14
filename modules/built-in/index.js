const { PizzaShop, DrinkMachine } = require("./events");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received: ${size} pizza with ${topping} topping`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "pepperoni");
pizzaShop.displayOrderCount();

//functions are the first class objects in javascript.
// a function can be passed as an argument to another function.
// a function can be returned from another function.
// a function can be assigned to a variable.
// a function can be stored in an array.
// a function can be stored in an object.
// a function can be stored in a database.
// a function can be stored in a file.
// a function can be stored in a network.
// a function can be stored in a cloud.

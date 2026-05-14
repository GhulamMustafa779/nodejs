// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('order-pizza', (size, topping) => {
//     console.log(`Ordering a ${size} pizza with ${topping} topping`);
// });

// emitter.on('order-pizza', (size) => {
//     if(size === 'large') {
//         console.log('Baking a large pizza...');
//     } else {
//         console.log('Baking a small pizza...');
//     }
// });

// emitter.emit('order-pizza', 'large', 'pepperoni');

const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderCount = 0;
    }

    order(size, topping){
        this.orderCount++;
        this.emit('order', size, topping);
    }

    displayOrderCount(){
        console.log(`Order count: ${this.orderCount}`);
    }
}

class DrinkMachine {
    serveDrink(size){
        if(size === 'large'){
            console.log('Serving coke');
        } else {
            console.log('Serving water');
        }
    }
}

module.exports = {
    PizzaShop,
    DrinkMachine
};
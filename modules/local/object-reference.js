const obj1 = {
    name: 'Me',
};

let obj2 = obj1;
obj2 = {
    name: "You",
};

console.log(obj1); 

// exports and module.exports work like this
// if we reassign the exports object, it will not affect the module.exports object
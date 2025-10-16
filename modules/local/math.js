// CommonJS module

// attaching methods to the exports object
exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  return a / b;
};

// assigning a new object to the exports object which is a wrong approach 
// because it will overwrite the exports object 
// and the methods will not be available
// exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }

// always use module.exports to export methods and variables
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }
const path = require("node:path"); // node is optional

// __dirname gets the directory name of the current file
// __filename gets the full path of the current file
// console.log(__dirname);
// console.log(__filename);

// basename gets the base name of the path
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// extname gets the extension of the path
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// parse parses the path into an object
// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// isAbsolute checks if the path is absolute
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

// join joins the paths together and normalizes the path
// console.log(path.join(__dirname, 'data.json'));
// console.log(path.join('first', 'second', 'third', 'fourth.html'));
// console.log(path.join('/first', '//second', 'third', '../fourth.html'));

// resolve adds the absolute path to the current file
console.log(path.resolve(__dirname, 'data.json'));
console.log(path.resolve('first', 'second', 'third', 'fourth.html'));
console.log(path.resolve('/first', 'second', 'third', '../fourth.html'));
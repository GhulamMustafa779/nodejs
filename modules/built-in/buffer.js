const buffer = new Buffer.from('Hello');

buffer.write('World Welcome to the buffer');

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());
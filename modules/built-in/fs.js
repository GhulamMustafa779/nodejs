const fs = require('node:fs');
const zlib = require('node:zlib');

// gzip algo for creating zip of a file
const gzip = zlib.createGzip();
// gzip has built in transform stream

const read = fs.createReadStream('./file.txt', {encoding: 'utf8', highWaterMark: 2});
const write = fs.createWriteStream('./file2.txt.gz', {encoding: 'utf8'});
read.pipe(gzip).pipe(write);


// read.on('data', (chunk) => {
//     console.log(chunk);
//     write.write(chunk);
// });
// read.on('error', (err) => {
//     console.log(err);
// });
// read.on('end', () => {
//     write.end();
// });






// async function readFile(){
//     try {
//         const fileContent = await fs.readFile('./file.txt', 'utf8');
//         console.log(fileContent);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile();






// console.log('First');

// fs.readFile('./file.txt', 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// console.log('Second')

// fs.writeFile('./greet.txt', 'Hello Mustafa',)
//     .then(() => {
//         console.log('File written successfully');
//     })
//     .catch(err => {
//         console.log(err);
//     });






// const fs = require('node:fs');

// console.log('First');

// const fileContent = fs.readFileSync('./file.txt', 'utf8');
// console.log(fileContent);

// console.log('Second');

// // error first callback functions
// fs.readFile('./file.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log('Third');

// fs.writeFileSync('./greet.txt', 'Hello Mustafa');

// fs.writeFile('./greet.txt', '! Welcome to the file system.', {flag: 'a'}, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File written successfully');
//     }
// });
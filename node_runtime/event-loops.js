// console.log('first');
// process.nextTick(() => {
//     console.log('second');
// });
// console.log('third');


// Promise.resolve().then(()=>{
//     console.log('promise resolved');
// });
// process.nextTick(() => {
//     console.log('next tick');
// });





// setTimeout(()=>{console.log('setTimeout 1')}, 0)
// setTimeout(()=>{console.log('setTimeout 2')
//     process.nextTick(()=>{console.log('setTimeout 2.1')})
// }, 0)
// setTimeout(()=>{console.log('setTimeout 3')}, 0)

// process.nextTick(()=>{console.log('process.nextTick 1')})
// process.nextTick(()=>{console.log('process.nextTick 2')
//     process.nextTick(()=>{console.log('process.nextTick 2.1')})
// })
// process.nextTick(()=>{console.log('process.nextTick 3')})

// Promise.resolve().then(()=>{console.log('promise 1')})
// Promise.resolve().then(()=>{console.log('promise 2')
//     process.nextTick(()=>{console.log('promise process.nextTick')})
// })
// Promise.resolve().then(()=>{console.log('promise 3')})

// output of the code:
// process.nextTick 1
// process.nextTick 2
// process.nextTick 3
// process.nextTick 2.1
// promise 1
// promise 2
// promise 3
// promise process.nextTick
// setTimeout 1
// setTimeout 2
// setTimeout 2.1
// setTimeout 3



// const fs = require('node:fs');

// fs.readFile(__dirname + '/../modules/built-in/file.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// process.nextTick(()=>{
//     console.log('process.nextTick');
// });

// Promise.resolve().then(()=>{
//     console.log('promise resolved');
// });
// console.log('end of the file');


const fs = require('node:fs');

const read = fs.createReadStream(__dirname + '/../modules/built-in/file.txt');
read.close();
read.on('close', () => {
    console.log('file closed1');
    process.nextTick(()=>{
        console.log('process.nextTick in file reading');
    }); 
    setTimeout(()=>{
        console.log('setTimeout in file reading1');
    }, 2);
    setImmediate(()=>{
        console.log('setImmediate in file reading1');
    });
});

process.nextTick(()=>{
    console.log('process.nextTick');
});
Promise.resolve().then(()=>{
    console.log('promise resolved');
});
setTimeout(()=>{
    console.log('setTimeout');
}, 0);

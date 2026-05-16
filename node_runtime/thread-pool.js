// const crypto = require('node:crypto');

// this can set the number of threads in the thread pool of libuv
// process.env.UV_THREADPOOL_SIZE = 4;

// Synchronous
// const start = Date.now();
// crypto.pbkdf2Sync('password1', 'salt', 100000, 512, 'sha512');
// console.log(`1: ${Date.now() - start}ms`);
// crypto.pbkdf2Sync('password2', 'salt', 100000, 512, 'sha512');
// console.log(`2: ${Date.now() - start}ms`);



// Asynchronous
// Hashing happening in libuv thread pool synchronously but happening in asynchronous way in node js
// const start2 = Date.now();
// const MAX_CALLS = 4;
// for(let i = 0; i < MAX_CALLS; i++) {
//     crypto.pbkdf2('password' + i, 'salt', 100000, 512, 'sha512', () => {
//         console.log(`${i}: ${Date.now() - start2}ms`);
//     });
// }
// libuv thread pool has 4 threads by default
// keep number of threads in the thread pool equal to the number of cores in the machine
// otherwise it will take more time to complete the hashing process as machine have to juggle between the threads


const https = require('node:https');

const MAX_CALLS = 10;

const start = Date.now();
for(let i = 0; i < MAX_CALLS; i++) {
    https.request('https://www.google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(`${i}: ${Date.now() - start}ms`);
        });
    }).end();
}

// all these request take equall time despite the number of threads in the thread pool are 4
// reason is the https.request is a network input/output operations which are not handled by the thread pool
// it is handled by the operating system 
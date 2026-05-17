// workerthreads module is a built-in module that allows to create a worker thread to run a script in a separate process
// code execute in a worker threads runs in a separate child process, preventing from blocking main thread
// The cluster module can be used to run multiple instances of nodejs that can distribute workloads
// worker_threads module allows running multiple application threads with in a single Node.js instance
// when peocess isolation is not needed, that is, no separate insatnce of V8, event loop and memory are needed, you should use worker_threads

const { parentPort } = require('node:worker_threads');

j = 0; 
for(let i = 0; i < 6000000000; i++) {
    j++;
}
parentPort.postMessage(j);
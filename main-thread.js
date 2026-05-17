const http = require('node:http');
const { Worker } = require('node:worker_threads');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } else if(req.url === '/about') {
        const worker = new Worker('./worker-thread-module.js');
        worker.on('message', (j) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>About Page</h1> <p>j: ${j}</p>`);
        }); 
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
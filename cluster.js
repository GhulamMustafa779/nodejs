const cluster = require('node:cluster');
const http = require('node:http');
const OS = require('node:os');

console.log(OS.cpus().length);

if(cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    const server = http.createServer((req, res) => {
        if(req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Home Page</h1>');
        } else if(req.url === '/about') {
            for(let i = 0; i < 6000000000; i++) {}
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>About Page</h1>');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        }
    });
    
    server.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
}

// If we call both url in separate window at a time both will take as much time as they take while running isolated
// but without cluster if a url with more load is running then page will less load will also take more time

// cluster allows to run multiple node js instances to distribute the load among them
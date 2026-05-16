const http = require('node:http');
const fs = require('node:fs');

// const server = http.createServer((_req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const data = {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 30,
//         email: 'john.doe@example.com',
//         city: 'New York',
//         country: 'USA',
//         isAdmin: true,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//     } 
//     res.end(JSON.stringify(data));
// });


// good for static files and if files are large then it will be efficient
// const server = http.createServer((_req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
// });


// good for static files and if files are large then it won't be efficient
// const server = http.createServer((_req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(fs.readFileSync('./index.html', 'utf8'));
// });


// if you want to make files dynamic and change content of it before you respond to the request
// html template engine like ejs, handlebars, etc.
// const server = http.createServer((_req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const name = 'Mustafa';
//     const html = fs.readFileSync('./index.html', 'utf8').replace('{{name}}', name);
//     res.end(html);
// });

// HTTP  Routing
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } else if(req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    }
}); 


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
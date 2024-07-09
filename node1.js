// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Welcome to GeeksforGeeks Node.js Tutorial');
// }).listen(8080);

// Importing the http module
// const http = require('http');
// const ev =require('events');
// const pt =require('path');
// const fs =require('fs');

// // Creating a server
// const server = http.createServer((req, res) => {
//     // Setting the content type to HTML
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     // Sending the HTML response
//     res.end('<h1>Hello GFG</h1>');
// });

// // Listening on port 3000
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });

// var a;
// console.log(a);


// console.log('Hello World');

// console.log(process.argv.slice(2));

setTimeout(()=>{
    console.log("This is event");
},2000);

console.log( __dirname);


const calculator = require('./node1.1');

let x = 50, y = 10;

console.log("Addition of 50 and 10 is "+ calculator.add(x, y));

console.log("Subtraction of 50 and 10 is "+ calculator.sub(x, y));

console.log("Multiplication of 50 and 10 is "+ calculator.mult(x, y));

console.log("Division of 50 and 10 is "+ calculator.div(x, y));
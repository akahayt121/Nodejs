
let http = require('http');


let url = require('url')

// http.createServer((req,res)=>{
//     res.write('Created server successfully');
//     res.end();
// }).listen(7000);

// let data={
//     host: 'www.geeksforgeeks.org',
//     path: '/courses',
//     method: 'GET'

// }


// http.request(data, (response)=>{
//     console.log('response is ', response.statusCode);
    
// }).end();

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/html'})
//     res.write(req.url);
//     res.end()
// }).listen(5000);

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});

//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end('txt');
// }).listen(5000);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    /*Use the url module to turn the querystring into an object:*/
    var q = url.parse(req.url, true).query;
    /*Return the year and month from the query object:*/
    var txt = q.year + " " + q.month;
    res.write(txt);
  }).listen(8080);




var fs = require("fs");
 
// // Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });


// let data= fs.readFileSync('input.txt');
// console.log('The data inside = ', data.toString());

// fs.writeFileSync('input.txt','\nI am working with nodejs');
let data ='\nThis is the world of chapri'

// fs.appendFile('input.txt',data,'utf-8',
//     function (err){
//         if(err){
//             throw err;
//         }
//         console.log('Appended to input.txt');
//     }
// )

// let x= fs.readFileSync('input.txt','utf-8')
// console.log(x);

fs.unlink('input.txt',
    function(err){
        if(err) {throw err};
        console.log('Deleted the file successfully');
        
    }
)
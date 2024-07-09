// var fs = require('fs');
// var rs = fs.createReadStream('./demo.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a fcfcfctvc !');
// }
// var bomb = function () {
//   console.log('I hear a pataka !');
// }

// //Assign the eventhandler to an event:
// // eventEmitter.on('scream', myEventHandler);
// eventEmitter.on('gubbara',bomb);

// //Fire the 'scream' event:
// eventEmitter.emit('gubbara');

let x='2024';

let event = require('events')

let cupachups = new event.EventEmitter();

let cricket = function(){
    console.log("We won the World Cup");
}

cupachups.on(16,cricket);

cupachups.emit(16)
/**
 * Created by shlomi on 03/08/2017.
 */


console.log("Hey");
var http = require("http");
var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString());

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());

});

console.log("Program Ended");

http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('I LOVE U\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


//Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
    eventEmitter.emit('data_received1')
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received1', function(){
    console.log('data received succesfully.');
});
eventEmitter.on('data_received', function(){
    console.log('data received succesfully --- 2.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");

var fs = require("fs");

fs.readFileSync('input.txt', function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("Program Ended");


var events = require('events');

var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
    console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
    console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

buf = new Buffer(20);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len + " " + buf.toString());


//var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

//import { Buffer } from "buffer";

var http = require("http");
var events = require("events");
require("./express.js");

var eventEmitter = new events.EventEmitter();


// console.log(app);


// console.log(__dirname);
// console.log(__filename);
// console.log(global);
// console.log(process);
// console.log(Buffer);


var buf = new Buffer("");
function print() {
    console.log('print a message');
}

eventEmitter.on('print', print);
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   eventEmitter.emit('print');
   let {url, params, body} = request;
   url === '/a' ? response.end('a: ' + url) : response.end('SHOW DATA  ' + url + params + body);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
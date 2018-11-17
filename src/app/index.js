//import { Buffer } from "buffer";

var http = require("http");
var events = require("events");
var formidable = require('formidable');
// require("./express.js");
// require("./write-stream.js");
// require("./read-stream.js");
require("./url.js");

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
http.createServer(function (request, res) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   
   
   // Send the response body as "Hello World"
   eventEmitter.emit('print');
   let {url, params, body} = request;
   // url === '/a' ? response.end('a: ' + url) : response.end('SHOW DATA  ' + url + params + body);

   if (url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields, files) {
      const temp = files.filetoupload;  
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('File uploaded');
      res.write('\nFile Name: ' + temp.name);
      res.write('\nFile Path(where is uploading): ' + temp.path);
      res.write('\nFile Size: ' + temp.size);
      res.write('\nFile Type: ' + temp.type);
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
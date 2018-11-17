var fs = require("fs");


/**
 * @function createReadStream
 * @description Read in the content of a file in a non-blocking, asynchronous way
 */
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.json');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

/**
 * @function readFile
 * @description Node.js is probably to read in the content of a file in a non-blocking, asynchronous way
 */
fs.readFile('input.txt', 'utf8', function(err, contents) {
    console.log(contents);
});

/**
 * @function readFileSync
 * @description Read file in synchronously (blocking)
 */

var contents = fs.readFileSync('input.txt', 'utf8');
console.log(contents);

console.log("Program Ended");
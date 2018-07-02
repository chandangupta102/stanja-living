var fs = require("fs");

/**
 * @function createWriteStream: create a file - 1
 * @description: It replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
 */
var data = 'Simply Easy Learning with NodeJS';
console.log('writing a file');
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

/**
 * Handle stream events --> finish, and error
 */

writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});


/**
 * @function writeFile: create a FILE - 2 
 * @description: It replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
 */

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved! ');
  });


  /**
 * @function appendFile: create a FILE - 3 
 * @description: method appends specified content to a file. If the file does not exist, the file will be created
 */

fs.appendFile('mynewfile3.txt', 'appended data Hello content!', function (err) {
    if (err) throw err;
    console.log('appended and Saved! ');
  });

   /**
 * @function open: create a FILE - 4 
 * @description: method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
 */

fs.open('openAfile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log(file + ' Empty File Created and opened in write mode !');
  });



 /**
 * @function unlink: Delete a FILE 
 * @description: method deletes the specified file.  If file Not Found, It will through a error
 */

fs.unlink('openAfile.txt', function (err) {
    try {
        if (err) throw err;
        console.log(' deleted !');
        } catch(e) {
            console .log('File Not Found which has to be deleted !')
        }
  });


   /**
 * @function rename: Delete a FILE 
 * @description: method rename the specified file. If file Not Found, It will through a error
 */

fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
    try {
    if (err) throw err;
    console.log(' Renamed !');
    } catch(e) {
        console .log('File Not Found which has to renamed !')
    }
  });


  

console.log("Program Ended");

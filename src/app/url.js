var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february#123';


/**
 * @function parse
 * @description Take a URL string, and return an object.
 * @param adr : URL string
 * @param second : Pass true as the second argument to also parse the query string using the querystring module. Defaults to false
 * @param third : Pass true as the third argument to treat //foo/bar as { host: 'foo', pathname: '/bar' } rather than { pathname: '//foo/bar' }. Defaults to false.
 */
var q = url.parse(adr, true);

console.log('PORT: ' + q.port);
console.log('PROTOCOL: ' + q.protocol);
console.log('HOST: ' + q.host); //returns 'localhost:8080'
console.log('PATHNAME: ' + q.pathname); //returns '/default.htm'
console.log('SEARCH QUERIES: ' + q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log('QUERY 1 : ' + qdata.month); //returns 'february'

console.log('AUTHOR: ' + q.auth);

console.log('PATH: ' + q.path);

console.log('HASH: ' + q.hash);



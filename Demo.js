const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os');



http.createServer((req, res) => {
   res.writeHead(200);
   res.end('hello world\n');
 });

 console.log(`Worker ${process.pid} started`);
// In this i used 3 modules one is cluster,http and OS.
//Connection to the server using child process.

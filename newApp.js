const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

//to access the exports 
//2nd and 3rd as that is an object now
// const server = http.createServer(routes.handler);

server.listen('4000');
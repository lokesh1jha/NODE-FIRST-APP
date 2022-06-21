console.log('Hello World')
const fs = require('fs'); //imported file system and stored in const fs 

//this system will provide facility to write in file i.e on localstorage 
fs.writeFileSync("hello.txt", "Hello from node.js") // file pat with name, fie contenet

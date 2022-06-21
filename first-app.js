console.log('Hello World')
const fs = require('fs'); //imported file system and stored in const fs 

//this system will provide facility to write in file i.e on localstorage 
fs.writeFileSync("hello.txt", "Hello from node.js") // file pat with name, fie contenet

let productOfTwo = (a,b) => a*b;
console.log(productOfTwo(2,3));

//student object
const student = {
    name:"Lokesh",
    rollno: 64,
    marks() { console.log(`${this.name} Scored 90 % `) } 
}

student.marks();
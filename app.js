const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req);
    const url = req.url;
    const method = req.method;

    if (url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();//return is used so that further code should not be run
    }

    //This is the way when a click on web page can trigger codes to run
    //Here code is to write DUMMY in a file named message.txt
    /*if(url === '/message' && method === 'POST'){
            fs.writeFileSync('message.txt', 'DUMMY');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
    }*/

    //How can we write data from webpage to files on system
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {   // res.on -> 'on' is listning from webpage ; 'data' -> 'on' will listen to the data send to server
            console.log(chunk); //to see how chunk of data looks
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message); 
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    // process.exit();  //it will close the server from running
    //Then you will not be able to reach your web page
})

server.listen(4000);

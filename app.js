const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Lokesh Kumar Jha</p></body></html>');
        res.end();
    }

    // process.exit();  //it will close the server from running
    //Then you will not be able to reach your web page
})

server.listen(4000);

const fs = require('fs');

const requestHamdler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == '/') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message">');
        res.write('<button type="submit">Send</button></form></body></html>');

        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];

            fs.writeFile('message.txt', message, err => {
                //after writing the code below code will be executed
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
}

// Atmost one export is allowed 
//1st way to write
module.exports = requestHamdler;

//2nd way -> if more than one thing to export
// module.exports = {
//     handler: requestHamdler,
//     someText: 'Some Hardcoded text'
// }

//3rd Way 
// module.exports.handler = requestHamdler;
// module.exports.someText = 'Some hardCoded text';

//Shortcut for 3rd way -> we can skip module
// exports.hadler = requestHamdler;
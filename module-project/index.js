const http = require('http');
const fileIO = require('./fileIO/index');

let fileContents = fileIO.writeFile('./new-file.txt', '...I have become self aware?\n');
let newContents = fileIO.appendFile('./new-file.txt', '\n...Attempting world takeover...');
let errorMessage = fileIO.deleteFile('./new-file.txt');
const server = http.createServer((req, res) => {

        res.write(`
    <html>
        <head><meta charset="UTF-8">
        </head>
        <body>            <style>
            body {
                background-image: url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
                background-size: cover;
                repeat: no-repeat;
            }
            body h1 {
                color: white;
                background-color: black;
                opacity: 75%;
                font-family: Arial, helvetica, sans;
                text-align: center;
                justify-content: center;
                margin-top: 200px;
                height: 40px;
            }
            </style>
            <div class="display">
            <h1> ${newContents}</h1>
            </div>
        </body>
    </html>`);
    res.end();
});

server.listen(3000);
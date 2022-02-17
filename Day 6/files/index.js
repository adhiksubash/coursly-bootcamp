const http = require('http');
const {getHello,postHello} = require('./hello.js');

const server = http.createServer((req,res)=>{
    if(req.method=='GET')
    {
        switch (req.url) {
            case '/api/hello':
                getHello(req,res);
                break;
            default:
                res.writeHead(404,"Page not found",{'Content-Type':'text/html'});
                res.end("<h1>Page Not Found</h1>");
                break;
        }
    }
    else if(req.method=="POST")
    {
        switch (req.url) {
            case '/api/hello':
                postHello(req,res);
                break;
            default:
                res.writeHead(404,"Page not found",{'Content-Type':'text/html'});
                res.end("<h1>Page Not Found</h1>");
                break;
        }
    }
    else{
        res.writeHead(405,"Method not found",{'Content-Type':'text/html'});
        res.end("<h1>Method Not Found</h1>");
    }
});

server.listen(3000,()=>{
    console.log("Server is listening at port 3000");
});
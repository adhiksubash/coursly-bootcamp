const http = require('http');
const {getHome,postHome} = require('./home.js');
const {getHello,postHello} = require('./hello.js');

const server = http.createServer((req,res)=>{
    if(req.method=='GET')
    {
        switch (req.url) {
            case '/':
                getHome(req,res);
                break;
            case '/api/hello':
                getHello(req,res);
                break;
            default:
                break;
        }
    }
    else if(req.method=="POST")
    {
        switch (req.url) {
            case '/':
                postHome(req,res);
                break;
            case '/api/hello':
                postHello(req,res);
                break;
            default:
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
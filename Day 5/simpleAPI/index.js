const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.method=='GET')
    {
        switch (req.url)
        {
            case '/':
                res.end('You are at home page');
                break;
            case '/customer':
                res.end('You are at customer page');
                break;
            default:
                res.writeHead(404,'Not found',{'Content-Type':'text/plain'});
                res.end('Page not found');
                break;
        }
    }
    else if(req.method=='POST'){
        switch (req.url){
            case '/':
                res.end('You are at post request home page');
                break;
            case '/customer':
                res.end('You are at post request customer page');
                break;
            default:
                res.writeHead(404,'Not found',{'Content-Type':'text/plain'});
                res.end('Post Page not found');
                break;
        }
    }
    else{
        res.writeHead(405,{'Content-Type':'text/plain'});
        res.end("Method is not allowed");
    }
});

server.listen(3000,()=>{
    console.log('server is running on port 3000');
});


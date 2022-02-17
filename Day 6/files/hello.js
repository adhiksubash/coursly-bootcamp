const fs  = require('fs');

function getHello(req,res) {
    fs.readFile('helloWorld.txt',(err,data)=>{
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error in opening file");
        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
}

function postHello(req,res){
    fs.open('helloWorld.txt','w+',(err,fd)=>{
        if(err)
        {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error in opening file");
        }
        else{
            fs.writeFile('helloWorld.txt',"Hello World",(err)=>{
                if(err)
                {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Error in writing file");
                }
                else{
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end("File written successfully");
                }
            })
        }
        
    });
    
}

exports.getHello = getHello;
exports.postHello = postHello;
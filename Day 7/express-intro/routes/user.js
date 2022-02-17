const express = require('express');
const fs  = require('fs');

const router = express.Router();

router.get('/',(req,res)=>{
    fs.readFile('users.json',(err,data)=>{
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error in opening file");
        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
});

router.post('/',(req,res)=>{
    var newJsonArray = [];
    req.on('data',(data)=>{
        fs.open('users.json','w+',(err,fd)=>{
            if(err)
            {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error in opening file");
            }
            else{
                newJsonArray.push(JSON.parse(data));
                fs.writeFile('users.json',JSON.stringify(newJsonArray),(err)=>{
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
    });
});

router.put('/',(req,res)=> {
    var newJsonArray = [];
    req.on('data',(data)=>{
        fs.readFile('users.json',(err,fileData)=>{
            if(err)
            {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error in opening file");
            }
            else{
                if(data.length>0)
                {
                    newJsonArray = JSON.parse(fileData);
                }
                newJsonArray.push(JSON.parse(data));
                fs.writeFile('users.json',JSON.stringify(newJsonArray),{flag:'w+'},(err)=>{
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
    });
});

module.exports = router;
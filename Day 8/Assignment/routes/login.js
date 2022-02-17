const express = require('express');
const fs  = require('fs');

const router = express.Router();

router.get('/',(req,res)=>{
    const username = req.query.username; 
    fs.readFile('users.json',(err,fileData)=>{
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error in reading file");
        }
        else{
            const users = JSON.parse(fileData); //json array
            const user = users.find(user=>user.username === username);
            if(user)
            {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(JSON.stringify(user));
            }
            else{
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("User not found");
            }
        }
    });
});

module.exports = router;
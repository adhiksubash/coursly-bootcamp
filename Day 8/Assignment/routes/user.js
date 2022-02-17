const express = require('express');
const fs  = require('fs');

const router = express.Router();


router.put('/',(req,res)=>{
    const username = req.query.username; 
    const modifiedUser = req.body;
    fs.readFile('users.json',(err,fileData)=>{
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error in reading file");
        }
        else{
            let users = JSON.parse(fileData); //json array
            users = users.map(user => {
                if(user.username===username)
                {
                    user = modifiedUser;
                }
                return user;
            });
            
            fs.writeFile('users.json',JSON.stringify(users),{flag:'w+'},(err)=>{
                if(err)
                {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end("Error in writing file");
                }
                else{
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end("File written successfully");
                }
            });
        }
    });
});

module.exports = router;
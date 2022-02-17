const express = require('express');
const fs  = require('fs');

const router = express.Router();

router.post('/',(req,res)=>{
    const newUser = req.body; // json data
    fs.readFile('users.json',(err,fileData)=>{
        if(err)
        {
            fileData = [];
        }
        writeFile(fileData,newUser,res);
    });
});


function writeFile(fileData, body,res)
{
    let newJsonArray = [];
    if(fileData.length>0)
    {
        newJsonArray = JSON.parse(fileData);
    }
    newJsonArray.push(body);
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
module.exports = router;

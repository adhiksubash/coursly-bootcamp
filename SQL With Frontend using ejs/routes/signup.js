const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const connection = require('../service/databaseService');
const saltRounds = 10;

router.post('/',(req,res)=>{
    let username = req.body.txtUsername;
    let password = req.body.txtPassword;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        connection.query('insert into login (username,password) values (?,?)',
        [username,hash],(err,results,fields)=>{
            if(err)
            {
                res.status(500).send(err);
            }
            else{
               res.redirect('/index');
            }
        });
    });
});

module.exports = router;

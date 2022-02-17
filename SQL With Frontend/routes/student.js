const express = require('express');
const router = express.Router();
const connection = require('../service/databaseService');

router.post('/',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;

    connection.query('insert into `student` (`firstName`,`lastName`,`address`) values (?,?,?);',
    [firstName,lastName,address],(err,results,fields)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            res.status(200).send('Data inserted successfully');
        }
    });
});

module.exports = router;
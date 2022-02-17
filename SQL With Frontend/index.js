//create express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

app.use(bodyParser.json());


app.use('/student', require('./routes/student'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/indexStyle', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/index.css'));
});

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started at port ${process.env.SERVER_PORT}`);
});
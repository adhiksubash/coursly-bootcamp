//create express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());


app.use('/student', require('./routes/student'));

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started at port ${process.env.SERVER_PORT}`);
});
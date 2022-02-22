//create express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwtVerify = require('./middlewares/jwtVerification.js');

require('dotenv').config();

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

// api routes
app.use('/student',jwtVerify, require('./routes/student'));
app.use('/api/login', require('./routes/login'));
app.use('/api/signup', require('./routes/signup'));

// UI routes
app.get('/',(req,res)=>{
    res.render('login.ejs')
});
app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
});
app.get('/index',jwtVerify,(req,res)=>{
    res.render('index.ejs')
});

// initialize server
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started at port ${process.env.SERVER_PORT}`);
});

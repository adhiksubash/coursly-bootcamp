const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
});

app.use('/signup',require('./routes/signup.js'));
app.use('/login',require('./routes/login.js'));
app.use('/user',require('./routes/user.js'));
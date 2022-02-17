const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
});

app.use('/user',require('./routes/user.js'));
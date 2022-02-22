const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtVerify(req,res,next){
    let token = req.cookies.token;
    if(token)
    {
        jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{
            if (err) {
                res.status(403).send(err);
            } else {
                next();
            }
        });
    }
    else{
        res.redirect('/');
    }
}

module.exports = jwtVerify;
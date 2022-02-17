function getHome(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You are at home page');
}

function postHome(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("You are at post request home page");
}

exports.getHome = getHome;
exports.postHome = postHome;
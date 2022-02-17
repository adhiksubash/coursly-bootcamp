function getHello(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You are at Hello page');
}

function postHello(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("You are at post request Hello page");
}

exports.getHello = getHello;
exports.postHello = postHello;
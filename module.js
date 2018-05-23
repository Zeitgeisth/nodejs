var http = require('http');
var server = http.createServer(function(req,res){
	res = writeHead(200, {'Content-Type':'text/plain'});
	res.end('hey ninjas');
});

server.listen(5000 , '139.59.84.225');
console.log('yo oy');




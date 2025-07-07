import http from 'http';
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello World!');
}    
).listen(8080);
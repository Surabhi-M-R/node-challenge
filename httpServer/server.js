const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-type","tet/plain");
        res.write("<h1> I am surabhi M R </h1>");
        res.end();
    }
     if(req.url==="/source-codde"){
        res.write(" I am surabhi M R is a very good girl");
        res.end();
    }
     if(req.url==="/contact"){
        
        res.write(" I am surabhi M R is also intelligent");
        res.end();
    }
});
// web server

const PORT =3000;
server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
});




const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write(" I am surabhi M R");
        res.end();
    }
});
// web server

const PORT =3000;
server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
});




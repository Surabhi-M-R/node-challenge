import fs from 'fs';
fs.readFile('myfile.txt','utf8',(err,data)=>{
    if(err){
        console.error('Error reading file:'+err);
        return ;
    }
    console.log('file content:'+data);
});

console.log(' Reading file... (this runs first!)');
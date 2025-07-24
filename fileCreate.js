import readline from 'readline';
import fs from 'fs';

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const showMenu=()=>{
    rl.question(" enter your file name ::", fileCreate);
}

const fileCreate=(name)=>{
    rl.question(" enter your content :",(content)=>{
        fs.writeFileSync(name , content ,"utf-8");
        console.log(fs.readFileSync(name,"utf-8"));
        rl.close();
    })
        
}

showMenu();
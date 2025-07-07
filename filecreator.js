import readline from 'readline';
import fs from 'fs';

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation=()=>{
    r1.question('Enter your file name : ',(filename)=>{
        r1.question(" enter the content for your file : ",(content)=>{
            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err){
                    console.log(` Error writing the file: ,${err.message } `);
                }
                    else{
                        console.log(` File "${filename}.txt" created successfully `);
                    }
                    r1.close();
                })

            })

        })
    }

fileCreation();

import readline from 'readline';
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const todo=[];

const showMenu=()=>{
    console.log("\n 1) Add a task");
    console.log("2) view task");
    console.log("3) exit");
    rl.question(" Enter your option ",handleInput);
}
const handleInput=(opt)=>{
    if(opt==="1"){
        rl.question(" enter  your task\n",task);
    }
    else if(opt==="2"){
        console.log(" your tasks are :\n")
        todo.forEach((task,index)=>{
            console.log(`${index+1} ,${task}`);
        })
        showMenu();
    }else if(opt==="3"){
        console.log("thanks, goodbye");
        rl.close();
        }
    else{
        console.log(" you have entered the wrong option");
        showMenu();
    }
}
const task=(str)=>{
    todo.push(str);
    console.log(`\ntask added: ${str}`);
    showMenu();
}


showMenu();
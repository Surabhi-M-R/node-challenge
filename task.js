const EventEmitter=require('events');
const emitter=new EventEmitter();

const eventCounts={
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "profile-update":0,

};

emitter.on("user-login",(username)=>{
    console.log(`${username} logged in !`);
});


emitter.emit(" user-login","sush");
emitter.emit(" user-purchase"," sush"," laptop");
emitter.emit(" profile-update"," sush","email");
emitter.emit("user-logout","sush");







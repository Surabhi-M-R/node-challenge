const EventEmitter = require('events');
const emitter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
};

emitter.on("user-login", (username) => {
    eventCounts["user-login"]++;
    console.log(`${username} logged in!`);

});

emitter.on("user-purchase", (username, item) => {
    eventCounts["user-purchase"]++;
    console.log(`${username} purchased ${item}`);
});

emitter.on("profile-update", (username, field) => {
    eventCounts["profile-update"]++;
    console.log(`${username} updated their ${field}`);
});

emitter.on("user-logout", (username) => {
    eventCounts["user-logout"]++;
    console.log(`${username} logged out`);
});
emitter.on("summary",()=>{
    console.log(eventCounts);
})


emitter.emit("user-login", "sush");
emitter.emit("user-purchase", "sush", "laptop");
emitter.emit("profile-update", "sush", "email");
emitter.emit("user-logout", "sush");

emitter.emit("summary");

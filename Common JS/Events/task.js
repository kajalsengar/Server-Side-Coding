const EventEmitter = require ('events');

const emitter  = new EventEmitter();


const eventCount  = {
  "user-login":0,
  "user-purchase":0,
  "profile-update":0,
  "user-logout":0,
};


emitter.on("user-login", (username)=>{
   eventCount['user-login']++;
    console.log(`${username} logged in!`)
});

emitter.on("user-purchase", (username,item) => {
    eventCount['user-purchase']++;
    console.log(`${username} purchase item!`)
});

emitter.on("profile-update", (username, field) => {
    eventCount['profile-update']++;
    console.log(`${username} update profile!`)
});

emitter.on("user-logout", (username) => {
    eventCount['user-logout']++;
    console.log(`${username} logged out!`)
});


emitter.on("summary", ()=>{
    console.log(eventCount);
});


emitter.emit("user-login" , "kajal");
emitter.emit("user-purchase", "kajal" , "Laptop");
emitter.emit("profile-update", "kajal" , "email");
emitter.emit("user-logout", "kajal");

emitter.emit("summary");
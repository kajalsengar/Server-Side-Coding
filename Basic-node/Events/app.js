
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("greet", (arg) => {
    console.log(`hello ${arg.username}, you are a ${arg.prof}, Right!`);
});

emitter.emit("greet", { username: "kajal", prof: "Backend Dev" });

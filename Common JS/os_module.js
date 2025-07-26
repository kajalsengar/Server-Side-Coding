const os = require('os');

console.log("Platform :", os.platform());
console.log("User :" , os.userInfo());

console.log("CPU Architecture :" , os.arch());

console.log("Free Memory :" , os.freemem(), "Bytes");
console.log("Total Memory :" , os.totalmem(), "Bytes");

console.log("System Uptime : " , os.uptime(), "Second");
console.log("Home Directory :", os.homedir());
console.log("Temporary Directory :" ,os.tmpdir());
console.log("Operating System :" , os.type());
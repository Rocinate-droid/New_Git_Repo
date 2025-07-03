const os = require("os");


console.log(os.uptime());
console.log(os.userInfo());

const osinfo = {
    type: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()

}
console.log(osinfo);
//1:引入events模块
let events = require("events");
//2：实例化
let eventEmitter = new events.EventEmitter();
const handleFn = function () {
  console.log("hello world")
};
eventEmitter.on("connection",handleFn);
eventEmitter.emit("connection");

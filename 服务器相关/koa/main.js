let childProcess = require("child_process");

//创建子进程
let child1 = childProcess.fork("./child.js");
let child2 = childProcess.fork("./child.js");

let server = require("net").createServer();

server.listen(1234,function () {
    child1.send("server", server);
    child2.send("server", server);
    server.close();
});


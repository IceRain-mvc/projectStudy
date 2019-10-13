let homeRouter = require("koa-router")();
let {fork} = require("child_process");
let crypto = require("crypto");

let private_key = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDIMmGRkjLmYaUnqDyks0MgB4ehgRPvjXo89jMA6topyHczhYg1
3wzZBVa6/cKASc2KrmXt6w1Dgc/QOw0JOrvuZ/HeY8gWCciVk6zjJCKFBBz6GacW
H7d/73yUtlmtUW9QfsMfkOL1c1TbnAcN5tc6fobwq8tx12UCvQhT8wFN3QIDAQAB
AoGACbOnVs6m+NMylcFpbvHhBuRWhlUjCjDpA5tKzXiUKgI1BKIr/7BXhwzjLxyt
GFp7Q4VAG0+QzPy1fXnfH9tg0A730RGYv17vyFtvL3xAEbU8+noNvckNE+WuTiKm
QlMBTG+Qaxwu36T9oa5PDA1lCnsb7sAV2rQChkXoNd4RIGECQQDlbY0PsUpqDi/a
95g95G9uU/vKcd4DmbVzXDsyvDkGtF6mYvEGEc9fw+oGZzJLHOeMKY6ePGFnfS2J
yzopX/iDAkEA32IjbmGEt6fBB2pBmEDUB2HXsn6+VUapYDiLvAGl16hKHkWHKKRY
tP6sRPYTWd3MzwbTOGRHvid80qKuPSMSHwJBALDZr4DHMwtpgC4T6UDcU6ECD/dP
qsmvtJUGJYPIX1TxuHwdjJkXJXk2dbEV30jTMRFz/0GuXY7+iRnMlDrMha0CQQCU
mcdyLYNJXVpGoYPjUfT6uDbyMehR+EDClrs2JW56qSQtQRlpivLL7MMS2RQEa01M
x4CJegRT1hbuVHROjV8HAkAAgqdgp/CLThUQmEMU1A+Y13XggVz7+b2EAUSypOxr
KtVJjdZ+T7jzRe84SCsIo1aU/moXm6PKndObPR6CnIb8
-----END RSA PRIVATE KEY-----
`;

const routers = homeRouter
    .get("/home", async function (ctx, next) {
        // 获取请求参数
        let query = ctx.query;
        console.log(query);


        /*1:创建子进程  向子进程发送消息*/
        const compute = fork("./process/compute.js");

        /*2:向子进程发送消息*/
        compute.send("开启一个新的子进程");

        /*3:接收子进程发送过来的信息*/
        compute.on("message", function (num) {
            /*num:接收子进程发送过来的消息*/
            // ctx.body = {
            //     result: num
            // };
            console.log("结果:" + num);

            // 杀死进程
            compute.kill();
        });

        ctx.body = {
            message: "/home"
        }
    })
    .post("/home/api", async function (ctx) {

        let encrypt = ctx.request.body.encrypt;
        //base64
        //转成二进制
        console.log(encrypt);

        //base64转换成2进制
        let bitmap = new Buffer(encrypt, 'base64');
        console.log(bitmap);

        /*二进制文件解密*/
        let privateDecrypt = crypto.privateDecrypt(private_key, encrypt);
        console.log(privateDecrypt.toString("utf-8"));


        ctx.body = {
            message: "/home/api",
            result: privateDecrypt
        }
    });

module.exports = routers;

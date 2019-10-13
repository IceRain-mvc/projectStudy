let crypto = require("crypto");
let fs = require("fs");

/*秘钥 : 私钥*/
let pemBuffer = fs.readFileSync("key.pem");

let key = pemBuffer.toString("ascii");
console.log(key);


let hmac = crypto.createHmac("sha1", key);

hmac.update("foo");

console.log(hmac.digest("hex"));





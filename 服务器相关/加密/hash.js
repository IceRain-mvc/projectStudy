/*1:引入crypto库*/

let crypto = require("crypto");

/*2:创建hash实例*/
/*2.1 md5*/
let hash = crypto.createHash("sha1");

console.log(hash.update("1"));

console.log(hash.digest("hex"));



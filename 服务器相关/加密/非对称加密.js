let crypto = require("crypto");
let fs = require("fs");


/*加载公钥*/
let publicKeyBuffer = fs.readFileSync("public_key.pem");

/*加载私钥*/
let privateKeyBuffer = fs.readFileSync("private_key.pem");


/*公钥加密*/
function encrypt(data) {
    return crypto.publicEncrypt(publicKeyBuffer.toString("ascii"), data);
}

/*私钥解密*/
function decrypt(encrypted) {
    return crypto.privateDecrypt(privateKeyBuffer.toString("ascii"),encrypted);
}


let encrypted = encrypt(Buffer.from("hello"));
// 将字符串转化为 base64 编码
let str = new Buffer('key1=value1&key2=value2').toString('base64');
console.log(str);                                              // 'a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTI='
// 解码
console.log(new Buffer(str, 'base64').toString());

let decrypted = decrypt(encrypted);

console.log(decrypted.toString());




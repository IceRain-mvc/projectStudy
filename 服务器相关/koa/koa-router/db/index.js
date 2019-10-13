let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "my_database"
});

connection.connect(error => {
    if (error) {
        console.log("连接失败");
    } else {
        console.log("连接成功");
    }
});

module.exports = connection;


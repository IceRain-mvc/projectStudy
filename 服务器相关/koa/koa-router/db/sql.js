let connection = require("./index");

module.exports = {
    allUser() {
        return new Promise((resolve, reject) => {
            connection.query(`select * from user`, (err, result) => {
                if (err) {
                    reject(err);
                    return
                }
                resolve(result);
            })
        });
    }
};

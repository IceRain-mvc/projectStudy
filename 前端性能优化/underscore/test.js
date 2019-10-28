let _ = require("underscore");

let arr = [];

arr['name'] = 'zhangsan';
arr['age'] = 12;

console.log(_.findWhere(arr, {name: 'zhangsan'}));



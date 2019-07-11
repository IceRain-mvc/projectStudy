/*
* js中类型判断最常见的是typeof  但是....
*
* */

console.log(typeof Symbol()); // symbol 有效
console.log(typeof ''); // string 有效
console.log(typeof 1); // number 有效
console.log(typeof true); //boolean 有效
console.log(typeof undefined); //undefined 有效
console.log(typeof new Function()); // function 有效
console.log(typeof null); //object 无效
console.log(typeof []); //object 无效
console.log(typeof new Date()); //object 无效
console.log(typeof new RegExp()); //object 无效


/*
* 所以 对于类型检测 最好采用下面方式:
* */
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);

const isArray = isType("Array");
const isObject = isType("Object");
const isRegExp = isType("RegExp");
const isNull = isType("Null");
console.log(isArray({}));


// console.log(`[Object ${type}]`);
console.log(Object.prototype.toString.call(null));


// /*
// *
// * es5
// * 全局
// * 局部
// *
// * eval("i*5")
// *
// * */
//
// for (var i = 0; i < 10; i++) {
//
//     // console.log(i);
//
//    fn(i)
//
// }
//
// function fn(i){
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);
//
// }
//
// let i = 10;
//
// let obj = {
//     time: 30,
//     time1: 40,
//     time3: 50
// };
//
//
// Object.keys(obj).forEach((item) => {
//     console.log(eval(`i*obj.${item}`));
// });

// eval(`(20)+add(2)+sub`)

// Number.prototype.add = function (num) {
//     return parseInt(this) + num ;
// };
//
// Number.prototype.subtact = function (num) {
//     return parseInt(this) - num ;
// };
//
// console.log((20).add(10).subtact(2));
//







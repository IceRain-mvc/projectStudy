let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function randomArr(params) {
//     return params.sort(function () {
//         return Math.random() * 100 - 50;
//     })
// }

console.log(arr.sort(() => Math.random() - 0.5));




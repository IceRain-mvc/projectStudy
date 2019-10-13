/*
*   ?号 和 *号
*
* */

let arr = ["data.dat", "data1.dat", "data2.dat", "data3.dat", "dataN.dat", "dataXYZ.dat","yaya"];

let pett2 = /data.*\.dat/;

arr.forEach((item) => {
    console.log(pett2.test(item));
});



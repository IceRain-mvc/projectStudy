

/*1*/
function getRandomNum() {
    return Math.floor(Math.random() * (80))+10;
}
/*2*/
function getNumNoRepeat(topNum) {
    let arr = [];
    let maxTimes = topNum;
    do {
        let num = getRandomNum(topNum);
        if (-1 === arr.indexOf(num)) {//数组中不存在
            arr.push(num);
            maxTimes--;
        }
    } while (maxTimes);
    return arr;
}

console.log(getRandomNum());
console.log(getNumNoRepeat(80));

/**
 * 获取字符串中出现次数最多的字母
 * @param {String} str
 */
function getChar(str) {
    if (typeof str !== 'string') return; // 判断参数是否为字符串
    const obj = new Object(); // 键为字母，值为次数
    for (let i = 0; i < str.length; i++) { // 遍历字符串每一个字母
        let char = str.charAt(i); // 当前字母
        console.log(char);
        console.log(obj[char]);
        obj[char] = obj[char] || 0; // 保证初始值为0
        obj[char]++ // 次数加1
    }
    console.log(obj);  // {a: 2, b: 3, c: 4, d: 2}
    let maxChar; // 存储字母
    let maxNum = 0; // maxChar字母对应的次数
    for (let key in obj) { // 遍历obj
        if (obj[key] > maxNum) {
            maxChar = key; // 比较后存储次数多的字母
            maxNum = obj[key] // 以及它对应的次数
        }
    }
    return [maxChar, maxNum]
}

let str = 'aabbbccccdd';
var c = getChar(str);
console.log(c);

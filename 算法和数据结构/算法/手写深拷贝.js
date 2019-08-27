/*
*   热门的函数库 lodash，提供_.cloneDeep用来做深拷贝
*   jquery 提供一个$.extend可以用来做深拷贝
*   JSON.parse(JSON.stringify())
*   手写递归方法
* */


function checkType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}


/*
* 1:深拷贝的是什么?
* []
* /
* {}
* */
function cloneDeep(target) {
    let result, targetType = checkType(target);
    if (targetType === "Object") {
        result = {};
    } else if (targetType === "Array") {
        result = [];
    } else {
        return target;
    }

    /*
    * 深拷贝
    * 原理:循环  递归
    * */
    for (let i in target) {
        let targetElement = target[i];
        if (checkType(targetElement) === "Object" || checkType(targetElement) === "Array") {
            result[i] = cloneDeep(targetElement);
        } else {
            result[i] = targetElement;
        }
    }
    return result;
}

/*
*
* Object.assign():
*
* */

let obj = {a: {b: 1}};
let arr = [1,2,3,4,5];

let cloneObj = cloneDeep(obj);

console.log(cloneObj);


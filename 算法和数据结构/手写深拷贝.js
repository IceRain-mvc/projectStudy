/*
*   热门的函数库 lodash，也有提供_.cloneDeep用来做深拷贝
*   jquery 提供一个$.extend可以用来做深拷贝
*   JSON.parse(JSON.stringify())
*   手写递归方法
* */


/*
* 1:深拷贝的是什么?
* []
* /
* {}
* */
function cloneDeep(target) {
    let result, targetType = checkType(target);
    if (target === "Object") {
        result = {};
    } else if (target === "Array") {
        result = [];
    } else {
        return target;
    }

    /*
    * 深拷贝
    * 原理:循环  递归
    * */
    for (let item in target) {


    }

}

function checkType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}

function* add() {
    yield "addadd";
    console.log("add");
    yield "aaa"

    return "ending";
}
let a = add();
console.log(a.next());
// console.log(a.next())

// let message = add().next();
// console.log(message);
// console.log(message);

/*
* 访问器属性
*
* 指令
*
* vue 的 dist文件 运行时编译包 运行时依赖包
*
* vue优化:
*   keep-alive
*   动态加载 ()=>{}
*   多用component和getters 缓存
*   路由的原理
*   手写bus
*   数据驱动视图
*
*
* */


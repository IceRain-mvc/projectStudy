/*
*
* @:装饰器 : 只能用在class
* mobx新建的仓库 都是 类
*
*
* 取数据
* observable: 被观察者  属性: 数据
*
* action:同步/异步 promise
*
*
* vuex:  getter: 帅选
*
* 优化:vue
*   1:按需加载
*   2:webpack  压缩 合并
*   3:懒加载
*   4:预加载
*   5:组件  封装  /  插件 : 复用性
*   6:效率
*     前后端交互 : 减少请求次数
*     前端 :
*       keep-alive :  elementUI 弹框
*       getter : 缓存数据 : 多用
*       computed: 计算 : 缓存
*   7:适配:
*     手机
*        1:媒体查询  : 根据不同的分辨率 加载不同的样式
*        2:栅格系统
*        3:rem
*        4:1px   缩放
*
* */

import {observable, action, computed} from "mobx";

class TestStore {
    /*
    * 1:存
    *
    * 2:取
    * */
    @observable data = "张三";

    /*  this指向 */
    @action.bound
    setData = (name) => {
        this.data = name;
    }

}

let testStore = new TestStore();

export default testStore;

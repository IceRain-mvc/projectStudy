import Obj from "../acions/index.js";
let defaultState = {};

/*
* 维护
* */

export default function (state = 0, action) {
    switch (action.type) {
        case Obj.ADD:
            // state = action.num;

            /*
            * 递归
            * */
            //JSON.parse(JSON.stringify(state));

            //基本类型--->栈
            //引用类型--->堆
            return ++state;
        case Obj.SUB:
            // state = action.num;

            state--;
            /*
            * 递归
            * */
            //JSON.parse(JSON.stringify(state));

            //基本类型--->栈
            //引用类型--->堆
            return state;
        default:
            return state;
    }
};

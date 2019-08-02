/*
* reducer
* */


/*异步处理  thunk 桑科*/
import thunk from "redux-thunk";


import {createStore,applyMiddleware,combineReducers} from "redux";
import myReducer from "./reducers/my";


/*
* my:state.myReducer
* */
let reducers = combineReducers({
    myReducer
});


let store = createStore(reducers,applyMiddleware(thunk));


export default store;

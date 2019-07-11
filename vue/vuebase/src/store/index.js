/*
* 1:创建一个仓库
* */


import Vuex from "vuex";
import Vue from "vue";
import rootModule from "./rootModule";
import modules from "./modules";

/*
* 2:Vue
* */

Vue.use(Vuex);

/*
* Vuex  install()
* */

let store = new Vuex.Store({
  /*全局数据*/
  modules,
  ...rootModule,
});

window.store = store;
export default store;

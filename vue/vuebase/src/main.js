// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

import "./plugin/element-config";
//
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.use(ElementUI);

import Toast from "./packages/toast";
import "./packages/toast/toast.css";
import "./components/bao-tabs/index";

Vue.use(Toast);


Vue.config.productionTip = false;

/* eslint-disable no-new */

import store from "./store";

let vm = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});




window.vm = vm;

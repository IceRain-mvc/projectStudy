import BaoTabs from "./BaoTabs";
import BaoTabPane from "./BaoTabPane";

import Vue from "vue";

/*
* 组件的关系
* */

BaoTabs.BaoTabPane = BaoTabPane;

//挂载在了全局
Vue.component("BaoTabs",BaoTabs);
Vue.component("BaoTabPane", BaoTabs.BaoTabPane);

/*
* Tabs
*    BaoTabPane label="标签一">内容<
*    BaoTabPane label="标签二"
*    BaoTabPane label="标签三"
*    BaoTabPane label="标签四"
*
*
* */

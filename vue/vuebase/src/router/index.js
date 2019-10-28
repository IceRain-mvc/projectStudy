import Vue from 'vue'
import Router from 'vue-router'
import routes from "./router-config";

Vue.use(Router)

let router = new Router({
  mode: "history",
  routes
});

/*全局前置守卫*/
router.beforeEach((to, from, next) => {


  /*
  * to:{}  fullPath:  跳转到额路径
  *   "/login"
  *   matched: 要跳转的路由信息  []
  * from:从哪跳转 "/home"
  *
  * next() : 放行
  *
  * next({path:"/login"})
  *
  * next能不能不写: 不写:卡住  啥也不显示
  * */

  /*boolean = some:return boolean  filter:筛选 return[] forEach:不能跳出循环  fori:break  map*/

  let isAuth = to.matched.some((r) => {
    return r.meta.auth;
  });

  if (isAuth) {
    let token = window.localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
  // console.log(to);
  // console.log(from);
});

/*
* 全局解析守卫
* */
router.beforeResolve((to, from, next) => {
  /*
  * 在什么时候执行:
  * */
  next();
});
/*
* 全局后置钩子(函数)
* */
router.afterEach((to, from) => {

});


export default router



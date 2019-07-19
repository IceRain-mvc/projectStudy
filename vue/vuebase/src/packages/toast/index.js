/*
* 这是一个插件
* */

let Toast = {};

/*
* 2:插件 .install(Vue,options)
* */


/*
* this.$bao_toast()
*
*
* Vue.use
*
* */

Toast.install = function (Vue, option) {

  console.log("install");
  /*
    Vue.myGlobleFunction = function () {
      /!*
      * 全局的方法
      * *!/
    };

    Vue.directive = function (el, binding) {
      /!*
      * 添加全局的指令
      * *!/
    };

    /!*使用混入来的组件*!/
    Vue.mixin = function () {

    };


    */

  Vue.prototype.$baoToast = function (message) {
    /*生成虚拟dom*/
    let toast = Vue.extend({
      template: `<div class="bao_toast">${message}</div>`,
      data() {
        return {
          time: 2500
        }
      }
    });
    let component = new toast().$mount();
    // console.log(component.$el); //函数
    //component.$el: 虚拟DOm
    // new toast().$mount();

    /*
    * 挂载到哪:
    * */

    document.querySelector("body").appendChild(component.$el);

    setTimeout(()=>{
      document.body.removeChild(component.$el);
    },2500)

  };

};

export default Toast;

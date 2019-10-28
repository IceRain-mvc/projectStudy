let BaoToast = {};
import Toast from "./Toast";
//Vue.use(组件,{})
BaoToast.install = function (Vue, options) {


  //this.$bao_toast("")

  Vue.prototype.$bao_toast = function (message,opt) {

    //创建组件  扩展 组件
    console.log(message);

    //返回的是 构造器
    const BaoToastContructor = Vue.extend(Toast); // vue组件实例= new 类

    if (document.getElementsByClassName("toast")[0]) {
      console.log("false");
      return;
    }

    //Toast实例
    let baotoast = new BaoToastContructor({
      data: {message: message,color:opt.color}
    });
    console.log(baotoast)

    //render() : 虚拟dom--->真实dom
    // baotoast.$mount();

    let dom = baotoast.$mount().$el;
    console.log(dom)

    document.body.appendChild(dom);

    setTimeout(() => {

      document.body.removeChild(dom);
    }, 1500);

    //div


  }


};


export default BaoToast;

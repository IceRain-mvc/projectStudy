import Main from "./Main.vue"

let Toast = {};
Toast.install = function (Vue, options) {
  //默认设置
  let opt = {
    defaultType: "center",
    duration: 1500
  };

  console.log(options);
  //Vue.use(Toast,{defaultType:"top"})
  for (let property in options) {
    opt[property] = options[property];
  }
  Vue.prototype.$toast = function (tips, type) {
    if (type) {
      opt.defaultType = type;
    }
    let ToastTpl = Vue.extend(Main);

    let toastTpl = new ToastTpl({
      data:{content:tips}
    }).$mount().$el;
    console.log(toastTpl);

    document.body.appendChild(toastTpl);
    setTimeout(() => {
      document.body.removeChild(toastTpl);
    }, opt.duration);

    ["bottom", "top", "left", "right"].forEach((item)=>{
      if (type === item) {
        opt.defaultType = type;
      }
    });
  };
};

export default Toast

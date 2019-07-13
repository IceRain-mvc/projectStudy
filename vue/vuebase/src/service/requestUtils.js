/*
* 1:设置BaseUrl
* 2:设置拦截
* 3:在拦截器中 添加一个请求头
* 4:在响应中拦截
*
* */

import axios from "axios";

/*
* create 创建基础配置的信息
* */
let request = axios.create({
  /*
  * 开发环境  "/exam"  生产环境  ""
  *
  * development/ 开发环境  /exam
  * production : 生产环境
  *
  * */
  baseURL: process.env.NODE_ENV !== "production" ? "/exam" : ""

});
/*
* 1:请求拦截
* */
request.interceptors.request.use((config) => {
  // console.log(process.env.NODE_ENV);
  console.log(config);
  config.headers.authorization = window.localStorage.getItem("token");
  /*必须返回一个config*/
  /*添加请求头的操作*/
  return config
}, (error) => {

  /*Promise.reject(error);   :   返回 promise对象    .catch()*/
  return Promise.reject(error);
});

/*
* 2:相应拦截
* */

request.interceptors.response.use((response) => {

  console.log(response);

  /*必须返回一个config*/

  /*添加请求头的操作*/
  return response.data
}, (error) => {
  console.log(error);
  /*Promise.reject(error);   :   返回 promise对象    .catch()*/
  return Promise.reject(error);
});


/*
* 调用:
* get("",params)
*
*
*
* request.get().then
*
*
* */

let get = (url, params) => request.get(url, {params});
let post = (url, data) => request.post(url, {data});
let deletes = (url, data) => request.delete(url, {data});
let put = (url, data) => request.put(url, {data});

/*
*
* get  /  post
* delete / put  :delete 信号  直接删除数据库
* head :检测 数据包是否完整 / option : 探测:服务器的性能
*
* CONNECT  / TRACE
*
* 没区别: 用法
*
* 协议
*
* 提交2次   post  post   这是两次请求
*  put  请求体都一样  认为 这是一次请求
*  幂等
*
*
* */

/*
* get(url,{name:name,age:age}).then().catch()
* */

export {get, post, deletes, put};





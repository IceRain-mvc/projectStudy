import axios from "axios";
import host from "../api/api";

export let getBabySong = () => {
  return axios.get(`${host}bb.php?type=getvideos&pagesize=30&collectid=29`)


  /*
  * 1:对象
  * 2:字符串
  * 3:Promise
  * 4:resolve
  * */
};

/*
* 1:jsonp
* 2:代理
* 3:cors : 后台  响应头
* */

export let getBabySongLyric = (id) => {
  //http://localhost:8080
  return axios.get(`/api?type=getlyric&rid=${id}`)
  /*
  * 1:对象
  * 2:字符串
  * 3:Promise
  * 4:resolve
  * */
};

/*
*
* */
export let login = (params) => {
  //http://localhost:8080
  return axios.post("/exam/user/login",
    {
      ...params,
    },
    {
      headers: {
        "authorization": "null"
      }
    }
  )
  /*
  * 1:对象
  * 2:字符串
  * 3:Promise
  * 4:resolve
  * */
};


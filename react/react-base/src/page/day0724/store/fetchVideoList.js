import {observable, action, computed} from "mobx";
import axios from "axios";

//redux  react-redux  mox-react


class FetchVideoList {

    @observable name;
    @observable age;
    @observable videoList;

    /*
    * bound: 解决this指向
    * */
    @action
    setName(name) {
        this.name = name;
    }


    @action
    saveVideoList(url) {
        //网络请求
        axios.get(url).then((res)=>{
            this.videoList = res.data.urls
        })
    }

    @action
    saveVideoAsync(url) {
        //网络请求
        return new Promise((resolve, reject) => {
            axios.get(url).then((res)=>{
                resolve(res.data.urls);
            }).catch((err)=>{
                reject(err);
            })
        });
    }
}

export default new FetchVideoList();

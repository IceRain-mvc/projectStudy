import {getBabySong,login} from "../service/request";

export default {
  state: {
    num: 0,
    type: 2,
    // shopCar:{}
    babySongList:[],
    loginInfo:{}
  },

  /*同步*/

  getters: {
    getSex(state) {
      return state.type === 1 ? "男" : "女";
    }
  },
  mutations: {
    add(state, action) {
      state.num++;
    },

    sub(state, action) {
      state.num--;
    },
    babySong(state, action) {
      state.babySongList = action.babySongList;
    },
    login(state,action) {

      state.loginInfo = action.loginInfo;

    }

  },

  actions: {
    addAsync({commit}) {
      setTimeout(() => {
        commit("add")
      }, 200)
    },
    subAsync(context, action) {

      console.log(action);
      setTimeout(() => {
        context.commit("sub")
      }, 200)
    },

    async babySongAsync({commit}, action) {
      //  请求数据
      /*
      * es7: 终极 转化异步的方案
      * await :一定要在async 中用
      * */
      let babySong = await getBabySong();
      // console.log(babySong.data.list);
      commit("babySong", {babySongList: babySong.data.list});


    },



    async loginAsync({commit}, action) {
      //  请求数据
      /*
      * es7: 终极 转化异步的方案
      * await :一定要在async 中用
      * */
      let loginInfo = await login(action);
      // console.log(babySong.data.list);
      commit("login",{loginInfo:loginInfo.data});


    }
  }
}

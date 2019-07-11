export default {

  /*开启了一个命名空间*/
  namespaced: true,

  state: {
    total: 100
  },
  mutations: {
    addTotal(state, action) {
      console.log(action.total);
      state.total += action.total;
    }
  },

  actions: {
    addTotalAsync({commit}, action) {
      commit("addTotal", {total: action.total})
    }
  }
}

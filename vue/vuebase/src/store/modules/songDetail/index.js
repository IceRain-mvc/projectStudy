import {getBabySongLyric} from "@/service/request"

export default {
  namespaced: true,
  state: {
    lyric: ""
  },
  mutations: {
    getBabySongLyric(state, action) {
      state.lyric = action.lyric
    }

  },

  actions: {
    async getBabySongLyricAsync({commit}, action) {
      let lyric = await getBabySongLyric(action.id);
      console.log(lyric);
      commit("getBabySongLyric", {lyric:lyric.data})
    }

  }
}

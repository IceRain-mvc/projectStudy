<template>
  <div>
    <h3 v-if="lyric">{{lyric}}</h3>
  </div>
</template>

<script>

  import {mapState, mapActions} from "vuex"

  export default {
    computed: {
      ...mapState("songDetail", ["lyric"])
    },
    name: "Songdetail",
    methods: {
      ...mapActions("songDetail", ["getBabySongLyricAsync"])
    },

    created() {
      /**/
      this.getBabySongLyricAsync({id: 30419});
    }

  }
</script>

<style scoped>

</style>

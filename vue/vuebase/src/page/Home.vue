<template>
  <div>

    <h1>首页</h1>
    <el-button @click="toast">Toast</el-button>

    <h1>{{sex}}</h1>
    <button @click="add">+</button>
    <h2>{{num}}</h2>
    <button @click="sub">-</button>


    <button @click="addTotal">总价</button>

    <h3>总价:{{total}}</h3>

    <ul v-if="babySongList.length">
      <li v-for="(item,index) in babySongList" :key="item.id" v-if="item.name">
        <h2>{{item.name}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from "vuex"

  export default {
    name: "Home",
    computed: {
      /*
      * 映射数据
      * mapState
      * mapGetter
      * */

      // getNum() {
      //   return this.$store.state.num;
      // }

      ...mapState(["num","babySongList"]),
      ...mapState("shopCar",["total"]),
      ...mapGetters({sex: "getSex"})
      // ...mapState({getNum: "num"})

    },
    created() {
      // console.log(this.$store.state.num);
      this.babySongAsync();

    },


    methods: {

      toast() {
        // console.log(this.$baoToast);
        this.$baoToast("你好");
      },

      ...mapActions(["addAsync", "subAsync","babySongAsync"]),
      ...mapActions("shopCar",["addTotalAsync"]),
      // ...mapActions("shopList",["addTotalAsync"]),

      /*映射方法
      * mapActions
      * mapMutations
      *
      * */
      add() {
        /*this.$store.commit()*/
        /*this.$store.dispatch()*/

        // this.$store.dispatch("addAsync")

        this.addAsync();

        /*this.addAsync()*/
        // this.$store.commit("add")
      },
      sub() {
        // this.$store.dispatch("subAsync")
        this.subAsync({name: "大儿子", name2: "小儿子", name3: "老儿子"});

      },
      addTotal() {
        this.addTotalAsync({total: 100});
      }

    }


  }
</script>

<style scoped>

</style>

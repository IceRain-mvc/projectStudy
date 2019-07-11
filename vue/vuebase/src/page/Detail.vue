<template>
  <div>
    <h2>他爷爷</h2>
    <hr>
    <Father/>
  </div>
</template>

<script>
  import Father from "../components/Father";

  export default {
    name: "Detail",
    /*
    * 1:基本
    * 2:引用类型  {}   []
    * 3:方法
    * */
    provide() {
      return {
        secret: this.name
      }
    },

    data() {
      return {
        name: "孙子"
      }
    },

    /*
      provide  :  对象{没有this}
    * 为函数的时候 可以有this
    * */
    // provide: {
    //   secret: this.name
    // },
    components: {
      Father
    }
  }
</script>

<style scoped>

</style>

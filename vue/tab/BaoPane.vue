<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "BaoPane",
    inject: ['baoInstance'],
    props:{
      label:{
        type: [String, Function],
        default: ""
      }
    },
    data() {
      return{
        isActive: false
      }
    },
    watch:{
      /*只要label变化 更新父组件中的navList*/
      label(){
        this.baoInstance.updateNav();
      }
    },
    mounted() {
      this.baoInstance.updateNav();
      this.baoInstance.updateBar();
    },
    destroyed() {
      this.baoInstance.updateNav();
    }
  }
</script>

<style scoped>

</style>

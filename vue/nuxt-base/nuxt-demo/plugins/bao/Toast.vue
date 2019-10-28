<template>
    <div class="toast" :style="{backgroundColor:color}">{{message}}</div>

</template>

<script>
  export default {
    name: "Toast",
    data() {
      return{
        message: "",
        color: ""
      }

    }
  }
</script>

<style scoped>
  .toast{

    position: absolute;
    z-index: 999;
    top: 10px;
    left: 200px;
  }
</style>

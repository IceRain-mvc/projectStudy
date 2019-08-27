<template>
  <div v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "BaoTabPane",
    props:{
      label: String,
      require: true
    },
    data(){
      return{
        active: false
      }
    }

  }
</script>

<style scoped>

</style>

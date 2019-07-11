<template>
  <div>

    <h2>儿子</h2>
    {{secret}}

  </div>
</template>

<script>
  export default {
    name: "Child",
    inject: ["secret"]
  }
</script>

<style scoped>

</style>

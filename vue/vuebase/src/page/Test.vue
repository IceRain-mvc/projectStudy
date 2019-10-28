<template>
    <div>


    </div>
</template>

<script>
  let mixinMe = {
    created() {
      console.log("created");
    }
  };


  export default {
    name: "Test",
    mixins:[mixinMe]
  }
</script>

<style scoped>

</style>

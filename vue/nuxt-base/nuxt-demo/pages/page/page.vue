<template>
    <div>
      <!-- demo root element -->
      <div id="demo">
        <form id="search">
          Search <input name="query" v-model="searchQuery">
        </form>
        <demo-grid
          :heroes="gridData"
          :columns="gridColumns"
          :filter-key="searchQuery">
        </demo-grid>
      </div>

      <button @click="toast">Toast</button>

    </div>
</template>

<script>
  export default {
    name: "page",
    data(){
      return {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 }
        ]
      }
    },
    methods:{
      toast(){
        this.$toast("你好");

      }

    }
  }
</script>

<style scoped>

</style>

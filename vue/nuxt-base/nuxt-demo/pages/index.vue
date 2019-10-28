<template>
  <div class="container">
      <h1>{{count}}</h1>
      <button @click="add1">+</button>
      <button @click="sub1">-</button>
      <nuxt-link to="/page">跳转</nuxt-link>

    <button @click="toast">吐司</button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {mapMutations} from "vuex"
export default {
  components: {
    Logo
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$nuxt.$loading.start();

      setTimeout(()=>{
        this.$nuxt.$loading.finish()
      },500)

    })

  },
  methods:{
    add1(){
      this.add();
    },
    sub1(){
      this.sub()
    },
    ...mapMutations(["add","sub"]),

    toast() {
      this.$bao_toast("你好呀!!!",{color:"#ff0000"});

    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div>
    <input type="text" v-model="name">
    <input type="text" v-model="pwd">
    <button @click="login">登录</button>

    <h3 v-if="loginInfo">
      <!--vue 渲染 {}   react:{[1,2,3,4]}===>1234-->
      {{loginInfo}}
    </h3>

  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";

  export default {

    computed: {
      ...mapState(["loginInfo"])
    },

    data() {
      return {
        name: "",
        pwd: ""
      }
    },
    name: "Login",
    methods: {
      ...mapActions(["loginAsync"]),
      login() {
        // this.loginAsync({user_name: this.name, user_pwd: this.pwd});

        window.localStorage.setItem("token", "abc");
        this.$router.push("/home");
        this.$notify({title: "登录成功", type: "info"})
      }

    }
  }
</script>

<style scoped>

</style>

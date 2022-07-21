<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
<!--    <my-component-name/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from "vue"
import HelloWorld from '@/components/HelloWorld.vue'
//
// Vue.component('my-component-name', {
//   template: <h3>我的第一个局部组件</h3>
// })
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

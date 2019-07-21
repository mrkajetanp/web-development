<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Product msg="Welcome to this Vue.js App"/>
  </div>
</template>

<script>
import Product from './components/Product.vue'

export default {
  name: 'app',
  components: {
    Product
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

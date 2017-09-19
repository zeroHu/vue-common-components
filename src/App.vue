<template>
  <div id="app">
    <header>i am header</header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  padding:0;
  margin:0;
}
li {
  list-style: none;
}
header {
  width: 100%;
  height:100px;
  line-height: 100px;
  color:#fff;
  background: #ccc;
}
</style>

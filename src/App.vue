<template>
  <div id="app">
    <header><h3>vue组件体验</h3></header>
    <router-view></router-view>
    <div>
      <p>
        <a href="http://www.zeroyh.cn">关于jquery 组件的更多</a>
      </p>
    </div>
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
  height:40px;
  line-height: 40px;
  color:#fff;
  background: #ff9090;
}
</style>

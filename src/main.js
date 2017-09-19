// import 引入所需
import Vue from 'vue'
import App from './App'
import router from './router'

// 生产环境的报错提示全部忽略设置
Vue.config.productionTip = false

/**
 * 注释:
 * render:h => h(App) 和  template: '<App/>',  components: { App } 作用是一样的
 * render 的优先级比 template 高 如果 Vue 选项中包含 render 函数，template 选项将被忽略。
 */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/**
 挂载在#app下 App 组件需要<App/>模板

 <div id="example">
  <my-component></my-component>
 </div>
 // 注册
 Vue.component('my-component', {
   template: '<div>A custom component!</div>'
 })
 // 创建根实例
 new Vue({
   el: '#example'
 })
 渲染为
 <div id="example">
   <div>A custom component!</div>
 </div>
*/

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 按需加载
const Index = r => require.ensure([], () => r(require('@/pages/Index')), 'Index')
const Detail = r => require.ensure([], () => r(require('@/pages/Detail')), 'Detail')

export default new Router({
  mode: 'history',
  base: '/vue', // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。也就是项目不是在根目录下(http://xxx.xxx.com/vue)的时候需要加上
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})

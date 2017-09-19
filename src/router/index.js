import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  model: 'history',
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

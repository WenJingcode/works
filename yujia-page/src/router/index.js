import Vue from 'vue'
import Router from 'vue-router'
import Yoga from '../components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yoga',
      component: Yoga
    }
  ]
})

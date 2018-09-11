import Vue from 'vue'
import Router from 'vue-router'
import Datepicker from '../components/Datepicker'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Datepicker
    }
  ]
})
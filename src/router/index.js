import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Car from '../views/car'
import Detail from '../views/detail'
import Mine from '../views/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path:'/car',
      component:Car
    },{
      path:'/mine',
      component:Mine
    },{
      path:'/detail/:id',
      component:Detail
    }
  ]
})

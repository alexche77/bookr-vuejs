import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Libros from '@/components/PublicBooks.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	{
    	path: '/',
    	name: 'home',
    	component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
    	path: '/libros',
    	name: 'libros',
    	component: Libros
    },        
  ]
})

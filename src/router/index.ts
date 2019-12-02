import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import '../assets/css/bootstrap.min.css'
import '../assets/css/bootstrap-slider.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/owl.carousel.css'
import '../assets/css/style.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

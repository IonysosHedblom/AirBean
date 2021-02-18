import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Status from '../views/Status.vue'
import Profil from '../views/Profil.vue'
import Meny from '../views/Meny.vue'
import Nav from '../views/Nav.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/meny',
    name: 'Meny',
    component: Meny
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

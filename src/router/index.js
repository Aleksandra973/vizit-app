import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '@/views/Contacts'
import Photo from '@/views/Photo'
import Research from '@/views/Research'
import Conferences from '@/views/Conferences'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/conference',
    name: 'Conferences',
    component: Conferences
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout:'MainLayout'},
    component: Home
  },
  {
    path: '/salary',
    name: 'Salary',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/Salary.vue')
  },
  {
    path: '/mapStatesUSA',
    name: 'mapStatesUSA',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/MapStatesUSA.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

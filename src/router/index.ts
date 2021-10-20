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
    path: '/gapDateTime',
    name: 'gapDateTime',
    meta: {layout:'MainLayout'},
    component: () => import('@/views/GapDateTime.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

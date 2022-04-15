import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('../views/main/Main.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/Login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router

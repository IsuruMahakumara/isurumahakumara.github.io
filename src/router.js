import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/home.vue'
import Resume from './views/resume.vue'
import NotFound from './views/not-found.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Resume',
    path: '/resume',
    component: Resume,
  },
  {
    name: 'CV Download',
    path: '/cv-download',
    component: Resume,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

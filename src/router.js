import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/home.vue'
import About from './views/about.vue'
import Experience from './views/experience.vue'
import Contact from './views/contact.vue'
import Resume from './views/resume.vue'
import Projects from './views/projects.vue'
import ProjectDetail from './views/project-detail.vue'
import NotFound from './views/not-found.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
  {
    name: 'Experience',
    path: '/experience',
    component: Experience,
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact,
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
    name: 'Projects',
    path: '/projects',
    component: Projects,
  },
  {
    name: 'ProjectDetail',
    path: '/projects/:slug',
    component: ProjectDetail,
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

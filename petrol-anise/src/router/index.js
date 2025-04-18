import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/current',
      name: 'Current',
      component: () => import('../views/Current.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/SubmissionGuide.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/event',
      name: 'event',
      beforeEnter() {
        window.location.href = "https://www.zeffy.com/en-CA/ticketing/pastiche-edition--2";
      },
    },
  ]
})

export default router

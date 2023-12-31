// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'Projects',
        name: 'Projects',
        component: () => import( '@/views/Projects.vue'),
      },
      {
        path: 'PrivLife',
        name: 'PrivLife',
        component: () => import( '@/views/LifePriv.vue'),
      },
      {
        path: 'Contact',
        name: 'Contact',
        component: () => import ('@/views/Contact.vue')
      },
      {
        path: 'Credits',
        name: 'Credits',
        component: () => import ('@/views/Credits.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/team', component: () => import('./views/DoctorsView.vue') },
    { path: '/services', component: () => import('./views/ServicesView.vue') },
    { path: '/contact', component: () => import('./views/ContactView.vue') },
    { path: '/booking', component: () => import('./views/BookingView.vue') },
    { path: '/my-appointment', component: () => import('./views/MyAppointmentView.vue') },
  ],
})

export default router

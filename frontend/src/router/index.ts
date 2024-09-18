import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import CarList from '../views/CarList.vue'
import Booking from '../views/Booking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cars',
      name: 'car-list',
      component: CarList
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    }
  ]
})

export default router

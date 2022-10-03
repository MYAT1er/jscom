import { createRouter, createWebHistory } from 'vue-router'
import AcceuilView from '../views/AcceuilView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AcceuilView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: () => import(/* webpackChunkName: "connexion" */ '../views/ConnexionView.vue')
  },
  {
    path: '/boutique',
    name:'boutique',
    component: () => import(/* webpackChunkName: "boutique" */ '../views/BoutiqueView.vue')
  },
  {
    path: '/cart',
    name:'cart',
    component: () => import(/* webpackChunkName: "cart"*/ '../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

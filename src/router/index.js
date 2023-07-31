
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Cadastro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
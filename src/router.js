import { createRouter, createWebHistory } from 'vue-router';
import ShoppingCart from './components/ShoppingCart.vue';

const routes = [

  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
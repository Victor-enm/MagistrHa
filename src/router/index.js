import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import QRCodePage from '../pages/QRCodePage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/qr/:id', component: QRCodePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Apropos from '../pages/Apropos.vue';
import Parcours from '../pages/Parcours.vue';
import QRCodePage from '../pages/QRCodePage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/apropos', name: 'A propos', component: Apropos },
  { path: '/parcours', name: 'Parcours', component: Parcours },
  { path: '/qr/:id', component: QRCodePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

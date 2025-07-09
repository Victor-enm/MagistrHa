import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Apropos from '../pages/Apropos.vue';
import Parcours from '../pages/Parcours.vue';
import Scan from '../pages/ScanView.vue';
import Ecole from '../pages/Ecole.vue';
import EntreeEcole from '../pages/PagesQrCodes/EntreeEcole.vue';
import TourDesSorcieres from '../pages/PagesQrCodes/TourDesSorcieres.vue';
import TourDesMinimes from '../pages/PagesQrCodes/TourDesMinimes.vue';
import MonumentAuxMorts from '../pages/PagesQrCodes/MonumentAuxMorts.vue';
import Bassin from '../pages/PagesQrCodes/Bassin.vue';
import Amphitheatre from '../pages/PagesQrCodes/Amphitheatre.vue';
import SalleDesPasPerdus from '../pages/PagesQrCodes/SalleDesPasPerdus.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/apropos', name: 'A propos', component: Apropos },
  { path: '/parcours', name: 'Parcours', component: Parcours },
  { path: '/scan', name: 'Scan', component: Scan },
  { path: '/Ecole', name: 'Lécole', component: Ecole },
  { path: '/qr/entree-de-l-ecole', name:'Entrée de lécole', component: EntreeEcole},
  { path: '/qr/tour-des-sorcieres', name:'Tour des sorcières', component: TourDesSorcieres},
  { path: '/qr/tour-des-minimes', name:'Tour des Minimes', component: TourDesMinimes},
  { path: '/qr/monument-aux-morts', name:'Monument aux morts', component: MonumentAuxMorts},
  { path: '/qr/bassin', name:'Le Bassin', component: Bassin},
  { path: '/qr/amphitheatre', name:'Amphithéâtre Simone Veille', component: Amphitheatre},
  { path: '/qr/salle-des-pas-perdus', name:'Salle des pas perdus', component: SalleDesPasPerdus},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

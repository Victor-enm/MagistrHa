import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Apropos from '../pages/AProposView.vue';
import Parcours from '../pages/ParcoursView.vue';
import Scan from '../pages/ScanView.vue';
import Ecole from '../pages/EcoleView.vue';
import EntreeEcole from '../pages/PagesQrCodes/EntreeEcole.vue';
import TourDesSorcieres from '../pages/PagesQrCodes/TourDesSorcieres.vue';
import TourDesMinimes from '../pages/PagesQrCodes/TourDesMinimes.vue';
import MonumentAuxMorts from '../pages/PagesQrCodes/MonumentAuxMorts.vue';
import Bassin from '../pages/PagesQrCodes/BassinENM.vue';
import Amphitheatre from '../pages/PagesQrCodes/AmphitheatreENM.vue';
import SalleDesPasPerdus from '../pages/PagesQrCodes/SalleDesPasPerdus.vue';
import Accessibilite from '../pages/PagesLegales/AccessibiliteView.vue';
import MentionsLegales from '../pages/PagesLegales/MentionsLegales.vue';
import PolitiqueConfidentialite from '../pages/PagesLegales/PolitiqueConfidentialite.vue';
import Maintenance from '../pages/UpdateView.vue';
import Erreur from '../pages/NotFound.vue'


const routes = [
  
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Maintenance,
    meta: {
      title: 'Page non trouvée – Magistr’ha',
      description: 'La page demandée est introuvable.',
    },
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  // Titre
  document.title = to.meta.title || 'Magistr’ha'

  // Meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Magistr’ha – parcours historique mobile de l’ENM.')
  }

  next()
});

router.afterEach(() => {
  if (window._paq) {
    window._paq.push(['setCustomUrl', window.location.href])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  }
})



export default router;

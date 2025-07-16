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
import Accessibilite from '../pages/PagesLegales/Accessibilite.vue';
import MentionsLegales from '../pages/PagesLegales/MentionsLegales.vue';
import PolitiqueConfidentialite from '../pages/PagesLegales/PolitiqueConfidentialite.vue';
import Erreur from '../pages/404.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil – Magistr’ha',
      description: 'Bienvenue sur la plateforme mobile Magistr’ha.',
    },
  },
  {
    path: '/apropos',
    name: 'A propos',
    component: Apropos,
    meta: {
      title: 'À propos – Magistr’ha',
      description: 'Découvrez le projet historique mobile Magistr’ha.',
    },
  },
  {
    path: '/parcours',
    name: 'Parcours',
    component: Parcours,
    meta: {
      title: 'Parcours – Magistr’ha',
      description: 'Accédez au parcours historique de l’ENM avec ses 10 lieux emblématiques.',
    },
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
    meta: {
      title: 'Scanner un QR Code – Magistr’ha',
      description: 'Scannez un QR code pour accéder à une étape du parcours historique.',
    },
  },
  {
    path: '/Ecole',
    name: 'Lécole',
    component: Ecole,
    meta: {
      title: 'L’École – Magistr’ha',
      description: 'Présentation de l’École nationale de la magistrature.',
    },
  },
  {
    path: '/qr/entree-de-l-ecole',
    name:'Entrée de lécole',
    component: EntreeEcole,
    meta: {
      title: 'Entrée de l’École – Magistr’ha',
      description: 'Découvrez l’histoire de l’entrée de l’École nationale de la magistrature.',
    },
  },
  {
    path: '/qr/tour-des-sorcieres',
    name:'Tour des sorcières',
    component: TourDesSorcieres,
    meta: {
      title: 'Tour des Sorcières – Magistr’ha',
      description: 'Un lieu emblématique chargé d’histoire sur le parcours ENM.',
    },
  },
  {
    path: '/qr/tour-des-minimes',
    name:'Tour des Minimes',
    component: TourDesMinimes,
    meta: {
      title: 'Tour des Minimes – Magistr’ha',
      description: 'Découvrez la Tour des Minimes et son rôle historique.',
    },
  },
  {
    path: '/qr/monument-aux-morts',
    name:'Monument aux morts',
    component: MonumentAuxMorts,
    meta: {
      title: 'Monument aux Morts – Magistr’ha',
      description: 'Hommage aux morts, lieu de mémoire du parcours historique.',
    },
  },
  {
    path: '/qr/bassin',
    name:'Le Bassin',
    component: Bassin,
    meta: {
      title: 'Le Bassin – Magistr’ha',
      description: 'Un lieu paisible et central du parcours historique.',
    },
  },
  {
    path: '/qr/amphitheatre',
    name:'Amphithéâtre Simone Veille',
    component: Amphitheatre,
    meta: {
      title: 'Amphithéâtre Simone Veil – Magistr’ha',
      description: 'Lieu emblématique portant le nom de Simone Veil.',
    },
  },
  {
    path: '/qr/salle-des-pas-perdus',
    name:'Salle des pas perdus',
    component: SalleDesPasPerdus,
    meta: {
      title: 'Salle des Pas Perdus – Magistr’ha',
      description: 'Un espace historique au cœur de l’ENM.',
    },
  },
  {
    path: '/legales/accessibilite',
    name:'Accessibilité',
    component: Accessibilite,
    meta: {
      title: 'Accessibilité – Magistr’ha',
      description: 'Informations sur l’accessibilité de la webapp Magistr’ha.',
    },
  },
  {
    path: '/legales/mentions-legales',
    name:'Mentions légales',
    component: MentionsLegales,
    meta: {
      title: 'Mentions légales – Magistr’ha',
      description: 'Mentions légales de la plateforme Magistr’ha.',
    },
  },
  {
    path: '/legales/politique-de-confidentialite',
    name:'Politique confidentialité',
    component: PolitiqueConfidentialite,
    meta: {
      title: 'Politique de confidentialité – Magistr’ha',
      description: 'Données personnelles et politique de confidentialité de la plateforme.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Erreur,
    meta: {
      title: 'Page non trouvée – Magistr’ha',
      description: 'La page demandée est introuvable.',
    },
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
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

router.afterEach((to) => {
  if (window._paq) {
    window._paq.push(['setCustomUrl', window.location.href])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  }
})



export default router;

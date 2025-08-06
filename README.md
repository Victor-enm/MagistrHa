# ⚖️ Magistr’hâ – Webapp Historique Mobile

![Licence](https://img.shields.io/badge/license-MIT-green.svg)

---

## 🏛️ Présentation

**Magistr’hâ** est une **webapp mobile historique** développée avec **Vue 3** et **Vite**, conçue pour valoriser 7 lieux emblématiques de l’École Nationale de la Magistrature (ENM).  
Pensée pour un usage **mobile-first**, elle permet aux visiteurs de **scanner des QR codes** sur site afin d’accéder à des pages informatives dédiées, enrichies de contenus visuels et textuels.

---

## 🚀 Fonctionnalités principales

- ✅ Webapp responsive, pensée pour smartphone
- ✅ Scannez un QR code pour accéder au contenu d’un lieu
- ✅ Pages dédiées avec textes, images optimisées (WebP, lazy loading)
- ✅ Carte interactive listant les 10 points d’intérêt
- ✅ SEO dynamique (titre + description par page)
- ✅ Intégration de Matomo sans cookie (respect du RGPD)
- ✅ Accessibilité et mentions légales intégrées
- ✅ Navigation fluide via `vue-router` avec scroll to top et métadonnées

---

## 🧱 Stack technique

- **Framework :** Vue.js 3 + Vite
- **Langage :** JavaScript ES6+
- **Style :** Tailwind CSS
- **Routing :** Vue Router
- **Analytics :** Matomo (sans cookie)
- **Déploiement :** GitHub + Netlify
- **Tests :** Vitest + @vue/test-utils

---

## 📦 Versionning

- **v0.8** – Finalisation des pages manquantes, intégration des tests unitaires, ajout de nouvelles cartes images
- **v0.7.2** – Correctifs sur le parallax header & map interactive
- **v0.7.1** – Ajout de retours utilisateur
- **v0.7** – Version testeurs (version alpha publique)

---

## 🙌 Contributeurs

- 👨‍💻 Développement : Victor Prudhon
- 🎨 Design UI : Alexandre Gay
- 📋 Cheffe de projet : Lella-Marie Desplats
- 🔍 Tests utilisateurs : Melvin

---

## 🛠️ Installation & développement

### Prérequis

- Node.js ≥ 16  
- npm ou yarn

### Lancer en local

```bash
git clone https://github.com/Victor-enm/magistrha.git
cd magistrha
npm install
npm run dev

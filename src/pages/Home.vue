<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="accueilImage"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="50vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl h-[45vh] shadow-lg inset-shadow-sm">


        <h1>Plongez dans l’histoire de l’ENM</h1>
 
   <p>L’École nationale de la magistrature occupe un site historique qui présente la double particularité d’être un lieu de justice depuis plus de cinq siècles en même temps qu’un monument clé de l’histoire de Bordeaux.</p>

<Bouton
        label="Commencer votre visite"
        to="/parcours"
      />
      </section>
      <section class="content bg-marron -mt-4 pb-15 pt-12 py-8 px-5 z-5 relative border border-blanc">
        <h2>Explorez l'École</h2>
  <p>Retrouvez sur cette carte de l’ENM les emplacements des 7 QR codes à scanner au fil de votre visite !</p>
  <div class="relative w-full max-w-4xl mx-auto mb-6 mt-6">
    <!-- Carte SVG inline -->
    <Plan class="w-full h-auto" />

    <!-- Pins SVG inline positionnés -->
    <component
      v-for="pin in pins"
      :key="pin.id"
      :is="pin.active ? IconQrActif : IconQrInactif"
      class="absolute cursor-pointer"
      :style="{
        top: pin.y + 'px',
        left: pin.x + 'px',
        transform: 'translate(-50%, -50%)'
      }"
      @click="togglePin(pin.id)"
    />
  </div>
<Transition
  name="fade-card"
  mode="out-in"
>
  <div v-if="activePin">
      <CardHome
        :title="activePin.title"
        :etape="activePin.etape"
        :img="activePin.img"
        :alt="activePin.alt"
        :link="activePin.link"
      />
    </div>
    </Transition>
    

</section>
<section class="content -mt-5 bg-blanc py-8 px-5 z-10 relative border border-blanc rounded-3xl">
  <h2>Le parcours de visite</h2>
  <p>Le parcours est découpé en trois catégories qui abordent chacune des points particuliers de l’École nationale de la magistrature.</p>
  <BulletFleche class="mt-4">
    <h3 class="mt-0">Une école pour une Justice moderne</h3>
  </BulletFleche>
  <p>Découvrez comment l’École nationale de la magistrature a vu le jour, à travers quelques dates clés et événements majeurs. Cette partie vous permet de comprendre les origines et le rôle de cette institution.</p>

  <BulletFleche class="mt-4">
    <h3 class="mt-0">Architecture et patrimoine</h3>
  </BulletFleche>
  <p>Partez à la découverte des bâtiments de l’École et de leur évolution dans le temps. Certains éléments architecturaux remarquables, comme la Tour de Minimes ou la Tour des Sorcières, vous seront présentés, accompagnés d’anecdotes sur la conception du site.</p>
  
  <BulletFleche class="mt-4">
    <h3 class="mt-0">Une formation exigeante et humaine</h3>
  </BulletFleche>
  <p>Plongez dans le quotidien de l’École à travers les récits de celles et ceux qui l’ont vécue&nbsp;: élèves magistrats, et visiteurs… Ces témoignages offrent un aperçu vivant et concret de l’expérience au sein de l’institution.</p>
  
  <Bouton
        label="Commencez l'exploration"
        to="/scan"
      />
</section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Plan from '../assets/Images/Illustrations/Plan.svg';
import IconQrActif from '../assets/icons/Plan-Actif.svg';
import IconQrInactif from '../assets/icons/Plan-Inactif.svg';
import CardHome from '../components/CardHome.vue';
import accueilImage from '@/assets/Images/banner/Accueil&APropos.webp'
import Entree from '@/assets/Images/banner/EntreeDeLecole.webp'
import Monument from '@/assets/Images/banner/Monument-aux-morts.webp'
import Minimes from '@/assets/Images/banner/Minimes.webp'
import Bassin from '@/assets/Images/banner/Bassin.webp'
import Amphi from '@/assets/Images/banner/Amphi.webp'
import Salle from '@/assets/Images/banner/Salle-des-pas-perdus.webp'
import Sorciere from '@/assets/Images/banner/Sorciere.webp'
import Bouton from '@/components/bouton.vue';
import BulletFleche from '@/components/BulletFleche.vue';
import ParallaxHeader from '@/components/ParallaxHeader.vue';

const pins = ref([
  { id: 1, x: 120, y: 385, active:true,
    title: 'Entrée de l’École', etape: '01',
    img: Entree, alt: 'Entrée de l ecole',
    link: '/qr/entree-de-l-ecole'
   }, //entrée
  { id: 2, x: 138, y: 290, active:false,
    title: 'Monuments aux morts', etape: '04',
    img: Monument, alt: 'Monuments aux morts',
    link: '/qr/monument-aux-morts'
   }, //monument aux morts
  { id: 3, x: 220, y: 265, active:false,
    title: 'Tour des Minimes', etape: '03',
    img: Minimes, alt: 'Tour des Minimes',
    link: '/qr/tour-des-minimes'
   }, //tour des minimes
  { id: 4, x: 128, y: 205, active:false,
    title: 'Le bassin', etape: '05',
    img: Bassin, alt: 'Le bassin',
    link: '/qr/bassin'
   }, //bassin
  { id: 5, x: 55, y: 135, active:false,
    title: 'Amphithéâtre Simone Veil', etape: '06',
    img: Amphi, alt: 'Amphithéâtre Simone Veil',
    link: '/qr/amphitheatre'
   }, //amphitheatre
  { id: 6, x: 85  , y: 35, active:false,
    title: 'Salle des pas perdus', etape: '07',
    img: Salle, alt: 'Salle des pas perdus',
    link: '/qr/salle-des-pas-perdus'
   }, //salle des pas perdus
  { id: 7, x: 325, y: 60, active:false,
    title: 'Tour des sorcières', etape: '02',
    img: Sorciere, alt: 'Tour des sorcières',
    link: '/qr/tour-des-sorcieres'
   }, //tour des sorcières
])

const togglePin = (id) => {
  pins.value = pins.value.map((pin) =>
    pin.id === id
      ? { ...pin, active: !pin.active }
      : { ...pin, active: false }
  )
}

const activePin = computed(() => pins.value.find((p) => p.active))
</script>
<style>
/* animation personnalisée fade-card */
.fade-card-enter-active,
.fade-card-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-card-enter-from,
.fade-card-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-card-enter-to,
.fade-card-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
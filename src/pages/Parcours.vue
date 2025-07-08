<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      imageUrl="/src/assets/Images/banner/Accueil&APropos.jpg"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Le parcours de visite</h1>
        <p>Découvrez en un clin d’œil les grandes étapes abordés dans cette visite.</p>
        <h2 class="mb-4">L’Ecole de formation des juges et des procureurs</h2>
         <ScrollHorizontal>
      <CardParcours v-for="(item, i) in cardsParcours1" :key="'a'+i" :title="item.title" :position="item.position" />
    </ScrollHorizontal>

    <h2 class="mb-4">Architecture et patrimoine – Entre modernité et vestiges du passé</h2>
    <ScrollHorizontal>
      <CardParcours v-for="(item, i) in cardsParcours2" :key="'a'+i" :title="item.title" :position="item.position" />
    </ScrollHorizontal>

    <h2 class="mb-4">Une formation pour une justice au cœur des attentes de la société</h2>
    <ScrollHorizontal>
      <CardParcours v-for="(item, i) in cardsParcours3" :key="'a'+i" :title="item.title" :position="item.position" />
    </ScrollHorizontal>
    </section>
      
  </div>
</template>

<script setup>
import Bouton from '../components/bouton.vue';
import CardParcours from '../components/CardParcours.vue';
import CardPersonnage from '../components/CardPersonnage.vue';
import ParallaxHeader from '../components/ParallaxHeader.vue';
import ScrollHorizontal from '../components/ScrollHorizontal.vue';

const cardsParcours1 = [
  { title: 'Plongez au cœur de l’histoire et de la justice bordelaise !', position: 'Entrée de l’École' },
]

const cardsParcours2 = [
  { title: 'L’installation de l’ENM à Bordeaux. La fin d’une prison vétuste', position: 'Le bassin' },
  { title: 'Le fort du Hâ, lieu de la réression durant l’Occupation à Bordeaux', position: 'Monument aux morts' },
  { title: 'Une tour médiévale au cœur de Bordeaux', position: 'Tour des minimes' },
  { title: 'Le fort du Hâ, témoin de l’histoire bordelaise', position: 'Tour des sorcières' },
]

const cardsParcours3 = [
  { title: 'Amphithéâtre Simone Veil : L’héritage d’une femme d’exception au cœur de la formation', position: 'Amphithéâtre Simone Veil' },
  { title: 'La salle des pas perdus : un lieu de rencontres, d’échanges et de débats', position: 'Salle des pas perdus' },
]


</script>
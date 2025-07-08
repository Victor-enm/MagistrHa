<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      imageUrl="/src/assets/Images/banner/Lecole.webp"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Une grande École de la République</h1>
        <h2>L’ENM comme vous ne l’avez jamais vue ! </h2>
        <p>Découvrez en images :</p>
        <ul>
        <BulletFleche>Nos missions</BulletFleche>
        <BulletFleche>Nos engagements</BulletFleche>
        <BulletFleche>Notre vision pour une justice moderne et accessible</BulletFleche>
        </ul>
    </section>
      
  </div>
</template>

<script setup>
import Bouton from '../components/bouton.vue';
import BulletFleche from '../components/BulletFleche.vue';
import ParallaxHeader from '../components/ParallaxHeader.vue';



</script>
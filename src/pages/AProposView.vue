<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Banner"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>À propos</h1>
        <p>Vous souhaitez en savoir plus sur l’École nationale de la magistrature ? Cette page rassemble nos informations clés, nos contacts et nos ressources utiles.</p>
        <h2>Retrouvez nous sur les réseaux sociaux</h2>
        <CardRS />
        <h2>Adresse</h2>
            <p>Site Pey Berland<br>10, rue des Frères Bonie<br>33000 Bordeaux</p>        
        <h2>Numéro de téléphone</h2>
            <a href="tel:0556001010">05 56 00 10 10</a>
        <h2>Mentions légales</h2>
        <p class="italic underline"><router-link to="/legales/mentions-legales">Mentions légales</router-link></p>
        <p class="italic underline"><router-link to="/legales/accessibilite">Accessibilité</router-link></p>
        <p class="italic underline"><router-link to="/legales/politique-de-confidentialite">Politique de confidentiaité</router-link></p>

        <h2>Conception et développement</h2>
        <BulletFleche>Éditeur de l'application : École nationale de la magistrature </BulletFleche>
        <BulletFleche>Développement : Victor Prudhon</BulletFleche>
        <BulletFleche>Destign graphique : <a href="https://www.alexandregay.fr/" targer="_blank" class="underline text-violet-3">Alexandre Gay</a></BulletFleche>

    </section>
      
  </div>
</template>

<script setup>
import ParallaxHeader from '@/components/ParallaxHeader.vue';
import Banner from '@/assets/Images/banner/Accueil&APropos.webp';
import BulletFleche from '@/components/BulletFleche.vue';



</script>
<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      imageUrl="/src/assets/Images/banner/Accueil&APropos.webp"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="50vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl h-[45vh]">


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
</section>
<section class="content -mt-5 bg-blanc py-8 px-5 z-10 relative border border-blanc rounded-3xl">
  <h2>Le parcours de visite</h2>
  <p>Le parcours est découpé en trois catégories qui abordent chacune des points particuliers de l’École nationale de la magistrature.</p>
  <h3><span class="float-left"><img src="../assets/icons/Fleche.svg" class="w-8 h-8"/></span>Une école pour une Justice moderne</h3>
  <p>Découvrez comment l’École nationale de la magistrature a vu le jour, à travers quelques dates clés et événements majeurs. Cette partie vous permet de comprendre les origines et le rôle de cette institution.</p>
  <h3><span class="float-left"><img src="../assets/icons/Fleche.svg" class="w-8 h-8 left"/></span>Architecture et patrimoine – entre modernité et vestiges du passé</h3>
  <p>Partez à la découverte des bâtiments de l’École et de leur évolution dans le temps. Certains éléments architecturaux remarquables, comme la Tour de Minimes ou la Tour des Sorcières, vous seront présentés, accompagnés d’anecdotes sur la conception du site.</p>
  <h3><span class="float-left"><img src="../assets/icons/Fleche.svg" class="w-8 h-8"/></span>Une formation exigeante et humaine</h3>
  <p>Plongez dans le quotidien de l’École à travers les récits de celles et ceux qui l’ont vécue : élèves magistrats, et visiteurs… Ces témoignages offrent un aperçu vivant et concret de l’expérience au sein de l’institution.</p>
  <Bouton
        label="Commencez l'exploration"
        to="/scan"
      />
</section>
  </div>
</template>

<script setup>
import Bouton from '../components/bouton.vue';
import ParallaxHeader from '../components/ParallaxHeader.vue';



</script>
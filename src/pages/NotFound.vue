<template>
  <div class="relative min-h-screen bg-marron">
    <section class="content mt-25 py-8 px-5 z-10 relative flex flex-col text-center justify-center items-center">
      <Infos class="w-8 h-8 text-blanc mb-6" role="presentation" aria-hidden="true"/>
        <h1>Oups, page non trouvée&nbsp;!</h1>
        <p>La page que vous recherchez n'existe plus ou a été déplacée. Peut-être avez-vous fait une erreur en tapant l'adresse ?</p>
      <Bouton
        to="/"
        label="Revenir à l'accueil"
        ></Bouton>
        
    </section>
      
  </div>
</template>

<script setup>
import Bouton from '@/components/BoutonRouge.vue';
import Infos from '@/assets/icons/Infos.svg';



</script>
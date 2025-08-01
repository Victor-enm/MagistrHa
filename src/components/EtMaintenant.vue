<template>
    <section class="content -mt-4 pb-15 pt-12 py-8 px-5 z-5 relative border border-blanc" style="box-shadow: 0px -4px 16px 4px rgba(117, 117, 117, 0.10);"
    :class='BgColor'>
      <h2>Et maintenant ?</h2>
      <p>Vous avez terminé cette étape ! </p>
      <div class="flex justify-between items-stretch gap-6">
        <Bouton
          label="Scanner le prochain QR code"
          to="/scan"
          class="h-24 flex-1"
        />
        
        <Bouton 
          label="Retourner à la carte"
          to="/#map"
          class="h-24 flex-1"
        />
      </div>       
    </section>
</template>
    <script setup>
import Bouton from './bouton.vue';


defineProps({
    BgColor: String,
})
</script>
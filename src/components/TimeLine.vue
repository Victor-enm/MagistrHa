<template>
  <div class="relative pl-8 flex items-start">
    <!-- Ligne verticale -->
    <div class="absolute left-4 top-0 bottom-0 w-px bg-noir z-0"></div>

    <!-- Point rouge SVG centré sur la ligne -->
    <div class="absolute left-2 top-8 z-10 w-4 h-4">
      <img src="../../src/assets/icons/Puce.svg" alt="" class="w-4 h-4" />
    </div>

    <!-- Contenu texte -->
    <div>
      <h2>{{ titre }}</h2>
      <p>{{ description }}</p>
      <ImageViolet v-if="img"
      :img="img"
      :alt="alt"
       />
    </div>
  </div>
</template>

<script setup>
import ImageViolet from './ImageViolet.vue';

defineProps({
  titre: String,
  description: String,
  img: String,
  alt: String,
})
</script>

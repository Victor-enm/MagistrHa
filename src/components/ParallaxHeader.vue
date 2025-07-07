<template>

    <div class="parallax-container">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="parallax-image"
      />
    </div>

</template>

<script setup>
// Définition des props pour l'URL de l'image et le texte alternatif
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: 'Image de parallaxe',
  },
  height: {
    type: String,
    default: '64vh', // Hauteur par défaut, par exemple 64% de la hauteur du viewport
  },
});
</script>

<style scoped>

.parallax-container {
  /* Ces styles sont critiques pour l'effet sticky et l'accélération matérielle */
  width: 100%;
  height: v-bind(height); /* Utilise la prop 'height' pour la hauteur */
  overflow: hidden;
  position: sticky;
  top: 0;
  transform: translateZ(0); /* Force l'accélération matérielle */
  will-change: transform; /* Indique que la transformation va changer */
}

.parallax-image {
  /* Styles pour l'image elle-même */
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Légère mise à l'échelle pour éviter les bords blancs potentiels */
  transform: translateZ(0) scale(1.1);
  transition: transform 0s ease-out; /* Pas de transition pour le mouvement de défilement */
  will-change: transform;
}

</style>
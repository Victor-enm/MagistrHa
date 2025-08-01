<template>
  <div class="parallax-container">
    <img
      :src="imageUrl"
      :alt="imageAlt"
      class="parallax-image"
      :style="{ transform: `translateY(${offsetY * 0.5}px)` }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  imageUrl: { type: String, required: true },
  imageAlt: { type: String, default: 'Image de parallaxe' },
  height: { type: String, default: '64vh' },
})

const offsetY = ref(0)

const handleScroll = () => {
  offsetY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-container {
  position: relative;
  width: 100%;
  height: v-bind(height);
  overflow: hidden;
  z-index: 0;
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%; /* léger dépassement pour éviter les bords blancs */
  object-fit: cover;
  will-change: transform;
  z-index: -1; /* assure que l’image passe SOUS le contenu */
}
</style>

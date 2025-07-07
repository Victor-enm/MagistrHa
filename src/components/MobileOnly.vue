<!-- src/components/MobileOnly.vue -->
<template>
  <div>
    <div v-if="isMobile">
      <slot />
    </div>
    <div v-else class="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100">
      <h1 class="text-2xl font-semibold text-red-600 mb-4">Application non disponible sur ordinateur</h1>
      <p class="text-gray-700">Merci de consulter cette application depuis un appareil mobile.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(window.innerWidth <= 768)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', checkIfMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIfMobile)
})
</script>

<!-- src/components/MobileOnly.vue -->
<template>
  <div>
    <div v-if="isMobile">
      <slot />
    </div>
    <div v-else class="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100">
      <h1 class="font-semibold text-rouge-1">Application non disponible sur ordinateur</h1>
      <p class="text-noir">Bonjour ! Cette application est conçue pour être utilisée sur votre téléphone.<br>Pour une meilleure expérience, veuillez la consulter depuis un appareil mobile.</p>
      <p>Scannez ce QR Code avec l'appareil photo de votre téléphone pour accéder à l'application.</p>
      <img :src="QRcode" class="mt-6 w-3xl" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import QRcode from '@/assets/Images/generales/Arborial.webp'

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

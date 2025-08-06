<template>
  <div class="flex flex-col items-center justify-center p-4 h-screen">
    <h1 class="text-xl font-bold mb-4">Scanner un QR Code</h1>

    <qrcode-stream @decode="onDecode" @init="onInit" class="w-full max-w-md h-20" />

    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { QrcodeStream } from 'vue-qrcode-reader'
import { useRouter } from 'vue-router'

const router = useRouter()
const error = ref(null)

function onDecode(result) {
  if (result.startsWith('https://') || result.startsWith('/')) {
    router.push(result.replace(location.origin, ''))
  } else {
    error.value = 'QR code non reconnu ou invalide'
  }
}

function onInit(promise) {
  promise.catch(err => {
    error.value = 'Erreur d’accès à la caméra : ' + err.message
  })
}
</script>

<style scoped>
qrcode-stream {
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  border: 2px dashed #ccc;
}
</style>

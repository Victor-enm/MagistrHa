<template>
  <div class="relative flex flex-col items-center justify-start h-screen bg-white text-noir mt-5 p-5">
    <h1 class="text-lg font-semibold mb-4 text-violet-3">Scanner un QR Code</h1>

    <!-- Conteneur caméra + overlay -->
    <div class="relative" id="reader">
      <!-- Overlay cadre -->
      <div class="absolute inset-0 border-4 border-violet-3 rounded-xl pointer-events-none">
        <!-- Ligne animée -->
        <div class="absolute top-0 left-0 w-full h-0.5 bg-violet-3 animate-scan"></div>
      </div>
    </div>

    <p class="mt-3 text-sm opacity-80">Placez le QR Code dans le cadre</p>
    <p v-if="error" class="text-red-400 mt-4">{{ error }}</p>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode'
import { useRouter } from 'vue-router'

const router = useRouter()
const error = ref(null)
let html5QrCode = null

function onScanSuccess(decodedText) {
  const path = decodedText.startsWith('http')
    ? decodedText.replace(location.origin, '')
    : decodedText.startsWith('/')
      ? decodedText
      : null

  if (path) router.push(path)
  else error.value = 'QR code non reconnu'
}

onMounted(() => {
  html5QrCode = new Html5Qrcode('reader')
  html5QrCode
    .start(
      { facingMode: 'environment' },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 }, // pas grave, on masque avec notre overlay
        formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE]
      },
      onScanSuccess,
      () => {}
    )
    .catch((err) => {
      error.value = 'Erreur d’accès à la caméra : ' + err
    })
})

onBeforeUnmount(() => {
  if (html5QrCode) {
    html5QrCode.stop().then(() => html5QrCode.clear())
  }
})
</script>

<style scoped>
/* Animation scan */
@keyframes scan {
  0% { top: 0; }
  100% { top: 100%; }
}
.animate-scan {
  animation: scan 2s linear infinite;
}
</style>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <h1 class="text-xl font-bold mb-4">Scanner un QR Code</h1>
    <div id="reader" class="w-full max-w-md"></div>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
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
  // console.log('QR result:', decodedText)
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
        qrbox: { width: 250, height: 250 },
        formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE]
      },
      onScanSuccess,
      () => {
        /* ignore scan errors */
      }
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
#reader {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  border: 2px dashed #ccc;
  border-radius: 8px;
  height: 300px;
}
</style>
<template>
  <div class="w-full flex justify-between items-center self-center mb-8">
    <div class="flex bottom-0">
        <img src="../assets/icons/Localisation.svg" class="w-6 h-6 shrink-0 self-end object-cover" alt="fleche rouge"/>
        <p class="">{{ position }}</p>
    </div>
    <p>
        Étape {{ etape }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  position: String,
  etape: String,
})
</script>

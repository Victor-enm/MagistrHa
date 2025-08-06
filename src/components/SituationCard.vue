<template>
  <div class="w-full flex justify-between items-center self-center mb-8">
    <div class="flex bottom-0">
        <Localisation class="w-6 h-6 shrink-0 self-end object-cover" role="presentation" aria-hidden="true"/>
        <p class="">{{ position }}</p>
    </div>
    <p>
        Étape {{ etape }}
    </p>
  </div>
</template>

<script setup>
import Localisation from '@/assets/icons/Localisation.svg'

defineProps({
  position: String,
  etape: String,
})
</script>

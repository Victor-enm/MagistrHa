<template>
  <div class="rounded-xl bg-noir text-blanc p-4 w-64 snap-start">
    <h3 class="text-lg font-bold uppercase tracking-wide">{{ label }}</h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  label: String
})
</script>

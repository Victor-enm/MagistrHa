<template>
  <div class="overflow-x-auto whitespace-nowrap scrollbar-hide mb-10 mt-4">
    <div class="inline-flex gap-4 mb-2 snap-x snap-mandatory h-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<template>
  <MobileOnly>
    <LoaderBuff v-if="showLoader" 
  class="transition-opacity duration-500 ease-in-out"
  :class="{ 'opacity-0': isFadingOut }"/>
  <div v-else>
      <div class="min-h-screen flex flex-col w-screen">
        <router-view />
        <NavBarre class="sticky bottom-0 z-50" />
      </div>
    </div>
  </MobileOnly>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LoaderBuff from "./components/LoaderBuff.vue";

const showLoader = ref(true);
const isFadingOut = ref(false);

onMounted(() => {
  // Démarre l'animation de fondu après 1.5s
  setTimeout(() => {
    isFadingOut.value = true;
  }, 1500);

  setTimeout(() => {
    showLoader.value = false;
  }, 2100); // 2s
});
</script>

<style>

</style>

<template>
    <div class="parallax-header" :style="{ height: height + 'px' }">
      <img
        :src="image"
        alt="Parallax"
        class="rellax"
        :data-rellax-speed="`-${speed}`"
      />
    </div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount } from 'vue'
  import Rellax from 'rellax'
  
  defineProps({
    image: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 200,
    },
    speed: {
      type: Number,
      default: 2,
    },
  })
  
  let rellaxInstance = null
  
  onMounted(() => {
    rellaxInstance = new Rellax('.rellax', {
      center: true,
      wrapper: '.parallax-header',
    })
  })
  
  onBeforeUnmount(() => {
    rellaxInstance?.destroy()
  })
  </script>
  
  <style scoped>
  .parallax-header {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  .parallax-header img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  </style>
  
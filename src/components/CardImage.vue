<template>
  <div class=" w-80 snap-start ">
  <div style="box-shadow: 6px 6px 0 #CAC7FD;" class="overflow-hidden border border-violet-3 rounded-xl mr-2">
    <div class="relative w-full overflow-hidden">
        <img 
        :src='img'
        :alt='alt'
        loading="lazy"
        class="object-cover h-60 w-full"
        />
    </div>
    </div>
   
    </div>

</template>

<script setup>
import Fleche from '@/assets/icons/Fleche.svg'

defineProps({
  nom: String,
  date: String,
  img: String,
  alt: String,
})
</script>

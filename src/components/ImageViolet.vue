<template>
  <div class="border border-violet-3 rounded-xl bg-blanc w-full snap-start overflow-hidden mt-4 mb-4"
  style="box-shadow: 6px 6px 0 #CAC7FD;">
  <a v-if="link"
  :href="link"
  target="_blank"
  >
    <div class="relative w-full overflow-hidden">
        <img 
        :src='img'
        :alt='alt'
        loading="lazy"
        class="object-cover h-50 w-full"
        />
        <div class="absolute flex bottom-20 right-35 px-2 py-1 rounded-full bg-blanc mr-2 mb-2">
            <Play class="w-8 h-8 shrink-0 self-end object-cover" alt="icone player"/>
        </div>
    </div>    
    </a>
    <div v-else class="relative w-full overflow-hidden">
        <img 
        :src='img'
        :alt='alt'
        loading="lazy"
        class="object-cover h-50 w-full"
        />
        
    </div>
  </div>
</template>

<script setup>
import Play from '@/assets/icons/Play.svg'


defineProps({
  img: String,
  alt: String,
  link: String,
})
</script>

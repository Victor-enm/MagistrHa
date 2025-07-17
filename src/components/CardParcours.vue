<template>
  <div class="border border-violet-3 rounded-xl bg-blanc w-76 snap-start overflow-hidden"
  style="box-shadow: 6px 6px 0 #CAC7FD;">
  <router-link
  :to="link">
    <div class="mb-4 relative w-full overflow-hidden">
        <img 
        :src='img'
        :alt='alt'
        loading="lazy"
        class="object-cover h-50 w-full"
        />
        <div class="absolute flex bottom-0 right-0 px-2 py-1 bg-blanc rounded-lg mr-2 mb-2">
            <Localisation class="w-6 h-6 shrink-0 self-end object-cover" role="presentation" aria-hidden="true"/>
            <p class="mt-0">{{ position }}</p>
        </div>
    </div>
    <div class="px-4 pb-4">
        <div class="flex items-start justify-between gap-6 whitespace-normal">
            <h4 class="mt-0 block min-w-0 w-full break-words leading-snug flex-1"
            v-html="title"></h4>
            <Fleche class="w-8 h-8 shrink-0 self-start text-rouge-1" role="presentation" aria-hidden="true"/>
        </div>
    </div>
    
    </router-link>
  </div>
</template>

<script setup>
import Fleche from '../assets/icons/Fleche.svg'
import Localisation from '../assets/icons/Localisation.svg'

defineProps({
  title: String,
  position: String,
  img: String,
  alt: String,
  link: String,
})

</script>

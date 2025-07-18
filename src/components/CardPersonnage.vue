<template>
  <div class=" w-60 snap-start ">
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
    <div class="mt-1">
        <div class="flex items-center gap-1 whitespace-normal">
            <Fleche class="w-7.5 h-7.5 shrink-0 self-start" role="presentation" aria-hidden="true"/>
            <p class="mt-0 block min-w-0 w-full break-words leading-snug flex-1 font-MtItalic text-base">{{ nom }}</p>
        </div>
    </div>
    </div>

</template>

<script setup>
import Fleche from '@/assets/icons/Fleche.svg'

defineProps({
  nom: String,
  img: String,
  alt: String,
})
</script>

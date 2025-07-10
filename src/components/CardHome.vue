<template>
  <div class=" rounded-xl bg-blanc w-full overflow-hidden p-4">
    <div class="mb-4 relative w-full overflow-hidden">
        <img 
        :src='img'
        :alt='alt'
        class="object-cover h-30 w-full"
        />
        <div class="absolute flex bottom-0 right-0 px-2 py-1 bg-blanc rounded-lg mr-2 mb-2">
            <p class="mt-0">Étape {{ etape }}/07</p>
        </div>
    </div>
    <div class="flex-col w-full">
            <h4 class="mt-0 block min-w-0 w-full break-words leading-snug flex-1 ">{{ title }}</h4>
            <Bouton
            :to="link"
            label="Découvrir"
            additionalClasses="w-full mt-0"
            class="w-full" />
    </div>
 </div>
</template>

<script setup>
import Fleche from '../assets/icons/Fleche.svg'
import Localisation from '../assets/icons/Localisation.svg'
import Bouton from './bouton.vue';

defineProps({
  title: String,
  etape: String,
  img: String,
  alt: String,
  link: String,
})

</script>

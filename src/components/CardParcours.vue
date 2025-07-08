<template>
  <div class="border border-violet-3 rounded-xl bg-blanc w-76 snap-start overflow-hidden"
  style="box-shadow: 6px 6px 0 #CAC7FD;">
    <div class="mb-4 relative ">
        <img src="../assets/Images/banner/Accueil&APropos.jpg" class="object-cover h-50"/>
        <div class="absolute flex bottom-0 right-0 px-2 py-1 bg-blanc rounded-lg mr-2 mb-2">
            <img src="../assets/icons/Localisation.svg" class="w-6 h-6 shrink-0 self-end" alt="fleche rouge"/>
            <p class="">{{ position }}</p>
        </div>
    </div>
    <div class="px-4 pb-4">
        <div class="flex items-start justify-between gap-6 whitespace-normal">
            <h4 class="mt-0 block min-w-0 w-full break-words leading-snug flex-1 ">{{ title }}</h4>
            <img src="../assets/icons/Fleche.svg" class="w-8 h-8 shrink-0 self-start" alt="fleche rouge"/>
        </div>
    </div>
    
    
  </div>
</template>

<script setup>
defineProps({
  title: String,
  position: String,
})
</script>

<template>
  <li class="flex items-start gap-2">
    <Fleche class="w-8 h-8 text-rouge-1" alt="fleche" />
    <span class="font-MtRegular text-base"><slot /></span>
  </li>
</template>
<script setup>
import Fleche from '../assets/icons/Fleche.svg'
</script>

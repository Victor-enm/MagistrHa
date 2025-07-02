<template>
  <nav
    class="sticky bottom-0 w-full flex justify-around bg-red border-t py-2 text-xs"
    role="navigation"
    aria-label="Navigation principale"
  >
    <router-link
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="flex flex-col items-center"
      :class="{
        'text-blue-600': isActive(item.to),
        'text-gray-500': !isActive(item.to)
      }"
      :aria-current="isActive(item.to) ? 'page' : null"
    >
      <component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
      <span>{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Icônes : adaptables selon ta lib ou compos perso

const route = useRoute()

const isActive = (path) => route.path === path

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/profil', label: 'Profil' },
  // ajoute d'autres éléments ici
]
</script>

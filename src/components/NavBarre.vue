<template>
  <nav
    class="sticky bottom-0 w-95 flex justify-around bg-blanc inset-shadow-sm rounded-xl py-2 text-xs h-[72px] mr-auto ml-auto"
    role="navigation"
    aria-label="Navigation principale"
  >
    <router-link
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="flex flex-col items-center"
      :class="{
        'text-noir font-MtSemiBold text-xs leading-[120%]': isActive(item.to),
        'text-gris-6 font-MtRegular text-xs leading-[150%]': !isActive(item.to)
      }"
      :aria-current="isActive(item.to) ? 'page' : null"
    >
      <span
      :class="{
        'text-blanc bg-violet-3 rounded-3xl': isActive(item.to),
        'text-gris-6 bg-transparent': !isActive(item.to)
      }"
      class="flex items-center justify-center w-12 h-8" ><component :is="item.icon" aria-hidden="true"/></span>
      <span>{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import home from '../../src/assets/icons/Home.svg'
import parcours from '../../src/assets/icons/Parcours.svg'
import qr from '../../src/assets/icons/QR.svg'
import Ecole from '../../src/assets/icons/École.svg'
import Infos from '../../src/assets/icons/Infos.svg'

const route = useRoute()

const isActive = (path) => route.path === path

const navItems = [
  { to: '/', label: 'Accueil', icon: home },
  { to: '/parcours', label: 'Parcours', icon: parcours },
  { to: '/scan', label: 'Scan', icon: qr },
  { to: '/ecole', label: 'École', icon: Ecole },
  { to: '/apropos', label: 'À propos', icon: Infos },
]
</script>

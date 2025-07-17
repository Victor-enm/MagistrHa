<template>
  <nav
    class="sticky bottom-0 w-[90%] px-2 mx-auto max-w-5xl flex justify-around bg-blanc inset-shadow-sm rounded-xl py-2 text-xs h-[72px]"
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
        'text-blanc bg-violet-3 ': isActive(item.to),
        'text-gris-6 bg-transparent': !isActive(item.to)
      }"
      class="flex items-center justify-center w-12 h-8 rounded-3xl transition-all duration-500 ease-out" ><component :is="item.icon" aria-hidden="true"/></span>
      <span>{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import home from '@/assets/icons/Home.svg'
import parcours from '@/assets/icons/Parcours.svg'
import qr from '@/assets/icons/QR.svg'
import Ecole from '@/assets/icons/École.svg'
import Infos from '@/assets/icons/Infos.svg'

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

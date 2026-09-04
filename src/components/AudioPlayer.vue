<template>
  <div class="flex flex-col justify-center mt-6">
    <div
      class="inline-flex items-center justify-center px-6 py-3 bg-violet-1 text-violet-3 p-4 border-violet-3 border-solid border-2 rounded-2xl mb-2 text-base gap-3"
      :class="additionalClasses"
    >
      <!-- Bouton Play/Pause -->
       <button
        @click="togglePlay"
        :disabled="!loaded"
        class="flex items-center justify-center p-1 text-violet-3 hover:text-violet-3 disabled:opacity-50 disabled:cursor-not-allowed transition"
        aria-label="Lecture"
      >
        <!-- Icône Play -->
        <svg
          v-if="!isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-10 h-10"
        >
          <path d="M8 5v14l11-7z" />
        </svg>

        <!-- Icône Pause -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-10 h-10"
        >
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      </button>

      <!-- Barre de progression -->
      <input
        type="range"
        min="0"
        :max="duration"
        step="0.1"
        :value="currentTime"
        @input="seek"
        class="w-32 sm:w-40 md:w-56 accent-violet-3 cursor-pointer"
        :disabled="!loaded"
      />

      <!-- Timecode -->
      <span class="text-sm font-MtMedium min-w-[72px] text-right">
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
      </span>

      <!-- Sélecteur de vitesse 
      <select
        v-model="playbackRate"
        @change="changePlaybackRate"
        class="text-xs font-MtMedium bg-rouge-1 text-blanc border border-blanc/30 rounded px-2 py-1 cursor-pointer hover:bg-rouge-1/90 transition"
        :disabled="!loaded"
        aria-label="Vitesse de lecture"
      >
        <option value="0.5">0.5x</option>
        <option value="1">1x</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>
      </select>
      -->
      <!-- Élément audio caché -->
      <audio
        ref="audioRef"
        :src="src"
        @timeupdate="updateProgress"
        @loadedmetadata="onLoaded"
        @ended="onEnded"
      ></audio>
    </div>
    <p class="text-sm font-MtItalic text-center -m-1">
      Votre visite est disponible en audiodescription.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  additionalClasses: {
    type: [String, Array, Object],
    default: '',
  },
})

const audioRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const loaded = ref(false)
//const playbackRate = ref('1')

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const onLoaded = () => {
  duration.value = audioRef.value?.duration || 0
  loaded.value = true
}

const updateProgress = () => {
  currentTime.value = audioRef.value?.currentTime || 0
}

const onEnded = () => {
  isPlaying.value = false
  currentTime.value = 0
}

const togglePlay = () => {
  const audio = audioRef.value
  if (!audio) return

  if (isPlaying.value) {
    audio.pause()
  } else {
    audio.play()
  }
  isPlaying.value = !isPlaying.value
}

const seek = (event) => {
  const audio = audioRef.value
  if (!audio) return
  audio.currentTime = event.target.value
  currentTime.value = parseFloat(event.target.value)
}

/*const changePlaybackRate = () => {
  const audio = audioRef.value
  if (!audio) return
  audio.playbackRate = parseFloat(playbackRate.value)
}*/
</script>
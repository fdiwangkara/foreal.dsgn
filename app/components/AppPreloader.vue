<template>
  <transition name="preloader-fade">
    <div
      v-if="!isDone"
      class="fixed inset-0 z-[10000] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      
      <!-- Outline Text (Background) -->
      <h1 
        class="absolute text-[15vw] md:text-[12vw] font-serif-alt font-extrabold lowercase text-transparent whitespace-nowrap opacity-20"
        style="-webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);"
      >
        foreal.dsgn
      </h1>
      
      <!-- Solid Text (Foreground, Masked by Progress) -->
      <h1 
        class="absolute text-[15vw] md:text-[12vw] font-serif-alt font-extrabold lowercase text-lime whitespace-nowrap transition-all duration-75"
        :style="{ clipPath: `inset(0 ${100 - progress}% 0 0)` }"
      >
        foreal.dsgn
      </h1>

      <!-- Minimal Counter at Bottom -->
      <div class="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-body-md md:text-heading-sm font-serif-alt font-bold lowercase tracking-tight text-white/60">
        {{ Math.round(progress) }}%
      </div>

    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDone = ref(false)
const progress = ref(0)

onMounted(() => {
  let currentProgress = 0
  const interval = setInterval(() => {
    // Add random increments for a realistic loading feel
    currentProgress += Math.random() * 12
    if (currentProgress >= 100) {
      currentProgress = 100
      progress.value = currentProgress
      clearInterval(interval)
      
      setTimeout(() => {
        isDone.value = true
      }, 500)
    } else {
      progress.value = currentProgress
    }
  }, 60)
})
</script>

<style scoped>
.preloader-fade-leave-active {
  transition: opacity 1s cubic-bezier(0.85, 0, 0.15, 1), transform 1s cubic-bezier(0.85, 0, 0.15, 1);
}
.preloader-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>

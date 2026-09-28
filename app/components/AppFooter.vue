<template>
  <footer class="relative bg-dark pt-20 pb-10 text-white overflow-hidden border-t border-white/10">
    <div class="px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center text-center">
      
      <!-- Minimal aesthetic logo -->
      <a 
        href="#top" 
        class="group flex flex-col items-center gap-6 mb-20"
        @click.prevent="scrollToTop"
        @mouseenter="cursor.setHover('TOP')"
        @mouseleave="cursor.clearHover()"
      >
        <div class="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500 ease-out-expo" v-html="logoSvg" />
        <span class="text-display-md font-extrabold lowercase tracking-tighter text-white group-hover:text-blue transition-colors duration-500">
          foreal<span class="text-lime">.</span>dsgn
        </span>
      </a>

      <div class="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
        <p class="text-body-sm md:text-body-md font-sans font-medium text-white/40 lowercase tracking-normal">
          &copy; {{ new Date().getFullYear() }} <span class="lowercase">foreal.dsgn</span>.
        </p>
        <p class="text-body-sm md:text-body-md font-sans font-medium text-white/40 lowercase tracking-normal">
          made by foreal.club
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import logoRaw from '~/assets/icons/logo.svg?raw'

const logoSvg = logoRaw
const cursor = useCustomCursor()
const { scrollTo } = useSmoothScroll()

const scrollToTop = () => {
  scrollTo(0, { duration: 1.5 })
}
</script>

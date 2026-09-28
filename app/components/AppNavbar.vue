<template>
  <div>
    <!-- MacBook Notch / Hamburger Navbar -->
    <header class="fixed top-0 left-1/2 -translate-x-1/2 z-[100] pointer-events-none w-full md:w-auto px-4 md:px-0 mt-4 md:mt-0 transition-all duration-500">
      <div
        class="pointer-events-auto flex items-center justify-between px-6 py-3 bg-[#050505] border md:border-t-0 border-white/10 w-full md:min-w-[450px] rounded-[24px] md:rounded-t-none md:rounded-b-[24px] shadow-2xl"
        @mouseenter="cursor.setHover()"
        @mouseleave="cursor.clearHover()"
      >
        
        <!-- Logo -->
        <a
          href="#top"
          class="flex items-center gap-3 cursor-none opacity-80 hover:opacity-100 transition-opacity"
          @click.prevent="scrollToTop"
        >
          <div class="w-8 h-8" v-html="logoSvg" />
        </a>

        <!-- Desktop Menu Links -->
        <nav class="hidden md:flex items-center gap-8 ml-6">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`/#${link.id}`"
            class="text-heading-md font-serif-alt lowercase tracking-tight text-off-white/60 hover:text-lime transition-colors duration-300 cursor-none"
            @click.prevent="navigateAndClose(link.id)"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Mobile Hamburger Toggle -->
        <button 
          class="flex md:hidden flex-col justify-center items-end w-8 h-8 gap-[5px] cursor-none relative z-[110]"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <span class="w-6 h-[2px] bg-white transition-all duration-300" :class="isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''" />
          <span class="w-6 h-[2px] bg-white transition-all duration-300" :class="isMenuOpen ? 'opacity-0' : ''" />
          <span class="w-6 h-[2px] bg-white transition-all duration-300" :class="isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''" />
        </button>

      </div>
    </header>

    <!-- Mobile Fullscreen Menu Overlay -->
    <transition name="menu-fade" @enter="onMenuEnter" @leave="onMenuLeave">
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-[#050505] z-[90] flex flex-col justify-center items-center md:hidden"
      >
        <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E'); mix-blend-mode: overlay;" />
        
        <nav class="flex flex-col items-center gap-10 relative z-10 menu-links-container">
          <a
            v-for="(link, i) in navLinks"
            :key="link.id"
            :href="`/#${link.id}`"
            class="menu-link opacity-0 translate-y-10 text-[15vw] font-serif-alt font-extrabold lowercase tracking-tighter text-off-white transition-all duration-300 active:text-lime"
            @click.prevent="navigateAndClose(link.id)"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logoRaw from '~/assets/icons/logo.svg?raw'
import { useRouter, useRoute } from 'vue-router'
import { gsap } from 'gsap'

const logoSvg = logoRaw
const cursor = useCustomCursor()
const { scrollTo } = useSmoothScroll()
const router = useRouter()
const route = useRoute()

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'work', id: 'work' },
  { label: 'services', id: 'services' },
  { label: 'learn', id: 'learn' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToTop = () => {
  isMenuOpen.value = false
  if (route.path !== '/') {
    router.push('/')
  } else {
    scrollTo(0, { duration: 1.5 })
  }
}

const navigateAndClose = async (id: string) => {
  isMenuOpen.value = false
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      scrollTo(`#${id}`, { offset: 0, duration: 1.5 })
    }, 300)
  } else {
    scrollTo(`#${id}`, { offset: 0, duration: 1.5 })
  }
}

const onMenuEnter = (el: Element, done: () => void) => {
  const links = el.querySelectorAll('.menu-link')
  gsap.to(links, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    stagger: 0.05,
    ease: 'expo.out',
    delay: 0.1,
    onComplete: done
  })
}

const onMenuLeave = (el: Element, done: () => void) => {
  const links = el.querySelectorAll('.menu-link')
  gsap.to(links, {
    y: -20,
    opacity: 0,
    duration: 0.2,
    ease: 'power2.in',
    onComplete: done
  })
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
</style>

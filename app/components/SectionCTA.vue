<template>
  <section id="contact" class="relative py-32 lg:py-48 bg-dark overflow-hidden flex flex-col items-center text-center">
    <!-- Parallax huge background text -->
    <div 
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none"
      data-parallax="-0.4"
    >
      <h1 class="text-[35vw] font-extrabold tracking-tighter leading-none whitespace-nowrap text-white">
        HELLO
      </h1>
    </div>

    <div class="px-6 md:px-12 relative z-10 w-full max-w-4xl auto-animate">
      
      <!-- Minimal CTA Text -->
      <h2 class="text-display-lg font-extrabold text-white leading-[0.9] tracking-tighter mb-8">
        Let's <span class="font-serif-alt italic text-lime font-normal">talk</span> <br />
        <span class="text-white/40">about it.</span>
      </h2>
      
      <p class="text-body-lg text-white/50 max-w-md mx-auto font-medium mb-16">
        Punya ide gila, butuh bantuan tugas, atau sekedar mau konsultasi design? Jangan ragu buat sapa kita.
      </p>

      <!-- Huge aesthetic email link -->
      <a 
        href="mailto:fdiwangkara2412@gmail.com" 
        class="group relative inline-flex flex-col items-center"
        @mouseenter="cursor.setHover('SEND')"
        @mouseleave="cursor.clearHover()"
      >
        <span class="text-heading-md md:text-display-sm font-bold text-white mb-2 transition-colors duration-300 group-hover:text-blue lowercase">
          fdiwangkara2412@gmail.com
        </span>
        <span class="w-full h-1 bg-lime transform origin-left transition-transform duration-500 ease-out-expo scale-x-100 group-hover:scale-x-0" />
        <span class="absolute bottom-0 left-0 w-full h-1 bg-blue transform origin-right transition-transform duration-500 ease-out-expo scale-x-0 group-hover:scale-x-100" />
      </a>

      <!-- Other links -->
      <div class="mt-20 flex flex-wrap justify-center gap-6">
        <a href="#" class="text-body-md font-serif-alt capitalize tracking-tight text-white/40 hover:text-lime transition-colors">
          Instagram
        </a>
        <a href="#" class="text-body-md font-serif-alt capitalize tracking-tight text-white/40 hover:text-lime transition-colors">
          LinkedIn
        </a>
        <a href="#" class="text-body-md font-serif-alt capitalize tracking-tight text-white/40 hover:text-lime transition-colors">
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cursor = useCustomCursor()
const { setupParallax, setupAutomation } = useReveal()

onMounted(() => {
  setupParallax('[data-parallax]')
  setupAutomation('.auto-animate')
})
</script>

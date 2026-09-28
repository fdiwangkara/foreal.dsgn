<template>
  <section
    id="top"
    class="relative w-full h-[120svh] bg-dark overflow-hidden flex flex-col items-center justify-center cursor-none"
    @mousemove="handleMouseMove"
  >
    <!-- True Liquid SVG Filter Definition -->
    <svg class="hidden">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>

    <!-- Liquid Mouse Interactive Orbs using Gooey Filter -->
    <div class="absolute inset-0 pointer-events-none" style="filter: url('#goo');">
      <div 
        class="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-lime rounded-full mix-blend-screen transition-transform duration-[1s] ease-out-expo blob-float-1"
        :style="{ transform: `translate(calc(-50% + ${mouseX * 0.15}px), calc(-50% + ${mouseY * 0.15}px))`, top: '40%', left: '40%' }"
      />
      <div 
        class="absolute w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] bg-blue rounded-full mix-blend-screen transition-transform duration-[1.5s] ease-out-expo blob-float-2"
        :style="{ transform: `translate(calc(-50% + ${mouseX * -0.1}px), calc(-50% + ${mouseY * -0.1}px))`, top: '60%', left: '60%' }"
      />
      <div 
        class="absolute w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] bg-white rounded-full mix-blend-screen transition-transform duration-[0.5s] ease-out blob-float-3"
        :style="{ transform: `translate(calc(-50% + ${mouseX * 1}px), calc(-50% + ${mouseY * 1}px))`, top: '50%', left: '50%' }"
      />
    </div>

    <!-- Background Noise Overlay -->
    <div 
      class="absolute inset-0 pointer-events-none opacity-20" 
      style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E'); mix-blend-mode: overlay;"
    />

    <!-- Insane Typography Layer -->
    <div class="relative z-10 w-full flex flex-col items-center justify-center px-4 pointer-events-none mix-blend-difference">
      
      <div class="flex items-center gap-4 mb-4 auto-animate">
        <span class="text-body-sm md:text-heading-xs text-off-white font-serif-alt capitalize tracking-tight border border-off-white/30 rounded-full px-6 py-2">Creative Studio</span>
      </div>

      <h1 class="gravity-text text-center font-serif-alt capitalize leading-[0.75] tracking-tighter w-full">
        <div class="flex justify-center overflow-visible">
          <span class="g-word block text-[15vw] text-off-white">DESIGN</span>
        </div>
        <div class="flex justify-center overflow-visible mt-[-2vw]">
          <span class="g-word block text-[18vw] text-lime italic font-serif">REALITY</span>
        </div>
      </h1>

      <p class="auto-animate mt-12 text-off-white/60 font-sans text-center max-w-lg text-lg font-medium leading-relaxed">
        Breaking the grid. No standard AI templates. Just pure aesthetic execution and digital experiences that matter.
      </p>

    </div>

    <!-- Giant Scrolling Marquee at the bottom -->
    <div class="absolute bottom-10 left-0 w-full overflow-hidden rotate-[-2deg] scale-110 z-20 pointer-events-none opacity-30 mix-blend-screen">
      <div class="flex whitespace-nowrap animate-marquee">
        <span class="text-[8vw] font-serif-alt font-extrabold capitalize text-transparent bg-clip-text" style="-webkit-text-stroke: 1px #BDE64E;">
          &nbsp;— WE MAKE THINGS FOR REAL — WE MAKE THINGS FOR REAL — WE MAKE THINGS FOR REAL
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cursor = useCustomCursor()
const { setupGravityText, setupAutomation } = useReveal()

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (typeof window !== 'undefined') {
    mouseX.value = e.clientX - window.innerWidth / 2
    mouseY.value = e.clientY - window.innerHeight / 2
  }
}

onMounted(() => {
  setupGravityText('.gravity-text')
  setupAutomation('.auto-animate')
})
</script>

<style scoped>
.animate-marquee {
  animation: marquee 15s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>

<style scoped>
@keyframes blob-1 {
  0%, 100% { translate: 0px 0px; scale: 1; }
  50% { translate: -15vw 10vw; scale: 1.1; }
}
@keyframes blob-2 {
  0%, 100% { translate: 0px 0px; scale: 1; }
  50% { translate: 10vw -15vw; scale: 1.2; }
}
@keyframes blob-3 {
  0%, 100% { translate: 0px 0px; }
  50% { translate: -5vw -5vw; }
}
.blob-float-1 { animation: blob-1 8s ease-in-out infinite; }
.blob-float-2 { animation: blob-2 10s ease-in-out infinite; }
.blob-float-3 { animation: blob-3 6s ease-in-out infinite; }
</style>

<template>
  <main class="relative bg-[#050505] text-[#F0F0F0] min-h-screen pt-40 pb-32">
    <!-- Massive header -->
    <div class="px-6 md:px-12 max-w-[1600px] mx-auto mb-20 auto-animate">
      <NuxtLink to="/#work" class="inline-flex items-center gap-4 text-body-sm font-serif-alt capitalize tracking-tight text-lime mb-12 hover:text-white transition-colors cursor-none" @mouseenter="cursor.setHover()" @mouseleave="cursor.clearHover()">
        <span>← Back to Works</span>
      </NuxtLink>

      <h1 class="text-[clamp(3rem,8vw,8rem)] font-serif-alt font-extrabold capitalize leading-[0.8] tracking-tighter mb-8 text-off-white">
        {{ slug }}
      </h1>
      
      <div class="flex flex-wrap gap-4 mb-16">
        <span class="px-6 py-3 border border-white/10 rounded-full text-body-sm font-serif-alt capitalize tracking-tight bg-white/5">Digital Product</span>
        <span class="px-6 py-3 border border-white/10 rounded-full text-body-sm font-serif-alt capitalize tracking-tight bg-white/5">2024</span>
      </div>
    </div>

    <!-- Hero Image / Abstraction -->
    <div class="w-full px-6 md:px-12 max-w-[1600px] mx-auto mb-32 auto-animate">
      <div class="w-full aspect-video bg-white/10 overflow-hidden relative rounded-[40px]">
        <div class="absolute inset-0 bg-blue mix-blend-overlay opacity-50" />
        <div class="absolute inset-0 flex items-center justify-center opacity-20 mix-blend-multiply">
           <span class="text-[30vw] font-serif-alt font-extrabold text-white">{{ slug?.slice(0, 3) }}</span>
        </div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 auto-animate">
      <div class="md:col-span-4">
        <h3 class="text-heading-sm font-serif-alt capitalize tracking-tight text-lime mb-6">The Challenge</h3>
        <p class="text-body-md font-sans text-white/50 leading-relaxed">
          Menciptakan pengalaman digital yang tidak hanya fungsional, tetapi juga menembus batas-batas desain konvensional. Kami ditantang untuk membangun identitas yang berani.
        </p>
      </div>
      <div class="md:col-span-8">
        <h3 class="text-heading-sm font-serif-alt capitalize tracking-tight text-lime mb-6">The Solution</h3>
        <p class="text-body-lg font-sans font-medium text-white/80 leading-relaxed mb-8">
          Solusinya adalah merombak total pendekatan visual. Membuang grid standar, memanfaatkan tipografi eksperimental, dan mengandalkan interaksi berbasis WebGL untuk memberikan "wow factor" sejak detik pertama.
        </p>
        <p class="text-body-lg font-sans font-medium text-white/80 leading-relaxed">
          Hasil akhirnya adalah platform digital yang terasa hidup, organik, dan berani tampil beda di lautan template AI yang membosankan.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = computed(() => {
  if (Array.isArray(route.params.slug)) {
    return route.params.slug[0]
  }
  return route.params.slug || 'Unknown Project'
})

const cursor = useCustomCursor()
const { setupAutomation } = useReveal()

onMounted(() => {
  setupAutomation('.auto-animate')
})
</script>

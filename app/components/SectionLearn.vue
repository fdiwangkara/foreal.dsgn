<template>
  <section id="learn" class="relative py-32 lg:py-64 bg-lime text-dark overflow-hidden cursor-none">
    
    <!-- Giant Typography Background -->
    <div class="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10 flex flex-col">
      <h2 class="text-[15vw] font-serif-alt font-extrabold capitalize leading-[0.8] tracking-tighter mix-blend-multiply opacity-20 whitespace-nowrap -ml-4">
        SKIP THE
      </h2>
      <h2 class="text-[15vw] font-serif-alt font-extrabold capitalize leading-[0.8] tracking-tighter mix-blend-multiply opacity-40 whitespace-nowrap ml-12">
        8-HOUR
      </h2>
      <h2 class="text-[15vw] font-serif-alt font-extrabold capitalize leading-[0.8] tracking-tighter mix-blend-multiply opacity-80 whitespace-nowrap ml-4">
        TUTORIALS.
      </h2>
    </div>

    <!-- Content overlay -->
    <div class="px-6 md:px-12 max-w-[1600px] mx-auto mt-20 lg:-mt-40 relative z-20 grid grid-cols-1 md:grid-cols-12 gap-16">
      
      <!-- Offset Text Box -->
      <div class="md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-7 xl:col-span-4 xl:col-start-8">
        <div class="bg-dark text-off-white p-10 lg:p-12 rounded-none auto-animate hover:-translate-y-4 transition-transform duration-500 shadow-2xl">
          <span class="text-body-sm font-serif-alt capitalize tracking-tight text-lime mb-8 block">
            private mentoring
          </span>
          <p class="text-body-lg font-sans font-medium text-white/80 leading-relaxed mb-10">
            Berhenti buang waktu nonton tutorial yang panjang dan membosankan. Belajar langsung sama praktisi yang udah ngerjain project beneran. Langsung to the point, langsung bikin barang.
          </p>
          
          <ul class="flex flex-col gap-4 mb-12">
            <li v-for="(feature, i) in features" :key="i" class="flex items-start gap-4">
              <span class="text-lime mt-1">✓</span>
              <span class="text-label-md font-sans text-white/60">{{ feature }}</span>
            </li>
          </ul>

          <a 
            href="#contact" 
            class="w-full inline-flex items-center justify-between border border-white/20 px-8 py-5 text-body-md font-serif-alt capitalize tracking-tight hover:bg-lime hover:text-dark transition-colors duration-300 cursor-none group"
            @mouseenter="cursor.setHover('CHAT')"
            @mouseleave="cursor.clearHover()"
          >
            <span>mulai belajar</span>
            <span class="transform group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
const cursor = useCustomCursor()
const { setupAutomation } = useReveal()

const features = [
  '1-on-1 Sessions (Fokus penuh)',
  'Project Based (Ngerjain kasus nyata)',
  'Flexible Pace (Sesuai kecepatan lo)'
]

onMounted(() => {
  setupAutomation('.auto-animate')
})
</script>

<style scoped>
</style>

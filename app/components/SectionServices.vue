<template>
  <section id="services" class="relative py-24 md:py-40 bg-[#050505] text-[#F0F0F0] cursor-none">
    
    <div class="px-6 md:px-12 max-w-[1200px] mx-auto">
      
      <div class="mb-24">
        <h2 class="text-[clamp(3rem,6vw,6rem)] font-serif-alt font-extrabold lowercase leading-none tracking-tighter auto-animate">
          our services.
        </h2>
        <p class="mt-6 text-body-lg text-white/50 max-w-xl font-sans auto-animate">
          Satu tempat buat ngembangin skill dan project. Dari fundamental sampai eksekusi bareng mentor.
        </p>
      </div>

      <!-- Sticky Cards Stack -->
      <div class="relative w-full flex flex-col gap-6 md:gap-8 pb-32">
        
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="sticky top-[100px] md:top-[120px] w-full rounded-[32px] p-8 md:p-16 border border-white/10 shadow-2xl transition-transform duration-500 ease-out-expo flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
          :class="service.bgClass"
          :style="{ zIndex: index + 10 }"
          @mouseenter="cursor.setHover('VIEW')"
          @mouseleave="cursor.clearHover()"
        >
          <!-- Left: Number & Title -->
          <div class="flex flex-col">
            <span class="text-body-sm font-serif-alt capitalize tracking-tight opacity-50 mb-8 md:mb-16">
              0{{ index + 1 }}
            </span>
            <h3 class="text-display-sm md:text-display-md font-serif-alt font-extrabold lowercase tracking-tight leading-none group-hover:scale-105 origin-left transition-transform duration-500">
              {{ service.title }}
            </h3>
          </div>

          <!-- Right: Description & Tags -->
          <div class="w-full md:max-w-md flex flex-col gap-8 md:text-right md:items-end">
            <p class="text-body-lg font-sans font-medium opacity-80 leading-relaxed">
              {{ service.description }}
            </p>
            <div class="flex flex-wrap gap-2 md:justify-end">
              <span 
                v-for="tag in service.tags" 
                :key="tag"
                class="text-[0.8rem] font-serif-alt capitalize tracking-tight border px-4 py-2 rounded-full opacity-60"
                :class="service.borderClass"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const cursor = useCustomCursor()
const { setupAutomation } = useReveal()

onMounted(() => {
  setupAutomation('.auto-animate')
})

const services = [
  {
    title: 'Visual Design',
    description: 'UI/UX, landing page, mobile app, visual system, presentation design. Dari wireframe sampai pixel-perfect execution.',
    tags: ['UI/UX', 'Web', 'Mobile'],
    bgClass: 'bg-lime text-dark',
    borderClass: 'border-dark/20'
  },
  {
    title: 'Private Figma',
    description: 'Belajar Figma 1-on-1. Project-based learning, tanpa awkward classroom vibes. Sesuai pace dan kebutuhan lo.',
    tags: ['Mentoring', 'Design'],
    bgClass: 'bg-blue text-white',
    borderClass: 'border-white/20'
  },
  {
    title: 'Web Basics',
    description: 'Pahami basic HTML, CSS, JavaScript dan cara website beneran bekerja. Cukup ngerti fundamentalnya, ngga perlu jadi fullstack dev.',
    tags: ['HTML', 'CSS', 'JS'],
    bgClass: 'bg-[#F0F0F0] text-dark',
    borderClass: 'border-dark/20'
  },
  {
    title: 'Campus Assist',
    description: 'Mentoring buat tugas kampus yang involve UI/UX, Figma, frontend, basic web, atau prototyping.',
    tags: ['Consultation', 'Task'],
    bgClass: 'bg-[#151515] text-white',
    borderClass: 'border-white/20'
  }
]
</script>

<style scoped>
</style>

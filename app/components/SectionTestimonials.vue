<template>
  <section class="relative py-32 lg:py-48 bg-off-white overflow-hidden">
    <!-- Header -->
    <div class="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 lg:mb-32 auto-animate">
      <h2 class="text-display-md font-extrabold text-dark leading-none tracking-tighter">
        Real words. <br />
        <span class="font-serif-alt italic text-blue font-normal">No bullshit.</span>
      </h2>
    </div>

    <!-- Aesthetic Staggered Layout -->
    <div class="px-6 md:px-12 max-w-[1400px] mx-auto relative">
      <div class="flex flex-col gap-24 lg:gap-0 relative">
        
        <div 
          v-for="(testi, i) in testimonials" 
          :key="i"
          class="relative lg:w-[45%]"
          :class="[
            i % 2 !== 0 ? 'lg:ml-auto lg:mt-[-100px]' : '',
            i === 2 ? 'lg:mx-auto lg:mt-[-150px]' : ''
          ]"
          :data-parallax="testi.parallax"
        >
          <div 
            class="relative p-10 lg:p-14 border border-dark/10 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500 auto-animate"
            :style="{ borderRadius: '2px', transform: `rotate(${testi.rotate}deg)` }"
          >
            <!-- Quote Mark -->
            <div class="absolute -top-6 -left-4 text-[6rem] font-serif-alt text-lime leading-none opacity-50 select-none pointer-events-none">
              "
            </div>

            <p class="text-body-lg text-dark/80 font-medium leading-relaxed mb-8 relative z-10">
              {{ testi.quote }}
            </p>

            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-blue flex items-center justify-center text-white text-label-md font-bold">
                {{ testi.name.charAt(0) }}
              </div>
              <div>
                <span class="block text-body-md font-serif-alt capitalize tracking-tight text-dark">{{ testi.name }}</span>
                <span class="block text-body-sm font-serif-alt capitalize tracking-tight text-dark/30 mt-1">{{ testi.role }}</span>
              </div>
            </div>

            <!-- Aesthetic tape/sticker -->
            <div 
              v-if="testi.sticker" 
              class="absolute -bottom-4 right-10 bg-dark text-lime px-3 py-1 text-[0.8rem] md:text-[0.9rem] font-serif-alt capitalize tracking-tight shadow-md"
              style="transform: rotate(-3deg);"
            >
              {{ testi.sticker }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { setupParallax, setupAutomation } = useReveal()

const testimonials = [
  {
    quote: 'Awalnya gue kira Figma bakal ribet banget. Ternyata dalam 3 session udah bisa bikin wireframe sendiri tanpa pusing.',
    name: 'Raisa A.',
    role: 'Figma Class',
    rotate: -2,
    parallax: '0.2',
    sticker: 'LITERAL LIFE SAVER',
  },
  {
    quote: 'Yang bikin beda itu ngajarnya nggak kayak robot. Bahasa manusia, langsung to the point. Project kampus gue akhirnya kelar.',
    name: 'Dimas K.',
    role: 'Campus Assist',
    rotate: 2,
    parallax: '0.3',
    sticker: null,
  },
  {
    quote: 'Portfolio gue awalnya berantakan parah. Setelah sesi consultation, sekarang gue ngerti kenapa layout itu penting.',
    name: 'Arif S.',
    role: 'Consultation',
    rotate: -1,
    parallax: '-0.2',
    sticker: '10/10 WOULD RECOMMEND',
  },
]

onMounted(() => {
  setupParallax('[data-parallax]')
  setupAutomation('.auto-animate')
})
</script>

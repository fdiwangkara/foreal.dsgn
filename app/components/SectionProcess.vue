<template>
  <section class="relative py-20 lg:py-32 bg-off-white overflow-hidden">
    <!-- Editorial Label -->
    <div class="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto mb-12 lg:mb-20">
      <span class="editorial-label">007 / PROCESS</span>
      <h2 class="text-display-sm font-extrabold text-dark mt-4">
        Gimana
        <span class="font-serif-alt italic text-blue"> prosesnya?</span>
      </h2>
    </div>

    <!-- Process Steps -->
    <div class="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          ref="stepRefs"
          class="group relative"
        >
          <!-- Step number -->
          <div class="flex items-center gap-3 mb-4">
            <span class="text-display-sm font-extrabold text-lime">{{ step.number }}</span>
            <div class="hidden lg:block h-[1px] flex-1 bg-dark/10 group-last:hidden" />
          </div>

          <h3 class="text-heading-md font-bold text-dark mb-2 capitalize tracking-wide">
            {{ step.title }}
          </h3>

          <p class="text-body-sm text-dark/50 leading-relaxed">
            {{ step.description }}
          </p>

          <!-- Connector arrow (desktop) -->
          <div
            v-if="i < steps.length - 1"
            class="hidden lg:block absolute top-3 -right-2 text-dark/15"
            aria-hidden="true"
          >
            →
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stepRefs = ref<HTMLElement[]>([])

const steps = [
  {
    number: '01',
    title: 'Cerita',
    description: 'Brief, masalah, tugas, ide, atau project. Ceritain aja dulu.',
  },
  {
    number: '02',
    title: 'Pahami',
    description: 'Kita identifikasi apa yang kamu beneran butuhin.',
  },
  {
    number: '03',
    title: 'Bikin / Belajar',
    description: 'Design bareng atau belajar cara bikinnya sendiri.',
  },
  {
    number: '04',
    title: 'Refine',
    description: 'Feedback, iterasi, testing. Sampai bener-bener oke.',
  },
  {
    number: '05',
    title: 'Ship',
    description: 'Final design, prototype, atau ilmu yang bisa kamu pakai beneran.',
  },
]
</script>

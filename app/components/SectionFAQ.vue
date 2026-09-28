<template>
  <section id="faq" class="relative py-32 lg:py-48 bg-blue text-white overflow-hidden">
    <div class="px-6 md:px-12 max-w-[1400px] mx-auto">
      
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32">
        <!-- Left: Massive Sticky Text -->
        <div class="w-full lg:w-[40%]">
          <div class="lg:sticky lg:top-40 auto-animate">
            <h2 class="text-display-md font-extrabold leading-none tracking-tighter text-lime mb-6">
              Got <br /> Questions?
            </h2>
            <p class="text-body-md text-white/50 font-medium">
              Hal-hal yang sering ditanyain orang-orang sebelum mulai project atau kelas bareng kita.
            </p>
          </div>
        </div>

        <!-- Right: Aesthetic Accordion Lines -->
        <div class="w-full lg:w-[60%] border-t border-white/20">
          <div 
            v-for="(item, i) in faqs" 
            :key="i"
            class="group border-b border-white/20 cursor-pointer auto-animate"
            @click="toggle(i)"
          >
            <div class="flex items-center justify-between py-8 lg:py-10 pr-4">
              <h3 class="text-heading-lg font-bold tracking-tight pr-8 transition-colors duration-300 group-hover:text-lime">
                {{ item.q }}
              </h3>
              <!-- Simple plus/minus icon -->
              <div class="relative w-4 h-4 flex-shrink-0 text-lime">
                <span 
                  class="absolute top-1/2 left-0 w-full h-[2px] bg-current -translate-y-1/2 transition-transform duration-300" 
                />
                <span 
                  class="absolute top-0 left-1/2 w-[2px] h-full bg-current -translate-x-1/2 transition-transform duration-300"
                  :class="active === i ? 'scale-y-0' : 'scale-y-100'"
                />
              </div>
            </div>

            <!-- Content -->
            <div 
              class="grid transition-all duration-500 ease-out-expo"
              :class="active === i ? 'grid-rows-[1fr] opacity-100 pb-10' : 'grid-rows-[0fr] opacity-0 pb-0'"
            >
              <div class="overflow-hidden">
                <p class="text-body-lg text-white/60 font-medium leading-relaxed max-w-2xl">
                  {{ item.a }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { setupAutomation } = useReveal()
const active = ref<number | null>(0) // First one open by default

const toggle = (i: number) => {
  active.value = active.value === i ? null : i
}

const faqs = [
  {
    q: 'Kelas Figma-nya online atau offline?',
    a: 'Bisa dua-duanya! Kalau domisili Jakarta, kita bisa ketemu di coffeeshop (biar vibesnya dapet). Kalau di luar itu, kita pakai Google Meet/Zoom.',
  },
  {
    q: 'Gue belum pernah nyentuh Figma sama sekali, bisa join?',
    a: 'Sangat bisa. Justru private class ini didesain buat absolute beginners. Kita mulai dari shortcut basic sampai bikin design system sederhana.',
  },
  {
    q: 'Bisa bantu kerjain tugas akhir / skripsi?',
    a: 'Kita bantu *mentoring* dan *guidance*, BUKAN joki ngerjain semuanya dari nol. Kita bantu lo paham prosesnya biar lo bisa ngerjain sendiri dengan bener.',
  },
  {
    q: 'Berapa rate untuk web design & development?',
    a: 'Sangat tergantung scope project. Tapi kita sangat transparan soal pricing di awal. Mending kita ngobrol dulu aja lewat email/WA biar enak.',
  },
]

onMounted(() => {
  setupAutomation('.auto-animate')
})
</script>

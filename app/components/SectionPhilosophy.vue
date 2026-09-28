<template>
  <section id="story" class="relative py-20 lg:py-32 bg-white overflow-hidden">
    <!-- Editorial Label -->
    <div class="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto mb-12 lg:mb-20">
      <span class="editorial-label">006 / PHILOSOPHY</span>
    </div>

    <div class="px-5 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left: Big Typography -->
        <div ref="gravityRef">
          <h2 class="text-display-md font-extrabold text-dark mb-6">
            So, what's
            <span class="text-blue">"foreal"</span>
            anyway?
          </h2>

          <!-- Giant FOR REAL text -->
          <div class="relative my-8 lg:my-12">
            <span class="gravity-word text-display-xl font-extrabold capitalize text-blue/5 leading-none select-none block" aria-hidden="true">
              FOR
            </span>
            <span class="gravity-word text-display-xl font-extrabold capitalize text-blue/5 leading-none select-none block -mt-4 lg:-mt-8" aria-hidden="true">
              REAL.
            </span>

            <!-- Lime underline accent -->
            <div class="absolute bottom-2 left-0 w-32 h-[4px] bg-lime" />
          </div>
        </div>

        <!-- Right: Philosophy Text -->
        <div class="flex flex-col justify-center">
          <p class="text-body-lg text-dark/60 mb-6 leading-relaxed">
            <span class="lowercase">foreal.dsgn</span> ada karena design dan teknologi sering <em>keliatan</em>
            lebih rumit dari yang seharusnya.
          </p>

          <div class="space-y-4 mb-8">
            <p class="text-heading-lg font-extrabold text-dark">
              Make it understandable.
            </p>
            <p class="text-heading-lg font-extrabold text-dark">
              Make it useful.
            </p>
            <p class="text-heading-lg font-extrabold text-blue">
              Make it for real.
            </p>
          </div>

          <div class="dashed-line mb-6" />

          <p class="text-body-md text-dark/50 mb-4">
            Kita nggak soal:
          </p>
          <ul class="space-y-2 mb-6">
            <li v-for="item in antiList" :key="item" class="flex items-start gap-3 text-body-sm text-dark/40">
              <span class="text-dark/20 mt-0.5">✕</span>
              {{ item }}
            </li>
          </ul>

          <div class="p-5 bg-blue/[0.03] border-l-2 border-lime" style="border-radius: 0 3px 3px 0">
            <p class="text-body-md text-dark/70 font-serif-alt italic leading-relaxed">
              "Good design should make things clearer, not make people feel stupid."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { setupGravityText } = useReveal()
const gravityRef = ref<HTMLElement | null>(null)

const antiList = [
  'Ngejar tren yang nggak masuk akal',
  'Bikin sesuatu jadi ribet padahal nggak perlu',
  'Tambah efek berlebihan biar keliatan "keren"',
  'Pakai kata-kata fancy yang nggak ada isinya',
  'Pura-pura semua butuh AI',
]

onMounted(() => {
  setupGravityText(gravityRef.value)
})
</script>

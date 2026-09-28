<template>
  <section id="work" class="relative py-32 lg:py-64 bg-[#050505] overflow-hidden cursor-none" @mousemove="handleMouseMove" @mouseleave="activeProject = null">
    
    <div class="px-6 md:px-12 max-w-[1600px] mx-auto mb-32 flex justify-between items-end relative z-10 auto-animate">
      <h2 class="text-body-md md:text-heading-sm font-serif-alt capitalize tracking-tight text-lime">
        Selected Works / 24
      </h2>
      <div class="w-1/2 h-[1px] bg-white/10 hidden md:block" />
    </div>

    <!-- Massive Text List -->
    <div class="relative z-10 flex flex-col w-full">
      <div 
        v-for="(project, i) in projects"
        :key="project.name"
        class="group relative w-full border-t border-white/5 last:border-b py-8 lg:py-12 px-6 md:px-12 hover:bg-white/[0.02] transition-colors duration-500"
        @mouseenter="activeProject = i; cursor.setHover('VIEW')"
        @mouseleave="activeProject = null; cursor.clearHover()"
      >
        <NuxtLink :to="`/work/${project.slug}`" class="flex flex-col w-full pointer-events-auto relative">
          
          <!-- MOBILE INLINE IMAGE -->
          <div class="block md:hidden w-full h-[35vw] rounded-3xl mb-6 overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            <div 
              class="absolute inset-0 transition-transform duration-[1.5s] ease-out-expo scale-100 group-hover:scale-110" 
              :style="{ backgroundColor: project.color }"
            >
              <div class="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-multiply">
                <span class="text-[15vw] font-serif-alt font-extrabold text-white">{{ project.shortName }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between w-full">
            <div class="flex items-center gap-6 lg:gap-16">
              <span class="text-heading-md font-serif italic text-white/20 group-hover:text-lime transition-colors duration-300">
                0{{ i + 1 }}
              </span>
              <h3 class="text-[12vw] lg:text-[7vw] font-serif-alt font-extrabold capitalize leading-none tracking-tighter text-off-white group-hover:translate-x-2 md:group-hover:translate-x-6 transition-transform duration-700 ease-out-expo">
                {{ project.name }}
              </h3>
            </div>
            
            <div class="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-75">
              <span 
                v-for="tool in project.tools" 
                :key="tool"
                class="text-[0.65rem] md:text-body-sm font-serif-alt capitalize tracking-tight text-off-white/60 md:text-off-white/40 border border-off-white/20 md:border-off-white/10 px-4 py-2 rounded-full"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Mouse Follower Image Reveal (Desktop Only) -->
    <div 
      class="hidden md:block fixed pointer-events-none z-50 overflow-hidden transition-opacity duration-300 ease-out"
      :class="activeProject !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
      :style="{
        top: `${mouseY}px`,
        left: `${mouseX}px`,
        width: '350px',
        height: '450px',
        transform: 'translate(-50%, -50%)',
      }"
    >
      <div 
        class="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[1s] ease-out-expo"
        :style="{
          backgroundColor: activeProject !== null ? projects[activeProject].color : '#1246A2',
          transform: activeProject !== null ? 'scale(1)' : 'scale(1.2)'
        }"
      >
        <!-- Temporary massive letters since we don't have actual images -->
        <div class="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-multiply">
           <span class="text-[8rem] font-serif-alt font-extrabold text-white">
             {{ activeProject !== null ? projects[activeProject].shortName : '' }}
           </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const cursor = useCustomCursor()
const { setupAutomation } = useReveal()

const activeProject = ref<number | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (typeof window !== 'undefined') {
    // We use clientX/clientY for fixed positioning
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  }
}

const projects = [
  {
    name: 'Studium',
    slug: 'studium',
    shortName: 'STD',
    tools: ['UX Research', 'Prototyping'],
    color: '#E5E5E5',
  },
  {
    name: 'Kopi Teras',
    slug: 'kopi-teras',
    shortName: 'KT',
    tools: ['Brand Identity', 'Webflow'],
    color: '#BDE64E',
  },
  {
    name: 'Rupa Gallery',
    slug: 'rupa-gallery',
    shortName: 'RPA',
    tools: ['iOS Design', 'Motion'],
    color: '#1246A2',
  },
  {
    name: 'Lumikra',
    slug: 'lumikra',
    shortName: 'LMK',
    tools: ['Design System', 'Figma'],
    color: '#FF5C00',
  }
]

onMounted(() => {
  setupAutomation('.auto-animate')
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'
import { onMounted, onUnmounted } from 'vue'

const { init, destroy } = useSmoothScroll()

onMounted(() => {
  init()
})

onUnmounted(() => {
  destroy()
})
</script>

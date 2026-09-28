<template>
  <div class="bg-[#050505] text-[#F0F0F0]">
    <AppPreloader />
    <CustomCursor />
    <AppNavbar />
    
    <slot />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Global layout logic if needed
</script>

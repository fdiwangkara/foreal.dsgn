<template>
  <div
    v-if="!isMobile && isVisible"
    class="custom-cursor"
    :class="{ 'is-hovering': isHovering }"
    :style="{
      transform: `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`,
    }"
    aria-hidden="true"
  >
    <span v-if="cursorLabel" class="cursor-label">{{ cursorLabel }}</span>
  </div>
</template>

<script setup lang="ts">
const { cursorX, cursorY, isHovering, cursorLabel, isVisible, isMobile } = useCustomCursor()
</script>

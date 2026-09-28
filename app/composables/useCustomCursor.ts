export const useCustomCursor = () => {
  const cursorX = ref(0)
  const cursorY = ref(0)
  const isHovering = ref(false)
  const cursorLabel = ref('')
  const isVisible = ref(false)

  const isMobile = ref(true)

  const onMouseMove = (e: MouseEvent) => {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
    if (!isVisible.value) isVisible.value = true
  }

  const setHover = (label: string = '') => {
    isHovering.value = true
    cursorLabel.value = label
  }

  const clearHover = () => {
    isHovering.value = false
    cursorLabel.value = ''
  }

  const init = () => {
    if (import.meta.server) return
    isMobile.value = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768

    if (!isMobile.value) {
      window.addEventListener('mousemove', onMouseMove)
    }
  }

  const destroy = () => {
    window.removeEventListener('mousemove', onMouseMove)
  }

  return { cursorX, cursorY, isHovering, cursorLabel, isVisible, isMobile, setHover, clearHover, init, destroy }
}

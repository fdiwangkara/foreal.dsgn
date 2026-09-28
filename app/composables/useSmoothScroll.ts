import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let globalLenis: Lenis | null = null

export const useSmoothScroll = () => {

  const init = () => {
    if (import.meta.server) return

    gsap.registerPlugin(ScrollTrigger)

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })

    lenisInstance.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time: number) => {
      lenisInstance.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    globalLenis = lenisInstance
  }

  const destroy = () => {
    if (globalLenis) {
      globalLenis.destroy()
      globalLenis = null
    }
  }

  const scrollTo = (target: string | number, options?: object) => {
    globalLenis?.scrollTo(target, options)
  }

  return { init, destroy, scrollTo, getLenis: () => globalLenis }
}

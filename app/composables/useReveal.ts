import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useReveal = () => {
  const setupReveal = (selector: string = '.reveal-up', options?: gsap.TweenVars) => {
    if (import.meta.server) return
    gsap.registerPlugin(ScrollTrigger)
    nextTick(() => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 150, opacity: 0, scale: 0.9, rotationX: 10 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.5,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
            ...options,
          }
        )
      })
    })
  }

  const setupGravityText = (selector: string = '.gravity-text') => {
    if (import.meta.server) return
    gsap.registerPlugin(ScrollTrigger)
    nextTick(() => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => {
        const words = el.querySelectorAll('.g-word')
        gsap.fromTo(
          words,
          { 
            y: (i) => -100 - (Math.random() * 200),
            opacity: 0, 
            rotation: (i) => -15 + Math.random() * 30 
          },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    })
  }

  const setupParallax = (selector: string = '[data-parallax]') => {
    if (import.meta.server) return
    gsap.registerPlugin(ScrollTrigger)
    nextTick(() => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el) => {
        const speed = el.getAttribute('data-parallax') || '0.2'
        const yValue = window.innerHeight * parseFloat(speed)
        
        gsap.fromTo(
          el,
          { y: -yValue / 2 },
          {
            y: yValue / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    })
  }
  
  const setupAutomation = (selector: string = '.auto-animate') => {
    if (import.meta.server) return
    gsap.registerPlugin(ScrollTrigger)
    nextTick(() => {
       const elements = document.querySelectorAll(selector)
       elements.forEach((el, i) => {
         gsap.fromTo(el, 
          { scale: 0.85, opacity: 0, filter: 'blur(20px)', y: 100, rotationZ: (i % 2 === 0 ? 3 : -3) },
          { scale: 1, opacity: 1, filter: 'blur(0px)', y: 0, rotationZ: 0, duration: 1.5, ease: 'back.out(1.2)', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
         )
       })
    })
  }

  return { setupReveal, setupGravityText, setupParallax, setupAutomation }
}

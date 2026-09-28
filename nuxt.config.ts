// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
  ],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      'Manrope': [400, 500, 600, 700, 800],
      'Syne': [400, 600, 700, 800],
      'Bricolage+Grotesque': [400, 600, 700, 800],
    },
    display: 'swap',
    preload: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'foreal.dsgn — Design, Learn, Make It For Real.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'foreal.dsgn membantu kamu dalam design, private Figma, basic website, dan project digital — dari belajar sampai benar-benar jadi.',
        },
        { property: 'og:title', content: 'foreal.dsgn — Design, Learn, Make It For Real.' },
        {
          property: 'og:description',
          content:
            'foreal.dsgn membantu kamu dalam design, private Figma, basic website, dan project digital — dari belajar sampai benar-benar jadi.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
})


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: false
  },
  modules: [
    '@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ['cog', 'coffee','circle', 'arrow-right', 'bullhorn','person-chalkboard','globe','robot', "mobile-screen-button"],
      regular: ['comment','file-code', 'lightbulb' ],
      brands: ['twitter', 'whatsapp','medium','github','linkedin','instagram','x-twitter','php','html5' ],
    },
  },
  css:[
    '@/assets/index.css'
  ],
  
})

// https://nuxt.com/docs/api/configuration/nuxt-config
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
      solid: ['cog', 'coffee','circle', 'arrow-right'],
      regular: ['comment','file-code' ],
      brands: ['twitter', 'whatsapp','medium','github','linkedin','instagram','x-twitter','php','html5' ],
    },
  },
  css:[
    '@/assets/index.css'
  ],
  
})

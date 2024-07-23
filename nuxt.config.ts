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
      solid: ['cog', 'coffee','circle'],
      regular: ['comment' ],
      brands: ['twitter', 'whatsapp' ],
    },
  },
  css:[
    '@/assets/index.css'
  ],
  
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'https://cms.tvw-group.com/api'
    }
  },
  devtools: { enabled: true },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-headlessui',
    "nuxt-tiptap-editor"
  ],
  css : [
    '@/assets/css/main.css'
  ],
  
})
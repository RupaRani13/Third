import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@fortawesome/fontawesome-free/css/all.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in'}
  },
  vite: {
    define: {
      'process.env.DEBUG': true,
    },
  },
  plugins: ['plugins/swiper.client.js', 'plugins/vueViewer.client.js'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['marquee', 'strike'].includes(tag)
    }
  },


})

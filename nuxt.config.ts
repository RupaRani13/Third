import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.css', '@fortawesome/fontawesome-free/css/all.min.css'],
    build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  plugins: ['plugins/swiper.client.js', 'plugins/vueViewer.client.js'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['marquee' ].includes(tag)
    }
  }
})

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from 'vuetify/iconsets/fa'
import {aliases, mdi} from "vuetify/lib/iconsets/mdi";


export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    customProperties: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
          mdi,
          fa
      }
  },
  })

  nuxtApp.vueApp.use(vuetify)
})
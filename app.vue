<template>
  <v-app :style="cssProps">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="20" :throttle="0" :duration="1000" />
      <NuxtPage />
      <UiErrormsgDesign01 v-model="store.savingSuccessful" :displayText="store.displayText"></UiErrormsgDesign01>
      <UiSnackbarDesign01 v-model="snackbar.display" :displayText="snackbar.displayText"></UiSnackbarDesign01>
    </NuxtLayout>

  </v-app>

</template>
<script>
import { useLoginStore } from '@/stores/login'
import { useSnackbar } from '@/stores/snackbar'
export default {
  setup(){
    const store = useLoginStore();
    const snackbar = useSnackbar();
    return{
      store,snackbar
    }
  },
  computed: {
    cssProps() {
      var themeColors={}
      Object.keys(this.$vuetify.theme.themes.light.colors).forEach((color) => {
        themeColors[`--v-${color}`]=this.$vuetify.theme.themes.light.colors[color];
      })
      return themeColors
    }
  },
  data(){
    return{

    }
  }


}
</script>
<style>
  *,*::before,*::after{
    box-sizing: border-box;
  }
  .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

  
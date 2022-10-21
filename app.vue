<template>
  <v-app :style="cssProps">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </v-app>

</template>
<script>
export default {
  computed: {
    cssProps() {
      var themeColors={}
      Object.keys(this.$vuetify.theme.themes.light.colors).forEach((color) => {
        themeColors[`--v-${color}`]=this.$vuetify.theme.themes.light.colors[color];
      })
      return themeColors
    }
  }


}
</script>
<style>
  *,*::before,*::after{
    box-sizing: border-box;
  }

</style>

  
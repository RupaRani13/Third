<template>

  <div id="recentblog">
    <div v-for="item in recentblog.data" :key='item.id'>
 <v-row>
        <v-col class="v-col-lg-3">
            {{item.title}}
        </v-col>
        <v-col class="v-col-lg-9">
            <v-img :src="item.featureImg" aspect-ratio="1" max-width="70" cover ></v-img>
        </v-col>
    </v-row>
    </div>  
  </div>
</template>

<script>
export default {
  async setup() {
    const recentblog = await useRecentBlog();
    return {
      recentblog,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
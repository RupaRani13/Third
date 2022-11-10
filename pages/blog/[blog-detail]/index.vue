<template>
  <div id="blog-details">
    <v-container>
      <v-row>
        <v-col class="v-col-9 blogDetails-sec">
          <v-card-title>{{ blogs.title }}</v-card-title>
          <div>
            <v-img
              v-if="blogs.featureImg"
              :src="blogs.featureImg"
              lazy-src="/gallery_loading_image.jpeg"
              aspect-ratio="1.9"
              cover
              class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="success">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
          <div class="blog-detailsDate">
            <span>
              <v-icon>mdi-calendar-range</v-icon>{{ blogs.publishedAt }}</span
            >
            <span>
              <v-icon>mdi-account</v-icon>{{ blogs.createdBy.firstName
              }}{{ blogs.createdBy.lastName }}</span
            >
          </div>
          <v-card-text
            v-if="blogs.description"
            v-html="blogs.description"
            class="content-demo"
          ></v-card-text>
          <v-icon>mdi-facebook</v-icon>
          <v-icon>mdi-twitter</v-icon>
          <v-icon>mdi-whatsapp</v-icon>
          <v-icon>mdi-share-variant-outline</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  async setup() {
    const route = useRoute();
    const blogs = await useBlogDetails(route.params.blogdetail);
    return {
      route,
      blogs,
    };
  },
};
</script>

<style>
#blog-details .blogDetails-sec {
  box-shadow: 3px 3px 3px 1px;
}
#blog-details .blog-detailsDate {
  padding-top: 20px;
}
#blog-details .blog-detailsDate span {
  display: inline-flex;
  padding-right: 10px;
}
</style>
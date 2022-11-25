<template>

  <div id="blog-details">
    <HeadMeta :title="title" :metaTags="metaTags"></HeadMeta>  
    <v-container>
      <v-row>
        <v-col class="blogDetails-sec">
          <v-card-title>{{ blogs.title }}</v-card-title>
        
          <div>
            <v-img v-if="blogs.featureImg" :src="blogs.featureImg" lazy-src="/gallery_loading_image.jpeg"
              aspect-ratio="1.9" cover class="bg-grey-lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="success">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-img v-else src="/default-course-img.jpeg" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover
              class="bg-grey-lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align-item="center" justify="center">
                  <v-progress-circular indeterminate color="success">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
          <div class="blog-detailsDate">
            <span>
              <v-icon>mdi-calendar-range</v-icon>{{ blogs.publishedAt }}
            </span>
            <span>
              <v-icon>mdi-account</v-icon>{{ blogs.createdBy.firstName
              }}{{ blogs.createdBy.lastName }}
            </span>
          </div>
          <v-card-text v-if="blogs.description" v-html="blogs.description" class="content-demo"></v-card-text>

          <a v-if="url" :href="'https://www.facebook.com/sharer.php?u=' + 'https://nuxt1.institute.org.in'"
            target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </a>
          <a v-if="url" :href="'http://twitter.com/intent/tweet/?' + url" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </a>
          <a v-if="url" :href="'https://api.whatsapp.com/send?text=' + url" target="_blank">
            <v-icon>mdi-whatsapp</v-icon>
          </a>
          <v-icon>mdi-share-variant-outline</v-icon>
      
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  async setup() {
    function getDesc(desc,value) {
        var desci = desc.replace(/<\/?[^>]+(>|$)/g, "");
        return desci.length > value ? desci.substring(0, value) + '...' : desci;
    };
    const route = useRoute();
    const blogs = await useBlogDetails(route.params.blogdetail);
    const metaTags = ref(null);
    metaTags.value = {}
    if(blogs&&blogs.metaTags){
      if(blogs.metaTags.ogTitle){
        metaTags.value.ogTitle = blogs.metaTags.ogTitle
      }else{
        metaTags.value.ogTitle = blogs.title
      }
      if(blogs.metaTags.ogDescription){
        metaTags.value.ogDescription = blogs.metaTags.ogDescription
      }else{
        metaTags.value.ogDescription = getDesc(blogs.description, 200);
      }
      if(blogs.metaTags.ogImage){
        metaTags.value.ogImage = blogs.metaTags.ogImage
      }else{
        metaTags.value.ogImage = blogs.featureImg
      }
      if(blogs.metaTags.keywords){
        metaTags.value.keywords = blogs.metaTags.keywords
      }else if(blogs.tags.length){
        metaTags.value.keywords = blogs.tags.toString();
      }else{
        metaTags.value.keywords = ''
      }
      console.log(metaTags)
    }
    const title = ref(null);
    if(blogs&&blogs.title){
      title.value = blogs.title
    }
    const url = ref(null);
    if (process.client) {
      url.value = window.location.href;
    }
    return {
      route,
      blogs,
      url,
      metaTags,
      title
    };
  },
  data (){
    return{
      metaTags : {
            type : Object

        }
    }
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

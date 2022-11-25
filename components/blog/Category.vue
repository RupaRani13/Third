<template>
  <div id="blogcatgory">
    <div v-for="item2 in blogCategory" key="item2.id">
      {{ item2.id }}
    </div>
    <HeadMeta :title="title" :metaTags="metaTags"></HeadMeta>
    <div class="blog-name">
      <p>BLOG Category</p>
      <div :class="[activeIndex == null ? 'active' : '']">
        <NuxtLink to="/blog">
          <div class="blog-innerdetails">
            <span>
              <v-img :src="blogCategory[0].icon" aspect-ratio="2" width="70"></v-img>
            </span>
            <span>All Blogs</span>
          </div>
        </NuxtLink>
      </div>
      <div v-for="(item, index) in blogCategory" :key="item.id" :class="[activeIndex == index ? 'active' : '']">
        <NuxtLink :to="`/blog-category/${item.id}`">
          <div class="blog-innerdetails">
            <span>
              <v-img :src="item.icon" aspect-ratio="2" width="70"></v-img>
            </span>
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  async setup(props) {
    const blogCategory = await useBlogCategory();
    const metaTags = ref(null);
    metaTags.value = {}
    // if(blogCategory&&blogCategory.metaTags){
    //   if(blogCategory.metaTags.ogTitle){
    //     metaTags.value.ogTitle = blogCategory.metaTags.ogTitle
    //   }else{
    //     metaTags.value.ogTitle = blogCategory.title
    //   }
    //   if(blogCategory.metaTags.ogDescription){
    //     metaTags.value.ogDescription = blogCategory.metaTags.ogDescription
    //   }
    //   if(blogCategory.metaTags.ogImage){
    //     metaTags.value.ogImage = blogCategory.metaTags.ogImage
    //   }else{
    //     metaTags.value.ogImage = blogCategory.featureImg
    //   }
    //   if(blogCategory.metaTags.keywords){
    //     metaTags.value.keywords = blogCategory.metaTags.keywords
    //   }else if(blogs.tags.length){
    //     metaTags.value.keywords = blogCategory.tags.toString();
    //   }else{
    //     metaTags.value.keywords = ''
    //   }
    //   console.log(metaTags)
    // }


    // if(props.id==blogCategory.id){
    //   console.log(this.id)
    // }

    for (var i = 0; i < blogCategory.length; i++) {
      const allid = blogCategory[i].id 
      console.log(allid);
    }
    if(allid == props.id) {
      if(blogCategory&&blogCategory.metaTags){
        if(blogCategory.metaTags.ogTitle){
        metaTags.value.ogTitle = blogCategory.metaTags.ogTitle
      }else{
        metaTags.value.ogTitle = blogCategory.title
      }
      if(blogCategory.metaTags.ogDescription){
        metaTags.value.ogDescription = blogCategory.metaTags.ogDescription
      }else{
        metaTags.value.ogDescription = getDesc(blogCategory.description, 200);
      }
      if(blogCategory.metaTags.ogImage){
        metaTags.value.ogImage = blogCategory.metaTags.ogImage
      }else{
        metaTags.value.ogImage = blogCategory.featureImg
      }
      }
    }

    const title = ref(null);
    if (blogCategory && blogCategory.title) {
      title.value = blogCategory.title
    }
    return {
      blogCategory, metaTags, title
    };

  },
  props: {
    id: {
      default: null,
      required: false,
    },
  },
  data() {
    return {
      activeIndex: null,
      metaTags: {
        type: Object

      }

    };
  },

  methods: {},
  created() {
    if (this.$props.id) {
      this.blogCategory.some((item, index) => {
        if (item.id == this.$props.id) {
          this.activeIndex = index;
          return;
        }
      });
    }
    // getActiveBlogCategory(){

    // }
  },
};
</script>

<style>
#blogcatgory .blog-name {
  background: var(--v-on-surface-variant);
  box-shadow: 1px 1px 5px black;
}

#blogcatgory .blog-name p {
  background: var(--v-success);
  padding: 10px;
  text-align: center;
}

#blogcatgory .blog-innerdetails {
  display: flex;
  margin: 10px 10px;
  background: var(--v-success);
  align-items: center;
}

#blogcatgory .blog-details {
  box-shadow: 1px 2px 5px 1px var(--v-surface-variant);
  padding: 10px;
  margin: 10px;
}

#blogcatgory .blog-date {
  display: flex;
}

#blogcatgory .dateformate {
  padding: 0px 10px;
}

#blogcatgory .blog-name a {
  text-decoration: none;
}

#blogcatgory .active .blog-innerdetails {
  background: grey;
  z-index: 99;
}

#blogcatgory .active .blog-innerdetails a {
  color: yellow;
}
</style>
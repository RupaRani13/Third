<template>
  <div id="blogcatgory">

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
    // if(props.id==blogCategory.id){
    //   console.log(this.id)
    // }

    for (let i = 0; i < blogCategory.length; i++) {
      if (props.id == blogCategory[i].id) {
        if (blogCategory[i].metaTags.ogTitle) {
          metaTags.value.ogTitle = blogCategory[i].metaTags.ogTitle;
        } else {
          metaTags.value.ogTitle = blogCategory[i].title;
        }
        if (blogCategory[i].metaTags.ogDescription) {
          metaTags.value.ogDescription = blogCategory[i].metaTags.ogDescription;
        } else {
          metaTags.value.ogDescription = blogCategory[i].description;
        }
        if (blogCategory[i].metaTags.ogImage) {
          metaTags.value.ogImage = blogCategory[i].metaTags.ogImage;
        } else {
          metaTags.value.ogImage = blogCategory[i].featureImg
        }
        metaTags.value.keywords = blogCategory[i].metaTags.keywords;
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
      myindex: '',
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
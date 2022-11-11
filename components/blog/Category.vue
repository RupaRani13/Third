<template>
  <div id="blogcatgory">
    <div class="blog-name">
      <p>BLOG Category</p>
      <div :class="[activeIndex == null ? 'active' : '']">
        <NuxtLink to="/blog">
          <div class="blog-innerdetails">
            <span>
              <v-img
                :src="blogCategory[0].icon"
                aspect-ratio="2"
                width="70"
              ></v-img>
            </span>
            <span>All Blogs</span>
          </div>
        </NuxtLink>
      </div>
      <div
        v-for="(item, index) in blogCategory"
        :key="item.id"
        :class="[activeIndex == index ? 'active' : '']"
      >
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
  async setup() {
    const blogCategory = await useBlogCategory();
    return {
      blogCategory
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
   
    };
  },

  methods: {},
  created() {
    if (this.$props.id) {
      console.log(this.$props.id);
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
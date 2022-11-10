<template>
  <div id="bloglist">
    <v-row>
      <template v-for="item in filteredBlog" :key="item">
        <ui-coursecard-design03
          :courseDetailObj="item"
        ></ui-coursecard-design03>
      </template>
    </v-row>
  </div>
</template>

<script>
export default {
  async setup(props) {
    const blogCategory = await useBlogCategory();
    const blogs = await useBlog(props.id);
    console.log(blogCategory);
    console.log(blogs);
    return {
      blogCategory,
      blogs,
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
      filteredBlog: [],
    };
  },

  methods: {
    getblog(myArr) {
      if (myArr && myArr.length) {
        let CourseArr = [];
        myArr.forEach((item) => {
          let myObj = {
            title: {
              show: true,
              value: null,
            },
            thumb: {
              show: true,
              value: null,
            },
            description: {
              show: true,
              title: "Desci",
              value: null,
            },
            startDate: {
              show: true,
              title: "Start Date:",
              value: null,
            },
            pathUrl: {
              show: true,
              title: "See Details",
              value: null,
            },
            eduStandard: {
              show: true,
              title: "Exam Category",
              value: null,
            },
            buyBtn: {
              show: true,
            },
          };
          if (item.title) {
            myObj.title["value"] = item.title;
          }
          if (item.featureImg) {
            myObj.thumb["value"] = item.featureImg;
          }
          if (item.description) {
            myObj.description["value"] = item.description;
          }
          if (item.publishedAt) {
            myObj.startDate["value"] = item.publishedAt;
          }
          if (
            item.postCategories &&
            item.postCategories[0] &&
            item.postCategories[0].title
          ) {
            myObj.eduStandard["value"] = item.postCategories[0].title;
          }
          if (item.uri) {
            myObj.pathUrl["value"] = item.uri;
            myObj.pathUrl["value"] = `/blog/${item.id}`;
          }
          CourseArr.push(myObj);
        });

        return CourseArr;
      }
    },
  },
  created() {
    this.filteredBlog = this.getblog(this.blogs);
    console.log(this.filteredBlog);
  },
};
</script>

<style>
#bloglist .blog-name {
  background: var(--v-on-surface-variant);
  box-shadow: 1px 1px 5px black;
}

#bloglist .blog-name p {
  background: var(--v-success);
  padding: 10px;
  text-align: center;
}

#bloglist .blog-innerdetails {
  display: flex;
  margin: 10px 10px;
  background: var(--v-success);
}

#bloglist .blog-details {
  box-shadow: 1px 2px 5px 1px var(--v-surface-variant);
  padding: 10px;
  margin: 10px;
}

#bloglist .blog-date {
  display: flex;
}

#bloglist .dateformate {
  padding: 0px 10px;
}

#bloglist .blog-name a {
  text-decoration: none;
}
.active {
  background: yellow;
}
</style>
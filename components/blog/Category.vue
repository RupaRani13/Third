<template>
    <div id="blogcatgory">
        
                    <div class="blog-name">
                        <p>BLOG Category</p>
                        <div>
                            <NuxtLink to="/blog">
                                <div class="blog-innerdetails">
                                    <span>
                                        <v-img :src="blogCategory[1].icon" aspect-ratio="2" width="70"></v-img>
                                    </span>
                                    <span>All Blogs</span>
                                </div>
                            </NuxtLink>
                        </div>
                        <div v-for="item in blogCategory" :key="item.id"  :class="[blogCategory ? 'active' : '']">
                            <NuxtLink :to="`/blog-category/${item.id}`" >
                                <div class="blog-innerdetails">
                                    <span>
                                        <v-img :src="item.icon" aspect-ratio="2" width="70"></v-img>
                                    </span>
                                    <span >{{ item.title }}</span>
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
        // const blogs = await useBlog(props.id);
        console.log(blogCategory)
        // console.log(blogs)
        return {
            blogCategory
        }
    },
    props: {
        id: {
            default: null,
            required: false
        }
    },
    data() {
        return {
            filteredBlog: [],
         
        }
    },

    methods: {
        getblog(myArr) {
            if (myArr && myArr.length) {
                let CourseArr = [];
                myArr.forEach(item => {
                    let myObj = {
                        title: {
                            show: true,
                            value: null
                        },
                        thumb: {
                            show: true,
                            value: null
                        },
                        description: {
                            show: true,
                            title: 'Desci',
                            value: null
                        },
                        startDate: {
                            show: true,
                            title: 'Start Date:',
                            value: null
                        },
                        pathUrl: {
                            show: true,
                            title: 'See Details',
                            value: null,
                        },
                        eduStandard: {
                            show: true,
                            title: 'Exam Category',
                            value: null
                        },
                        buyBtn: {
                            show: true,
                        },
                    }
                    if (item.title) {
                        myObj.title['value'] = item.title;
                    }
                    if (item.featureImg) {
                        myObj.thumb['value'] = item.featureImg;
                    }
                    if (item.description) {
                        myObj.description['value'] = item.description;
                    }
                    if (item.publishedAt) {
                        myObj.startDate['value'] = item.publishedAt
                    }
                    if (item.postCategories && item.postCategories[0] && item.postCategories[0].title) {
                        myObj.eduStandard['value'] = item.postCategories[0].title;
                    }
                    if (item.uri) {
                        myObj.pathUrl['value'] = item.uri;
                        myObj.pathUrl['value'] = `/blog/${item.id}`;
                    }
                    CourseArr.push(myObj)
                })

                return CourseArr;

            }

        },
    
    },
    created() {
        this.filteredBlog = this.getblog(this.blogs);
        console.log(this.filteredBlog)
    }
}
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
.active{
    background: yellow;
}
</style>
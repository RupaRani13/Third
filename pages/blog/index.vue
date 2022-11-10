<template>
  <div>
    {{page}}{{limit}}
    {{blogList}}
    <v-container>
      <v-row>
        <v-col class="v-col-md-3">
          <BlogCategory></BlogCategory>
        </v-col>
        <v-col class="v-col-md-9">
          <BlogList></BlogList>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
    export default{
        setup() {
            const blogList = useBlogList()
            const route = useRoute();
            const page = route.query.page;
            const limit = route.query.limit;
                
            return{route,page,limit, blogList}
         
        },
    }
</script>


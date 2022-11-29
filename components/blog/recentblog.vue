<template>

  <div id="recentblog">
    <div class="recentmaindiv" v-for="item in recentblog.data" :key='item.id'>
    <v-row>
        <v-col class="v-col-lg-4">
            <span>{{item.title}}</span>
            {{ item.publishedAt }}
            
        </v-col>
        <v-col class="v-col-lg-8">
            <div class="recentblogimg">
                <v-img :src="item.featureImg" aspect-ratio="1" max-width="100" cover ></v-img>
            </div>
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

<style >
#recentblog .recentmaindiv{
    box-shadow: 3px 2px 9px -1px;
    margin-top: 20px;
    padding: 10px;
}
#recentblog .recentmaindiv .recentblogimg{
    display: flex;
    justify-content: flex-end;
}

</style>
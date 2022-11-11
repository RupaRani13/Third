<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="v-col-md-3">
          <BlogCategory :id="$route.params.category"></BlogCategory>
        </v-col>
        <v-col class="v-col-md-9">
          <BlogList :id="$route.params.category"></BlogList>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  setup() {

  },
  data(){
    return{
    }
  }
};
</script>

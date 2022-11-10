<template>
  <div>
    {{$route.params.category}}
    {{"hello"}}
    <v-container>
      <v-row>
        <v-col class="v-col-md-3">
          <BlogCategory :id="$route.params.category"></BlogCategory>
        </v-col>
        <v-col class="v-col-md-9">
            {{$route.params.category}}
          <!-- <BlogList :id="$route.params.category"></BlogList> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
    <!-- <div>
       <BlogCategory :id="$route.params.category"></BlogCategory>
       <blogL
   </div> -->
</template>
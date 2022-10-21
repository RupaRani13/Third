<template>
    <div id="contentDesign01">
        <v-container>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="item in contentListdata" :key="item">
      <v-expansion-panel-title v-if="item.title" >
          {{item.title}}
        </v-expansion-panel-title >
        <v-expansion-panel-text v-if="item.desci">
            <p v-html="item.desci" ></p>
        </v-expansion-panel-text>
   
    </v-expansion-panel>
    </v-expansion-panels>
</v-container>
    </div>
</template>

<script>
    export default {
        async setup(props) {
        const contentListdata = await useContentListItem(props.id);
        return {contentListdata};
        },
    props: {
        id: {
            type: String,
            default: null,
            required: false
        }
    },
    created(){
       console.log(this.contentListdata)
    },
}
</script>

<style>
#contentDesign01 .text-subtitle-2{
    text-align: center;
    font-size: 32px !important;
    margin-bottom: 31px !important;
}
</style>
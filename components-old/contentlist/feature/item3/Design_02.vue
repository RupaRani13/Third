
<template>
    <div id="Item3FeatureDesign02">
        <v-container>
            <v-card>
                <v-row>
                    <v-col class="v-col-lg-6 v-col-12">
                        <template v-for="(item,index) in contentListdata" :key="index">
                         

                                <div class="cardcontent" v-if="index<3" @click="functionhello()">
                                    <v-img aspect-ratio="1" :src="item.icon"></v-img>
                                    <div class="cardtext">
                                        <v-card-title>{{item.title}}</v-card-title>
                                        <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                        </v-card-subtitle>
                                    </div>
                                </div>

                            
                        </template>
                    </v-col>
                    <v-col class="v-col-lg-6  v-col-12">
                        <v-img aspect-ratio="0.8" :src="contentListdata[0].thumb" lazy-src="/gallery_loading_image.jpeg"
                            :alt="contentListdata[0].title" cover class="img-sec"  width="100%">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align ="center" justify="center">
                                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
// import { addClass } from 'dom7';

export default {
    async setup(props) {
        const contentListdata = await useContentListItem(props.id);
        return { contentListdata };
    },
    props: {
        id: {
            type: String,
            default: null,
            required: false
        }
    },
    data(){
        return{
    
        }
    },
    methods:{
    
        },
    
    created() {
        
    },
}
</script>

<style>
#Item3FeatureDesign02 .v-card .v-card {
    border: 1px solid #c0c0c0;
    border-radius: 0px;
    margin: 10px;
    padding: 30px;
}
#Item3FeatureDesign02 .cardcontent{
    display: flex;
    overflow: hidden;
    width: 100%;
}
#Item3FeatureDesign02 .cardcontent .v-img{
    width: 100px;
    background:var(--v-success) ;
}
#Item3FeatureDesign02 .img-sec{
    height: 300px;   
}
#Item3FeatureDesign02 .v-card-subtitle{
    white-space: unset;
    padding-bottom: 10px;
    overflow: hidden;
    overflow-y: auto;
    height: 58px;
}
#Item3FeatureDesign02 .v-card-title{
    white-space: unset;
}
@media only screen and (max-width:475px) {
    #Item3FeatureDesign02  .v-card-title{
        font-size: 16px;
    }
}
/* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--v-success);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--v-success);
}
</style>
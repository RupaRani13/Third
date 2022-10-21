
<template>
    <div id="Item6FeatureDesign02">
        <v-container>
            <v-card flat>
                <v-row>
                    <v-col class="v-col-lg-4 v-col-md-4 v-col-sm-12 v-col-12">
                        <v-img  :src="contentListdata[0].thumb" lazy-src="/gallery_loading_image.jpeg"
                            :alt="contentListdata[0].title" class="img-sec" width="100%" height="100%">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                    <v-col class="v-col-lg-8 v-col-md-8 v-col-sm-12 v-col-12 mb-8">
                        <v-row>
                            <template v-for="(item,index) in contentListdata" :key="index" >
                            <v-col class="v-col-lg-6 v-col-md-6 v-col-sm-6 v-col-12" >
                               
                                <div class="cardcontent" v-if="index<6" >
                                    <v-img aspect-ratio="1" :src="item.icon" width="20%"></v-img>
                                    <div class="cardtext">
                                        <v-card-title>{{item.title}}</v-card-title>
                                        <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                        </v-card-subtitle>
                                    </div>
                                </div>   
                  
                            </v-col>
                        </template>
                        </v-row>
                       
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
    data() {
        return {

        }
    },
    methods: {

    },

    created() {

    },
}
</script>

<style>
#Item6FeatureDesign02 .v-card-subtitle{
    white-space:unset;
   
}
#Item6FeatureDesign02 .v-img{
    margin: auto;
}
#Item6FeatureDesign02 .v-card-title{
white-space: unset;
text-align: center;
display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 73px;

}
#Item6FeatureDesign02 .v-card-subtitle{
    white-space: unset;
text-align: center;
white-space: unset;
    text-align: center;
    overflow: hidden;
    overflow-y: auto;
    height: 122px;
    margin: 20px 0px;
}
#Item6FeatureDesign02 .cardcontent{
    box-shadow: 0px 0px 2px #000;
    margin: 20px;
    /* padding: 10px; */
    max-height: 300px;
    height: 100%;
   
}
#Item6FeatureDesign02 .v-img__img--contain{
    object-fit: cover;
}
@media only screen and (max-width:1024px) {
    #Item6FeatureDesign02 .v-card-subtitle{
        overflow: hidden;
    overflow-y: scroll;
    height: 100px;
    }

}
@media only screen and (max-width:961px) {
    #Item6FeatureDesign02 .v-img__img--contain{
    object-fit: contain;
}
}
/* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--v-background);
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
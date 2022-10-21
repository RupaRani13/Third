
<template>
    <div id="Item3FeatureDesign01">
        <v-container>
            <v-card flat>
                <v-row>
                    <v-col class="v-col-lg-6 v-col-md-7 v-col-sm-7 v-col-12">
                        <template v-for="(item,index) in contentListdata" :key="index">
                            <v-card v-if="index<3" @click="functionhello(index)" :class="[activeIndex==index? 'active' : '']">
                                <div class="cardcontent">
                                    <v-img aspect-ratio="1" :src="item.icon" width="64px"></v-img>
                                    <div class="cardtext">
                                        <v-card-title>{{item.title}}</v-card-title>
                                        <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                        </v-card-subtitle>
                                    </div>
                                </div>
                            </v-card>
                        </template>
                    </v-col>
                    <v-col class="v-col-lg-6 v-col-md-5 v-col-sm-5 v-col-12" >
                        <v-img aspect-ratio="0.8" :src="thumb" lazy-src="/gallery_loading_image.jpeg"
                            :alt="title" cover class="img-sec bg-grey-lighten-2"  width="70%">
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
          timer: 20,
          activeIndex: 0,
          thumb : null,
          title : null,
        }
    },
    methods:{
             functionhello(index){
                this.activeIndex=index;
                this.thumb = this.contentListdata[index].thumb;
                this.title = this.contentListdata[index].title;
            }
        },
    created() {
        if(this.contentListdata&&this.contentListdata.length){
            this.thumb = this.contentListdata[0].thumb;
            this.title = this.contentListdata[0].title;
        }
       
    },
}
</script>

<style>
#Item3FeatureDesign01 .v-card .v-card {
    border: 1px solid #c0c0c0;
    border-radius: 0px;
    margin: 10px;
    padding: 30px 0px;
}
#Item3FeatureDesign01 .cardcontent{
    display: flex;
    width: 100%;
}
#Item3FeatureDesign01 .cardtext{
    width: calc( 100% - 100px );
    flex-wrap: wrap;
}
#Item3FeatureDesign01 .img-sec{
    width: 70%;
    height: 70%;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
}
#Item3FeatureDesign01 .v-card-subtitle{
    
    white-space: unset;
    height: 83px;
    overflow: hidden;
    overflow-y: auto;

}
#Item3FeatureDesign01 .v-card-title{
    white-space: unset;
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
@media only screen and (max-width:768px) {
    #Item3FeatureDesign01 .cardcontent{
        display: block;
      
    }
    #Item3FeatureDesign01 .cardtext{
        width: 100%;
    }
    #Item3FeatureDesign01 .img-sec{
        border-radius: 0px;
    }
}
</style>
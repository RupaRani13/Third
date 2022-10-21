
<template>
    <div id="Item3FeatureDesign03">
        <v-container>
            <v-card flat>
                <v-row>
                    <template v-for="(item,index) in contentListdata" :key="index">
                    <v-col class="v-col-lg-4 v-col-md-4 v-sm-6 v-col-12"> 
                            <v-card class="item-card">
                                <div class="cardcontent" v-if="index<3" @click="functionhello()">
                                    <div class="cardtext">
                                    <v-card-title>{{item.title}}</v-card-title>
                                    
                                        <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                        </v-card-subtitle>
                                    </div>  
                                        <v-img  :src="item.icon"></v-img>
                                </div>
                            </v-card>
                        </v-col>
                </template>
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
    
        }
    },
    methods:{
    
        },
    
    created() {
        
    },
}
</script>

<style>
   #Item3FeatureDesign03 .cardtext{
     display: block;
    justify-content: center;
    align-items: center;
    background: var(--v-success);
    padding: 20px;
    }
    #Item3FeatureDesign03 .cardcontent .v-img{
     width: 100px;
     height: 100px;
     margin:auto;
    }
   #Item3FeatureDesign03 .v-card-subtitle{
        height: 77px;
        white-space: unset;
    }
    #Item3FeatureDesign03 .v-card-title{
        white-space: unset;
        height: 69px;
    }
    #Item3FeatureDesign03 .item-card{
     
    

    }
    /* #Item3FeatureDesign03 .img-sec{
        max-width: 46%;
    max-height: 46%;
    top: 74px;
    right: 0;
    transform: translate(50%, 10px);
    } */
   
    #Item3FeatureDesign03 .blank-circle{
        max-width: 24%;
    width: 100%;
    height: 100%;
    max-height: 49%;
    border-radius: 50%;
    background: var(--v-success);
    position: absolute;
    top: 0px;
    }
    #Item3FeatureDesign03 .img-sec2{
        max-width: 24%;
    width: 100%;
    height: 100%;
    max-height: 49%;
    border-radius: 50%;
    background: var(--v-success);
    position: absolute;
    top: 0px;
    transform: translate(29%,115%);
    }
@media only screen and (max-width:475px) {
    #Item3FeatureDesign03 .blank-circle{
        width: 60%;
    height: 20%;
    border-radius: 50%;
    bottom: 0;
    top: unset;
    background: red;
    max-width: 60%;
    }
    #Item3FeatureDesign03 .cardtext{
        display: block;
    }
    #Item3FeatureDesign03 .v-card-title, #Item3FeatureDesign03 .v-card-subtitle{
        min-width:0px;
    }
}
 

</style>
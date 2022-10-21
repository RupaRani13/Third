
<template>
    <div id="AllitemFeatureDesign02">
        <v-container>
            <v-card flat>
                <v-row class="ma-4">
                        <template v-for="(item,index) in contentListdata" :key="index">
                            <v-col class="v-col-lg-3 v-col-md-6 v-col-sm-6 v-col-12">
                            <v-card :class="[index%2==0 ? 'active' : '']">
                                <div class="cardcontent">
                                    <!-- <v-img aspect-ratio="1" :src="item.icon" width="64px"></v-img> -->
                                    <v-img aspect-ratio="1" :src="item.icon" lazy-src="/gallery_loading_image.jpeg" :alt="item.icon"
                                        cover width="60px">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="success">
                                                </v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                    <div class="cardtext">
                                        <v-card-title>{{item.title}}</v-card-title>
                                        <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                        </v-card-subtitle>
                                    </div>
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
    data() {
        return {
            timer: 20,
            activeIndex: 0,
            thumb: null,
            title: null,
        }
    },
    methods: {
        functionhello(index) {
            this.activeIndex = index;
            this.thumb = this.contentListdata[index].thumb;
            this.title = this.contentListdata[index].title;
        }
    },
    created() {
        if (this.contentListdata && this.contentListdata.length) {
            this.thumb = this.contentListdata[0].thumb;
            this.title = this.contentListdata[0].title;
        }

    },
}
</script>

<style>


#AllitemFeatureDesign02 .v-card-subtitle {
    white-space: unset;
    height: 200px;
    overflow: hidden;
    overflow-y: scroll;
}
#AllitemFeatureDesign02 .v-card-title{
    white-space: unset;
    height: 73px;
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
#AllitemFeatureDesign02 .active{
top: 50px;
margin: 23px 0px;
}
#AllitemFeatureDesign02 .v-img{
    margin: auto;
    transition: all .2s ease-in-out;
}
#AllitemFeatureDesign02 .v-img:hover{
    transform: scale(1.5);
}

@media only screen and (max-width:475px) {
    #AllitemFeatureDesign02 .active{
top: 0px;
  }
#AllitemFeatureDesign02 .v-card-subtitle{
   height: 150px;
  }
}
/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--v-success); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--v-success); 
}
</style>
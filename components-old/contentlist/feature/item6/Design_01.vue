<template>
    <div>
        <section id="item6design_01">
            <v-container>
            <v-row>
                <template v-for="(item,index) in contentListdata" :key="index">
                    <v-hover v-slot="{ isHovering, props }">
                    <v-col class="v-col-lg-4 v-col-md-4 v-col-sm-4 v-col-12 col-sec" v-bind="props">
                        <v-img aspect-ratio="1.8" :src="item.icon" :alt="title" width="20%">
                            <template v-slot:placeholder >
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                                </v-row>
                            </template> 
                        </v-img>
                        <div class="cardtext ">
                            <v-card-title>{{item.title}}</v-card-title>
                            <v-card-subtitle v-if="item.desci" v-html="item.desci">
                            </v-card-subtitle>
                        </div>
                        <v-expand-transition>
                                <v-img v-if="isHovering" :src="item.thumb"  aspect-ratio="1.8"
                                :alt="item.title" cover  min-height="100%" width="400"
                                    class="hover-img">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="success"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-expand-transition>
                    </v-col>
                    </v-hover>
                </template>
            </v-row>
        </v-container>
         

        </section>
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

        }
    },
    methods: {

    },
    created() {

    },
}
</script>
    

<style>
#item6design_01 .col-sec{
    border: 1px solid #fff;
    position: relative;
}
#item6design_01 .v-card-subtitle{
    white-space: unset; 
    color: #fff;
    height: 150px;
    overflow: hidden;
    overflow-y: auto;
}
#item6design_01  .v-card-title{
    white-space: unset; 
    color: #fff;
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
#item6design_01 .hover-img{
    width: 20%;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    transform: translate(0%, 0%);
}
#item6design_01 {
    background-image: url(http://brainbizz.wgl-demo.net/wp-content/uploads/2018/11/bg-services.jpg?id=358) !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

</style>
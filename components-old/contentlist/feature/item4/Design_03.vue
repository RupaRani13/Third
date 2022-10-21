
<template>
    <div id="Item4FeatureDesign03">
        <v-container>
            <v-card flat>
                <v-row >
                    <template v-for="(item,index) in contentListdata" :key="index">
                    <v-col class="v-col-lg-3 v-col-sm-6" style="padding:30px" >
                            <template v-if="index<4">
                                <v-img aspect-ratio="1" :src="item.icon" ></v-img>
                                    <v-card class="content-card" :class="[index%2==0 ? 'right' : 'left']">
                                        <v-card-title>{{item.title}}</v-card-title>
                                        <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                        </v-card-subtitle>
                                    </v-card>
                            </template>  
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

        }
    },
    methods: {

    },

    created() {

    },
}
</script>

<style>
 #Item4FeatureDesign03 {
margin-top: 40px;
}
#Item4FeatureDesign03 .content-card{
    overflow: visible;
    height: 200px;
    background: var(--v-background);
    /* transform: translateZ(-21px);*/
}
#Item4FeatureDesign03 .content-card:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: -114px;
    background: var(--v-on-surface-variant);
    z-index: -4;
    left: -20px;
}
#Item4FeatureDesign03 .v-card-title,#Item4FeatureDesign03  .v-card-subtitle{
    background: var(--v-background);
    white-space: unset;
    opacity: 1;
}
#Item4FeatureDesign03 .v-card-subtitle{
    height: 120px;
    overflow: hidden;
    overflow-y: scroll;
    
}

#Item4FeatureDesign03 .v-img{
    margin: auto;
    height: 90px;
    width: 230px;
    z-index: 1;
    /* top: 0px; */
    /* position: absolute; */
    /* background: red; */  
}
#Item4FeatureDesign03 .content-card.right::before{
    left: 16px;
}
#Item4FeatureDesign03 .content-card.left::before{
    left: -16px;
}
/* width */
::-webkit-scrollbar {
  width: 1px;
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
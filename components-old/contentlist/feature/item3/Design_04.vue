
<template>
    <div id="Item3FeatureDesign04">
        <v-container>
            <v-card flat>
                <v-row>
                    <template v-for="(item,index) in contentListdata" :key="index">
                        <v-col class="v-col-lg-4 v-col-12">
                            <v-card v-if="index<3">
                                <v-img aspect-ratio="1" :src="item.thumb" lazy-src="/gallery_loading_image.jpeg"
                                    :alt="item.title" cover class="img-sec bg-grey-lighten-2" width="100%">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="success"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <div class="cardcontent">
                                    <v-img aspect-ratio="1" :src="item.icon" width="64px"></v-img>
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
#Item3FeatureDesign04 .v-card-subtitle {
    white-space: unset;
    height: 100px;
    overflow: hidden;
    overflow-y: scroll;
    margin: 10px 0px;
}
#Item3FeatureDesign04 .v-card-title{
    white-space: unset;
    height: 71px;
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
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
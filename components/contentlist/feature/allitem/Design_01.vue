
<template>
    <div id="AllitemFeatureDesign01">
        <v-container>
            <v-card flat>
                <v-row>
                    <v-col class="v-col-lg-12 ">
                        <template v-for="(item,index) in contentListdata" :key="index">
                            <v-card :class="[index%2==0 ? 'active' : '']">
                                <div class="cardcontent">
                                    <!-- <v-img aspect-ratio="1" :src="item.icon" width="64px"></v-img> -->
                                    <v-img aspect-ratio="1" :src="item.icon" lazy-src="/gallery_loading_image.jpeg" :alt="item.icon"
                                        cover class="img-sec" width="60px">
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
                        </template>
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
#AllitemFeatureDesign01 .cardcontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

#AllitemFeatureDesign01 .v-card-subtitle {
    white-space: unset;
    white-space: unset;
    overflow: hidden;
    overflow-y: auto;
    height: 64px;
}

#AllitemFeatureDesign01 .v-card {

    border-radius: 0px;
    box-shadow: none;

}

#AllitemFeatureDesign01 .v-img__img.v-img__img--contain {
    background: var(--v-success);
    border-radius: 50%;
}

#AllitemFeatureDesign01 .active {
    background: var(--v-on-surface-variant);
}

#AllitemFeatureDesign01 .v-card-title {
    white-space: unset;
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

@media only screen and (max-width:475px) {
    #AllitemFeatureDesign01 .cardcontent {
        display: block;
    }

    #AllitemFeatureDesign01 .cardcontent .v-img {
        margin: auto;
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
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
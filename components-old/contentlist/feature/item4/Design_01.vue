
<template>
    <div id="Item4FeatureDesign01">
        <v-container>
            <v-card flat>
                <v-row class='ma-4 d-none d-sm-block'>
                    <template v-for="(item,index) in contentListdata" :key="index">
                        <v-col v-if="index%2==0" class="v-col-md-8 v-col-sm-12 justify-center">
                            <div class="cardcontent">
                                <div class="cardtext ">
                                    <v-card-title>{{item.title}}</v-card-title>
                                    <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                    </v-card-subtitle>
                                </div>
                                <!-- <v-img aspect-ratio="1" :src="item.icon"></v-img> -->
                                <v-img aspect-ratio="1" :src="item.icon" lazy-src="/gallery_loading_image.jpeg"
                                    :alt="title" cover class="img-sec">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="success"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </div>
                        </v-col>
                        <v-col v-else class="v-col-md-8 v-col-sm-12 justify-center offset-md-4 offset-sm-0">
                            <div class="cardcontent">
                                <!-- <v-img aspect-ratio="1" :src="item.icon"></v-img> -->
                                <v-img aspect-ratio="1" :src="item.icon" lazy-src="/gallery_loading_image.jpeg"
                                    :alt="title" cover class="img-sec">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="success"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <div class="cardtext">
                                    <v-card-title>{{item.title}}</v-card-title>
                                    <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                    </v-card-subtitle>
                                </div>
                            </div>
                        </v-col>
                    </template>

                </v-row>
                <!-- for small screen -->
                <v-row class='ma-4 d-block d-sm-none'>
                    <template v-for="(item,index) in contentListdata" :key="index">
                        <v-col class="v-col-12 justify-center">
                            <div class="cardcontent">
                                <v-img aspect-ratio="1" :src="item.icon" lazy-src="/gallery_loading_image.jpeg"
                                    :alt="title" cover>
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align-item="center" justify="center">
                                            <v-progress-circular indeterminate color="success"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <div class="cardtext ">
                                    <v-card-title>{{item.title}}</v-card-title>
                                    <v-card-subtitle v-if="item.desci" v-html="item.desci">
                                    </v-card-subtitle>
                                </div>
                                <!-- <v-img aspect-ratio="1" :src="item.icon"></v-img> -->
                            </div>
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
#Item4FeatureDesign01 .v-img {
    height: 100px;
    width: 100px;
    background: var(--v-success);
    font-size: 92px;
    align-self: flex-start;
}

#Item4FeatureDesign01 .v-card-subtitle {
    white-space: unset;
    padding: 0.5rem 1rem;
}

#Item4FeatureDesign01 .cardcontent {
    display: flex;
    justify-content: center;
    align-items: center;
}

#Item4FeatureDesign01 .cardcontent:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

#Item4FeatureDesign01 .v-card-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 633px;

    white-space: unset;
}

@media only screen and (max-width:475px) {
    #Item4FeatureDesign01 .cardcontent {
        display: block;
    }

    #Item4FeatureDesign01 .v-img {
        width: 100%;
        height: 100%;
    }
}
</style>

<template>
    <div id="Item4FeatureDesign02">
        <v-container>
            <v-card flat>
                <v-row>
                    <v-col class="v-col-lg-6 v-col-sm-6 v-col-12">
                        <v-img aspect-ratio="1.8" :src="contentListdata[0].thumb" lazy-src="/gallery_loading_image.jpeg"
                            :alt="contentListdata[0].title" class="img-sec" width="100%">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                    <v-col class="v-col-lg-6  v-col-sm-6 v-col-12">
                        <v-expansion-panels variant="accordion">
                            <v-expansion-panel v-for="(item,index) in contentListdata" :key="index">
                                <div v-if="index<4">
                                    <div class="accoridion-sec">
                                        <v-icon>mdi-circle-medium</v-icon>
                                        <v-expansion-panel-title v-if="item.title">
                                            {{item.title}}
                                        </v-expansion-panel-title>
                                    </div>
                                    <v-expansion-panel-text v-if="item.desci">
                                        <p v-html="item.desci"></p>
                                    </v-expansion-panel-text>
                                </div>
                            </v-expansion-panel>

                        </v-expansion-panels>
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
#Item4FeatureDesign02 .v-expansion-panel-title--active>.v-expansion-panel-title__overlay {
    opacity: 0;
}

#Item4FeatureDesign02 .v-expansion-panel-title__icon {
    display: none;
}

#Item4FeatureDesign02 .accoridion-sec {
    display: flex;
    justify-content: center;
    align-items: center;
}
#Item4FeatureDesign02 .v-expansion-panels{
    padding: 10px;
}
</style>
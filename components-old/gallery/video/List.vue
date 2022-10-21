<template>
    <div id="video-list">
        <v-card v-if="videoList.list.length" class="pt-3">
            <v-row>
                <v-col v-for="(item, index) in videoList.list" :key="index" class="d-flex child-flex v-col-12 v-col-sm-4 v-col-md-3">
                    <v-img @click="openDialog(item.url)" :src="item.thumb==''||item.thumb==null? `https://i.ytimg.com/vi/${item.url}/hqdefault.jpg` : item.thumb" lazy-src="/gallery_loading_image.jpeg"
                        aspect-ratio="1.5" cover class="bg-grey-lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="success"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
                <UiDialogDesign02 @closeDialog="dialog.open=false" v-model="dialog.open" :video='dialog.video'></UiDialogDesign02>
            </v-row>
        </v-card>
        <!-- <v-card v-if="videoList.list.length" class="pt-3">
            

            <v-row style="padding: 10px;">
                <v-col v-for="(item) in videoList.list" :key="item.id"
                    class="d-flex child-flex v-col-12 v-col-sm-4 v-col-md-3">

                    <div class="iframe-container">
                        <iframe class="responsive-iframe" :src="`https://www.youtube.com/embed/${item.url}`"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </v-col>
            </v-row>
        </v-card> -->

    </div>
</template>

<script>

export default {
    async setup(props) {
        const videoList = reactive({ list: null })
        videoList.list = await useGalleryList('video', props.id)
        return { videoList }
    },
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            dialog : {
                open : false,
                video : null,
            },

        }
    },
    methods: {
        openDialog(videoId){
            this.dialog.video = videoId;
            this.dialog.open = true;

        },
    },
    mounted(){
    },
    watch: {
        id: {
            async handler(value) {
                this.videoList.list = await useGalleryList('video', value);
            },
        }
    },
    created() {
    }
}
</script>

<style>

#video-list .v-img::after {
    content :'';
    background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 68 48' width='100%25'%3E%3Cpath d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='%23f00'%3E%3C/path%3E%3Cpath d='M 45,24 27,14 27,34' fill='%23fff'%3E%3C/path%3E%3C/svg%3E");
    position: absolute;
    z-index: 2;
    position: absolute;
    z-index: 2;
    width: 70px;
    height: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

    /* d-flex child-flex v-col-6 v-col-sm-4 v-col-md-3 mr-4 */

</style>
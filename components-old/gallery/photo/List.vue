<template>
    <div>
        <v-card v-if="photoList.list.length" class="pt-3">
            <v-row>
                <v-col v-for="(item, index) in photoList.list" :key="item.id"
                    class="d-flex child-flex v-col-6 v-col-sm-4 v-col-md-3">
                    <v-img @click="show(index)" :src="item.url" lazy-src="/gallery_loading_image.jpeg"
                        aspect-ratio="1.5" cover class="bg-grey-lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="success"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'

export default {
    async setup(props) {
        const photoList=reactive({ list: null })
        photoList.list=await useGalleryList('photo', props.id);
        return { photoList }
    },
    props: {
        id: {
            type: String,
            default: '63298c4409347355836e49d5',
            required: false
        },
        albumTitle: {
            type: String,
            default: null,
            required: false,
        }
    },
    methods: {
        show(index) {
            this.$viewerApi({
                options: {
                    toolbar: true,
                    url: 'url',
                    initialViewIndex: index,
                },
                images: this.photoList.list,
            })
        }
    },
    watch: {
        id: {
            async handler(value) {
                this.photoList.list=await useGalleryList('photo', value);
            }
        }
    }

}
</script>
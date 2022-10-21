<template>
    <v-dialog id="ui-dialog-d02" max-height="90vh" max-width="90vw" min-height="40vh" min-width="40vw" scrollable
        v-model="modelValue">
        <v-card v-if="video"  max-width="90vw" style="position:relative">
            <v-responsive aspect-ratio="1.5">
                <img src="/gallery_loading_image.jpeg" alt="">
            </v-responsive>
                <iframe width="700px" height="340px" class="responsive-iframe1" :src="`https://www.youtube.com/embed/${video}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-card>
        <v-card v-else max-width="90vw">
            <v-card-title v-if="heading" class="text-xs-h5 text-md-h5 text-lg-h4 bg-primary"><span>{{heading}}</span></v-card-title>
            <img v-if="image" style="max-height:80vh; max-width: 100%;" :src="image" :alt="heading">
            <v-card-text v-if="htmlContent" v-html="htmlContent"></v-card-text>
        </v-card>
        <v-btn @click="closeDialog" elevation="1" flat size="x-small" icon="mdi-close" position="absolute"
            class="bg-white text-primary"></v-btn>
    </v-dialog>
</template>

<script>
export default {
    props : {
        modelValue : {
            default : false,
        },
        image : {
            type : String,
            default : null
        },
        htmlContent : {
            type : String,
            default : null
        },
        heading : {
            type : String,
            default : null
        },
        video : {
            type: String,
            default : null,
        }
    },
    methods : {
        closeDialog(){
            this.$props.modelValue = false;
            this.$emit('closeDialog');
        }
    }

}
</script>

<style>
    #ui-dialog-d02 .v-card .v-card-title span{
        white-space: pre-wrap;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.2;
    }
    #ui-dialog-d02 .v-btn{
        right: 0;
        transform: translate(30%,-30%);
    }
    #ui-dialog-d02  .iframe-container{
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
}
#ui-dialog-d02  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

</style>
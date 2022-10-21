<template>
    <v-dialog id="ui-dialog-d01" max-height="90vh" max-width="90vw" min-height="40vh" min-width="40vw" scrollable
        v-model="modelValue">
        <v-card max-width="90vw">
            <v-card-title v-if="heading" class="text-xs-h5 text-md-h5 text-lg-h4 bg-primary"><span>{{heading}}</span></v-card-title>
            <img v-if="image" style="max-height:80vh; max-width: 100%;" :src="image" :alt="heading">
            <div v-if="video" class="iframe">
                <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${video}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <v-card-text v-if="htmlContent" v-html="htmlContent"></v-card-text>
        </v-card>
        <v-btn @click="modelValue=false" elevation="1" flat size="x-small" icon="mdi-close" position="absolute"
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
    }

}
</script>

<style>
    #ui-dialog-d01 .v-card .v-card-title span{
        white-space: pre-wrap;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.2;
    }
    #ui-dialog-d01 .v-btn{
        right: 0;
        transform: translate(30%,-30%);
    }

</style>
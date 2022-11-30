<template>
    <div v-if="details" id="course-detailsDesign01">
        <v-card class="webbercourse">
            
            <v-card-text v-if="details.content" v-html="details.content"></v-card-text>
        </v-card>
        <v-card>
            <DownloadListDesign07 v-if="details.downloadCategory" :id="details.downloadCategory"></DownloadListDesign07>
        </v-card>
        <ContentlistFeatureAllitemDesign02 v-if="details.list" :id="details.list">
        </ContentlistFeatureAllitemDesign02>

        <v-row>
            <template v-for="(item) in details.products" :key="item">
                <CourseProductlist :id="item"></CourseProductlist>
            </template>
        </v-row>
    </div>
</template>

<script>
export default {
    setup() {

    },
    data() {
        return {
        }
    },
    props: {
        details: {
            type: Object,
            required: true
        }
    },

}
</script>

<style >
#course-detailsDesign01{
    padding: 20px;
}
#courseDeatailsD01 #tabDesign02>.v-container>.v-card .v-card:first-of-type {
    border: unset;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}

#courseDeatailsD01 #tabDesign04>.v-container>.v-card .v-card:first-of-type {
    border: unset;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}

#courseDeatailsD01 #tabDesign05>.v-container>.v-card .v-card:first-of-type {
    border: unset;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}

#courseDeatailsD01 #tabDesign06 .v-card--variant-elevated {
    border: unset;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
}

#courseDeatailsD01 .v-container #course-detailsDesign01 .v-container {
    padding: 0px;
}
#courseDeatailsD01 .v-container #course-detailsDesign01 .webbercourse{
    margin: 30px 0px;
    /* background: red; */
}
#course-detailsDesign01 .v-card.v-theme--light .webbercourse{
    padding: 30px 0px;
    display: block;
    margin-bottom: 20px;
}
#course-detailsDesign01 #AllitemFeatureDesign02{
margin: 20px;
}
@media  only screen and (max-width:600px) {
#course-detailsDesign01 #AllitemFeatureDesign02 {
margin: 0px;
}
#course-detailsDesign01{
    padding: 0px;
}
}
</style>
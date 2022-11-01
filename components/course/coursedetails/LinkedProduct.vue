<template>
    <div id="course-detailsDesign01">
        {{}}
        <v-card>
            <v-card-text v-if="details.content" v-html="details.content"></v-card-text>

        </v-card>
        <v-card>
            <DownloadListDesign07 v-if="details.downloadCategory" :id="details.downloadCategory"></DownloadListDesign07>
        </v-card>
        <ContentlistFeatureAllitemDesign02 v-if="details.list" :id="details.list">
        </ContentlistFeatureAllitemDesign02>
        <v-row>
            <template v-for="(item) in details.products" :key="item">
                <CourseCoursedetailsProductdetails :id="item"></CourseCoursedetailsProductdetails>
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
</style>
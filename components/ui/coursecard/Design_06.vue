<template>
    <div id="courseListDesign06">
        <div class="full-card">
            <v-col class="v-col-3">
                <div class="myClass" style="position: relative">
                    <template v-if="courseDetailObj.thumb&&courseDetailObj.thumb.show">
                    <v-img v-if="courseDetailObj.thumb && courseDetailObj.thumb.show" :src="courseDetailObj.thumb.value"
                        lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1" cover class="bg-grey-lighten-2"
                        min-width="58">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align-item="center" justify="center">
                                <v-progress-circular indeterminate color="success">
                                </v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                    <v-img v-else src="/default-course-img.jpeg" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1"
                        cover min-width="189" class="bg-grey-lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align-item="center" justify="center">
                                <v-progress-circular indeterminate color="success">
                                </v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </template>
                </div>
            </v-col>
            <v-col class="v-col-9">
                <div class="coursecard-design">
                    <b v-if="
                        courseDetailObj.title &&
                        courseDetailObj.title.show &&
                        courseDetailObj.title.value
                    " class="edustandrad-name">
                        {{ courseDetailObj.title.value }}
                    </b>
                    <p v-if="
                        courseDetailObj.course &&
                        courseDetailObj.course.show &&
                        courseDetailObj.course.value
                    " class="">
                        {{ courseDetailObj.course.value }}
                    </p>
                    <template v-if="
                        courseDetailObj.startDate &&
                        courseDetailObj.startDate.show &&
                        courseDetailObj.startDate.value
                    ">
                        <p class="course-Date">
                            Start Date:{{ courseDetailObj.startDate.value }}
                        </p>
                    </template>
                    <template v-if="
                        courseDetailObj.endDate &&
                        courseDetailObj.endDate.show &&
                        courseDetailObj.endDate.value
                    ">
                        <p class="course-Date">
                            End Date:{{ courseDetailObj.endDate.value }}
                        </p>
                    </template>
                </div>
            </v-col>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        courseDetailObj: {
            default: {},
        },
    },
    methods: {
        discount(mrp, cost) {
            let x = typeof mrp; //only for check  this is string or not
            let y = typeof cost;
            let mymrp = mrp.trim();
            let newmrp = parseInt(mymrp);
            let mycost = cost.trim();
            let newcost = parseInt(mycost);
            if (newmrp > 0) {
                return ((Math.round(newmrp - newcost) / newmrp) * 100).toFixed(2);
            }
        },
    },
};
</script>
<style scoped>
#courseListDesign06 .full-card {
    display: flex;
    position: relative;
    box-shadow: -3px 4px 6px -1px var(--v-success);
}
#courseListDesign06 .edustandrad-name {
    font-size: 14px;
    /* padding: 3px 0px; */
}

#courseListDesign06 .course-Date {
    font-size: 11px;
    color: #896cb4;
}

#courseListDesign06 .course-name {
    height: 50px;
}

@media screen and (max-width: 600px) {
    #courseListDesign06 .full-card {
        display: block;
    }

    #courseListDesign06 .course-btn {
        position: relative;
        transform: translate(0%, 6%);
    }
}
</style>

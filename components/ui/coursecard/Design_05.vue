<template>
    <v-col class="v-col-lg-3" id="courseListDesign05">
        <v-card class="course-card" >
            <div>
                <p v-if="courseDetailObj.title && courseDetailObj.title.show && courseDetailObj.title.value"
                    class="edustandrad-name ">
                    {{ courseDetailObj.title.value }}
                </p>
                <div class="course-img">
                    <template v-if="courseDetailObj.thumb && courseDetailObj.thumb.show">
                        <v-img v-if="courseDetailObj.thumb.value" :src="courseDetailObj.thumb.value"
                            lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align-item="center" justify="center">
                                    <v-progress-circular indeterminate color="success">
                                    </v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-img v-else src="/default-course-img.jpeg" lazy-src="/gallery_loading_image.jpeg"
                            aspect-ratio="1.9" cover class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align-item="center" justify="center">
                                    <v-progress-circular indeterminate color="success">
                                    </v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </template>
                    <p v-if="courseDetailObj.eduStandard && courseDetailObj.eduStandard.show && courseDetailObj.eduStandard.value"
                        class="eduname">
                        {{ courseDetailObj.eduStandard.value }}
                    </p>
                </div>
                <div class="course-content">
                    <p v-if="courseDetailObj.course && courseDetailObj.course.show && courseDetailObj.course.value"
                        class="">
                        {{ courseDetailObj.course.value }}
                    </p>
                    <div class="pricing-section">
                        <v-card flat
                        v-if="courseDetailObj.cost&&courseDetailObj.cost.value&&courseDetailObj.cost.show || courseDetailObj.mrp && courseDetailObj.mrp.value && courseDetailObj.mrp.show"
                        class="content-fee">
                        <p>
                            <span
                                v-if="courseDetailObj.cost && courseDetailObj.cost.value && courseDetailObj.cost.show">
                                {{courseDetailObj.cost.title}}{{ courseDetailObj.cost.value }}</span>
                            <span
                                v-if="courseDetailObj.mrp && courseDetailObj.mrp.value && courseDetailObj.mrp.show"><strike>
                                    {{courseDetailObj.mrp.value}}</strike></span>
                            <span
                                v-if="courseDetailObj.discount.show && courseDetailObj.mrp && courseDetailObj.mrp.value && courseDetailObj.cost && courseDetailObj.cost.value"
                                class="discount-cost">{{ discount(courseDetailObj.mrp.value, courseDetailObj.cost.value)
                                }}%
                                OFF</span>
                        </p>
                    </v-card>
                    </div>
                 
                    <template
                        v-if="courseDetailObj.startDate && courseDetailObj.startDate.show && courseDetailObj.startDate.value">
                        <p class="course-Date">
                            {{courseDetailObj.startDate.title}}{{ courseDetailObj.startDate.value }}
                        </p>
                    </template>
                    <template
                        v-if="courseDetailObj.endDate && courseDetailObj.endDate.show && courseDetailObj.endDate.value">
                        <p class="course-Date">
                            {{courseDetailObj.endDate.title}}{{ courseDetailObj.endDate.value }}
                        </p>
                    </template>
                    <v-card-text v-html="courseDetailObj.description.value" class='content-demo'></v-card-text>
                    <div v-if="courseDetailObj.pathUrl" class="course-btn">
                        <v-btn v-if="courseDetailObj.buyBtn" size="small">Buy Now</v-btn>
                        <NuxtLink :to="`/course-detail/${courseDetailObj.pathUrl.value}`">
                            <v-btn size="small">{{ courseDetailObj.pathUrl.title }}</v-btn>
                        </NuxtLink>

                    </div>
                </div>
            </div>
        </v-card>
    </v-col>
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
            let y = typeof cost
            let mymrp = mrp.trim();
            let newmrp = parseInt(mymrp);
            let mycost = cost.trim();
            let newcost = parseInt(mycost)

            if (newmrp > 0) {
                return (Math.round(newmrp - newcost) / newmrp * 100).toFixed(2)
            }
        }
    }
}
</script>

<style>
#courseListDesign05 .course-card {
    box-shadow: 0 0 5px grey;
    border: 2px solid grey;
}

#courseListDesign05 .course-img {
    position: relative;
    margin: 0px 10px;
}

#courseListDesign05 .course-content {
    padding: 9px;
    height: auto;
    position: relative;
}

#courseListDesign05 .content-demo {
    overflow: auto;
    overflow-y: scroll;
    height: 76px;
    padding: 0px;
}

#courseListDesign05 .content-fee p {   
    font-size: 16px;
}
#courseListDesign05 .pricing-section{
    height: 20px;
   
}
#courseListDesign05 .course-Date {
    font-size: 11px;
    color: #896cb4;
    padding: 3px 0px;
}

#courseListDesign05 .content-fee p strike {
    padding: 0px 5px;
    font-size: 13px;
    color: red;
}

#courseListDesign05 .discount-cost {
    color: yellow;
}

#courseListDesign05 .course-name {
    height: 50px;
}

#courseListDesign05 .course-btn {
    display: flex;
    justify-content: space-between;
    padding: 9px 0px;
}
#courseListDesign05 .course-btn a{
    text-decoration: none;
}
#courseListDesign05 .edustandrad-name {
    font-size: 14px;
    padding: 3px 0px;
    text-align: center;
    font-weight: 700;
    height: 50px;
}

#courseListDesign05 .eduname {
    position: absolute;
    background: var(--v-success);
    top: 0px;

    border-radius: 0px 0px 20px 0px;
    height: 26px;
    padding: 2px 14px;
    box-shadow: 1px 4px 8px var(--v-surface-variant);
    font-size: 14px;
}
</style>
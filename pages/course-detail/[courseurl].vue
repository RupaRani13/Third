<template>
    <div id="courseDeatailsD01">
        <!-- {{$route.params.courseurl}} -->
        <v-container>
            <v-row>
                <v-col class="v-col-lg-5 v-col-sm-12">
                    <v-img :src="courseprogram.thumb" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover
                        class="bg-grey-lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="success">
                                </v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
                <v-col class="v-col-lg-7 v-col-sm-12">
                    <v-title>{{courseprogram.name}}</v-title>
                    <div style="margin-top: 10px;">
                        <p class="course-heading">Course Details</p>
                        <p class="course-name">
                            {{cardCondition.courseName.value}}<span>{{courseprogram.course.name}}</span>
                        </p>
                        <v-card-text v-html="courseprogram.desci" class='content-demo'></v-card-text>
                        <p class="course-date">
                            <span>Start Date: {{courseprogram.startDate}}</span>
                            <span>End Date: {{courseprogram.endDate}}</span>
                        </p>
                        <P class="course-price">
                            <span>{{cardCondition.mrp.value}}{{courseprogram.linkedProduct.mrp}}</span>
                            <span>{{cardCondition.cost.value}}{{courseprogram.linkedProduct.cost}}</span>
                        </P>
                        <div class="course-btn">
                            <v-btn>Buy Now</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    async setup() {
        const courseprogram = await useCourseProgram('6349186898bb9b52be001b24');
        return {
            courseprogram
        }
    },
    props: {
        cardCondition: {
            type: Object,
            default: {
                eduStandard: {
                    show: true,
                    value: 'Exam Category :',
                },
                cost: {
                    show: true,
                    value: 'Price :',
                },
                mrp: {
                    show: true,
                    value: 'MRP :',
                },
                discount: {
                    show: true,

                },
                courseName: {
                    show: false,
                    value: 'Course name :'
                },

            }
        }
    }

}
</script>

<style>
#courseDeatailsD01 v-title {
    text-align: center;
    display: block;
    font-size: 19px;
    font-weight: bold;
}

#courseDeatailsD01 .content-demo p {
    padding: 0px !important
}

#courseDeatailsD01 .content-demo {
    padding: 8px 0px !important;
}

#courseDeatailsD01 p.course-heading {
    border-bottom: 1px solid var(--v-success);
    text-align: center;
}

#courseDeatailsD01 .course-name {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;

}

#courseDeatailsD01 .course-price {
    background: var(--v-success);
    justify-content: space-between;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
}

#courseDeatailsD01 .course-date {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 10px 0px;
}

#courseDeatailsD01 .course-btn {
    text-align: end;
    margin: 20px 0px;
}
</style>
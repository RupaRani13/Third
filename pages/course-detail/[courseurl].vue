<template>
    <div id="courseDeatailsD01">

        <!-- {{$route.params.courseurl}} -->
        <v-container>
            <v-row v-if="courseDetails">
                <v-col class="v-col-lg-5 v-col-sm-12 v-col-12">
                        <v-img v-if="courseDetails.thumb" :src="courseDetails.thumb"
                            lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success">
                                    </v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>

                        <v-img v-else src="/default-course-img.jpeg"
                            lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success">
                                    </v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                </v-col>
                <v-col class="v-col-lg-7 v-col-sm-12 v-col-12">
                    <v-card-title>{{ courseDetails.name }}</v-card-title>
                    <div style="margin-top: 10px;">
                        <p class="course-heading">Course Details</p>
                        <p class="course-name">
                            <span>{{ courseDetails.course.name }}</span>
                        </p>
                        <v-card-text v-html="courseDetails.desci" class='content-demo'></v-card-text>
                       <p class="course-date"> 
                            <span v-if="courseDetails.startDate">{{courseurlvalue.startDate.title}}{{ courseDetails.startDate }}</span>
                            <span v-if="courseDetails.endDate">{{courseurlvalue.endDate.title}}{{ courseDetails.endDate }}</span>
                        </p>
                          
                        <p v-if="courseDetails.linkedProduct" class="course-price">
                            <span v-if="courseDetails.linkedProduct.mrp">
                                {{courseurlvalue.mrp.title}}{{courseDetails.linkedProduct.mrp}}</span>
                            <span v-if="courseDetails.linkedProduct.cost">
                                {{courseurlvalue.cost.title}}{{courseDetails.linkedProduct.cost}}</span>
                        </p>
                        <div class="course-btn">
                            <v-btn>Buy Now</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <!-- <UiTabsDesign07  :list="tabArr" @activeIndex="setActiveTab">
            <CourseCoursedetailsLinkedProduct :details="details"></CourseCoursedetailsLinkedProduct>
            </UiTabsDesign07> -->
        </v-container>
    </div>
</template>

<script>
export default {
    async setup() {
        const courseDetails = ref(null);
        const route = useRoute();
        let courseTabArray = [];
        if (route.params.courseurl != "materialdesignicons.min.css.map") {
           
            courseDetails.value = await useCourseProgram(route.params.courseurl);
            if (courseDetails.value.isLinkedVideoProduct) {
                const myObj = {}
                myObj.title = 'LinkedVideoProduct';
                myObj.details = courseDetails.value.linkedVideoProduct;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.haveMore) {
                const myObj = {}
                myObj.title = 'More';
                myObj.details = courseDetails.value.more;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.haveTandC) {
                const myObj = {}
                myObj.title = 'T&C';
                myObj.details = courseDetails.value.tAndC;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.haveTestimonial) {
                const myObj = {}
                myObj.title = 'Testimonial';
                myObj.details = courseDetails.value.testimonial;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.isCourseStructure) {
                const myObj = {}
                myObj.title = 'Course Structure';
                myObj.details = courseDetails.value.courseStructure;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.isFeeStructure) {
                const myObj = {}
                myObj.title = 'Fee Structure';
                myObj.details = courseDetails.value.feeStructure;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.isFreeResources) {
                const myObj = {}
                myObj.title = 'Fee Resources';
                myObj.details = courseDetails.value.freeResources;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.isLinkedOTSProduct) {
                const myObj = {}
                myObj.title = 'OTS Products';
                myObj.details = courseDetails.value.linkedOTSProduct;

                courseTabArray.push(myObj);
            }
            if (courseDetails.value.isLinkedMainsProduct) {
                const myObj = {}
                myObj.title = 'Mains Products';
                myObj.details = courseDetails.value.linkedMainsProduct;
                courseTabArray.push(myObj);
            }
            if (courseDetails.value.isLinkedBatchProduct) {
                const myObj = {}
                myObj.title = 'Batch Products';
                myObj.details = courseDetails.value.linkedBatchProduct;
                courseTabArray.push(myObj);
            }

        }
        return {
                courseDetails, courseTabArray
            }

    },
    data() {
        return {
            tabArr: [],
            details: null,
             courseurlvalue: {
                        title: {
                            show : true,
                            value : null
                        },
                        thumb: {
                            show : true,
                            value : null
                        },
                        eduStandard: {
                            show : true,
                            title : 'Exam Category',
                            value : null
                        },
                        course: {
                            show : false,
                            title : 'Exam:',
                            value : null
                        },
                        cost: {
                            show : true,
                            title : 'Price:',
                            value : null
                        },
                        mrp: {
                            show : true,
                            title : 'Mrp:',
                            value : null
                        },
                        discount: {
                            show: true,
                        },
                        description: {
                            show : true,
                            title : '',
                            value : null
                        },
                        startDate : {
                            show : true,
                            title : 'Start Date:',
                            value : null
                        },
                        endDate : {
                            show : true,
                            title : 'End Date:',
                            value : null
                        }, 
                        pathUrl : {
                            show : true,
                            title : 'See Details',
                            value : null,
                        }
                    }
        }
    },
    methods: {
        setActiveTab(index) {
            this.details = this.courseTabArray[index].details;
        }
    },
    props: {
     
    },
    created() {
        if (this.courseTabArray && this.courseTabArray.length) {
            this.tabArr = this.courseTabArray.map(item => item = item.title); //create array
            this.details = this.courseTabArray[0].details;

        }
    }

}
</script>

<style>
#courseDeatailsD01 .v-card-title {
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

#courseDeatailsD01 #tabDesign04>.v-container #course-detailsDesign01>.v-card .v-card {
    border: none
}

@media only screen and (max-width:600px) {
    #courseDeatailsD01 .course-name {
        display: block;

    }
}
</style>

<template>
   <div id="productDeatailsD01">
  
        <v-container>
            <v-row v-if="courseDetails">
                <v-col class="v-col-lg-5 v-col-sm-12 v-col-12">
                        <v-img v-if="courseDetails.featureImg" :src="courseDetails.featureImg"
                            lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success">
                                    </v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-img v-else src="/default-productcourseimg.jpg"
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
                    <v-card-title>{{ courseDetails.title }}</v-card-title>
                    <div style="margin-top: 10px;">
                        <p class="course-heading">product Details</p>
                        <div class="course-stream">
                        <p v-if="courseDetails.course&&courseDetails.course.value" class="course-name">
                            <span><b> {{  producturlvalue.course.title }}</b>{{ courseDetails.course.value }}</span>
                        </p>
                        <p v-if="courseDetails.stream&&courseDetails.stream.value" class="course-name">
                            <span><b>{{  producturlvalue.stream.title }}</b>{{ courseDetails.stream.value }}</span>
                        </p>
                    </div>
                        <v-card-text v-html="courseDetails.description" class='content-demo'></v-card-text>
                       <p class="course-date"> 
                            <span v-if="courseDetails.startDate">{{producturlvalue.startDate.title}}</span>
                            <span v-if="courseDetails.validity">{{producturlvalue.validity.title}}{{ courseDetails.validity }}</span>
                        </p>
                          
                        <p v-if="courseDetails" class="course-price">
                            <span v-if="courseDetails.mrp">
                                {{producturlvalue.mrp.title}}{{courseDetails.mrp}}</span>
                            <span v-if="courseDetails.cost">
                                {{producturlvalue.cost.title}}{{courseDetails.cost}}</span>
                        </p>
                        <div class="course-btn">
                            <v-btn >Buy Now</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>   
        </v-container>
   </div>
</template>
<script>
    export default {
   
        async setup(props) {
            const courseDetails = ref(null);
            courseDetails.value= await useProductdetails(props.productProgram)
            return{
                courseDetails
            }
                // courseDetails.value = await useCourseProgramDetail(props.courseProgram);

        },
        props : {
            productProgram : {
                required : true,
                Type: String
            }

        },
        data() {
            return {
                producturlvalue: {
                    title: {
                        show: true,
                        value: null
                    },
                    thumb: {
                        show: true,
                        value: null
                    },
                    eduStandard: {
                        show: true,
                        title: 'Exam Category',
                        value: null
                    },
                    course: {
                        show: false,
                        title: 'Exam:',
                        value: null
                    },
                    stream: {
                        show: false,
                        title: 'stream:',
                        value: null
                    },
                    cost: {
                        show: true,
                        title: 'Price:',
                        value: null
                    },
                    mrp: {
                        show: true,
                        title: 'Mrp:',
                        value: null
                    },
                    discount: {
                        show: true,
                    },
                    description: {
                        show: true,
                        title: '',
                        value: null
                    },
                    startDate: {
                        show: true,
                        title: 'Start Date:',
                        value: null
                    },
                    validity: {
                        show: true,
                        title: 'End Date:',
                        value: null
                    },
                    pathUrl: {
                        show: true,
                        title: 'See Details',
                        value: null,
                    }
                }
               
            }
        },
        methods: {
         
        },
        created() {
       
        }

    }
</script>
<style >
#courseDeatailsD01 .v-card-title{
   text-align: center;
}
#courseDeatailsD01 .course-heading{
   text-align: center;
   border-bottom: 3px solid var(--v-success);
}
#courseDeatailsD01 .course-price, #courseDeatailsD01 .course-date{
    display: flex;
    justify-content: space-between;
}

#courseDeatailsD01 .course-btn{
    display: block;
    text-align: end;
    padding: 10px 0px;
}
#courseDeatailsD01 .course-stream{
    display: flex;
    justify-content: space-between;
}
#courseDeatailsD01 .course-date{
    color: #896cb4;
}
#courseDeatailsD01 .course-name b{
    padding-right: 10px;
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
</style>

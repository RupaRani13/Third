<template>
    <v-col class="v-col-lg-6 v-col-md-6 v-col-sm-12 v-col-12" id="courseListDesign03">
        <div class="full-card">
            <div class="myClass" style="position:relative">
                            <template v-if="courseDetailObj.thumb&&courseDetailObj.thumb.show">
                                        <v-img v-if="courseDetailObj.thumb.value" :src="courseDetailObj.thumb.value" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1" cover min-width="189"
                                            class="bg-grey-lighten-2">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align-item="center" justify="center">
                                                    <v-progress-circular indeterminate color="success">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                        <v-img v-else src="/default-course-img.jpeg" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1" cover
                                           min-width="189" class="bg-grey-lighten-2">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align-item="center" justify="center">
                                                    <v-progress-circular indeterminate color="success">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    
                                    </template>
                <v-card flat
                    v-if="courseDetailObj.cost&&courseDetailObj.cost.value&&courseDetailObj.cost.show || courseDetailObj.mrp&&courseDetailObj.mrp.value&&courseDetailObj.mrp.show"
                    class="content-fee">
                    <p>
                        <span
                            v-if="courseDetailObj.cost&&courseDetailObj.cost.value&&courseDetailObj.cost.show">{{courseDetailObj.cost.title}}{{courseDetailObj.cost.value}}</span>
                        <span
                            v-if="courseDetailObj.mrp&&courseDetailObj.mrp.value&&courseDetailObj.mrp.show"><strike>{{courseDetailObj.mrp.value}}</strike></span>
                        <span
                            v-if="courseDetailObj.discount.show&&courseDetailObj.mrp&&courseDetailObj.mrp.value&&courseDetailObj.cost&&courseDetailObj.cost.value"
                            class="discount-cost">{{discount(courseDetailObj.mrp.value,courseDetailObj.cost.value)}}%
                            OFF</span>
                    </p>
                </v-card>
            </div>
            <div class="coursecard-design">
               
                <p v-if="courseDetailObj.eduStandard&&courseDetailObj.eduStandard.show&&courseDetailObj.eduStandard.value"
                    class="eduname">
                    {{courseDetailObj.eduStandard.value}}
                </p>
                <div class="course-content">
                
                    <b v-if="courseDetailObj.title&&courseDetailObj.title.show&&courseDetailObj.title.value"
                        class="edustandrad-name ">
                        {{courseDetailObj.title.value}}
                    </b>
                  
                    <p v-if="courseDetailObj.course&&courseDetailObj.course.show&&courseDetailObj.course.value"
                        class="">
                        {{courseDetailObj.course.value}}
                    </p>
                    
                    <template
                        v-if="courseDetailObj.startDate&&courseDetailObj.startDate.show&&courseDetailObj.startDate.value">
                        <p class="course-Date">
                          {{courseDetailObj.startDate.title}}{{courseDetailObj.startDate.value}}
                        </p>
                    </template>
                    <template
                        v-if="courseDetailObj.endDate&&courseDetailObj.endDate.show&&courseDetailObj.endDate.value">
                        <p class="course-Date">
                            {{courseDetailObj.endDate.title}}{{courseDetailObj.endDate.value}}
                        </p>
                    </template>
                    <v-card-text  v-html="courseDetailObj.description&&courseDetailObj.description.value" class='content-demo'></v-card-text>
                </div>
                <div v-if="courseDetailObj.pathUrl" class="course-btn">
                        <v-btn v-if="courseDetailObj.buyBtn" size="small">Buy Now</v-btn>
                        <NuxtLink :to="`${courseDetailObj.pathUrl.value}`">
                            <v-btn size="small">{{courseDetailObj.pathUrl.title}}</v-btn>
                        </NuxtLink>
                        <!-- <NuxtLink :to="`/course-detail/${courseDetailObj.pathUrl.value}`">
                            <v-btn size="small">{{courseDetailObj.pathUrl.title}}</v-btn>
                        </NuxtLink> -->
                    </div>
            </div>
        </div>
    </v-col>

</template>

<script>
export default {
    props: {
        courseDetailObj: {
            required: true,
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
<style scoped>
#courseListDesign03 .full-card {
    display: flex;
    position: relative;
    padding: 4px;
    background: var(--v-success);
}

#courseListDesign03 .content-demo {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 0px;

}

#courseListDesign03 .eduname {
    position: absolute;
    background: var(--v-success);
    top: 0px;
    border-radius: 0px 0px 20px 0px;
    height: 26px;
    padding: 2px 14px;
    box-shadow: 1px 4px 8px var(--v-surface-variant);
    font-size: 14px;
    left: 0;
}

#courseListDesign03 .edustandrad-name {
    font-size: 14px;

    /* padding: 3px 0px; */
}

#courseListDesign03 .content-fee p {
    padding: 0px 10px;
    font-size: 12px;
}

#courseListDesign03 .content-fee {

    position: absolute;
    background: #d9cbcb;
    border-radius: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

}

#courseListDesign03 .course-Date {
    font-size: 11px;
    color: #896cb4;
    padding: 3px 0px;
}

#courseListDesign03 .content-fee p strike {
    padding: 0px 5px;
    font-size: 13px;
    color: red;
}

#courseListDesign03 .discount-cost {
    color: yellow;
}

#courseListDesign03 .course-name {
    height: 50px;
}

#courseListDesign03 .coursecard-design {
    padding: 10px;
    background: var(--v-background);
}

#courseListDesign03 .course-btn {
    position: absolute;
    bottom: 0;
    justify-content: space-around;
    display: flex;
    gap: 10px;
    /* padding: 20px 0px; */
    transform: translate(0%, -40%);

}
#courseListDesign03 .course-btn a{
    text-decoration: none;
}
#courseListDesign03 .course-btn button {
    background: var(--v-success);
    border-radius: 20px;
    color: #fff;
}

@media screen and (max-width:600px) {
    #courseListDesign03 .full-card {
        display: block;
    }

    #courseListDesign03 .course-btn {
        position: relative;
        transform: translate(0%, 6%);
    }

}
</style>

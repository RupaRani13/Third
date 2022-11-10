<template>

    <v-col class="v-col-lg-6 v-col-md-6 v-col-sm-12 v-col-12" id="courseListDesign04">
        <div class="full-card">
            <div class="myClass">
            </div>
            <div class="coursecard-design">
                <p v-if="courseDetailObj.eduStandard && courseDetailObj.eduStandard.show && courseDetailObj.eduStandard.value"
                    class="eduname">
                    {{ courseDetailObj.eduStandard.value }}
                </p>
                
                <div class="course-content">
                    <b v-if="courseDetailObj.title && courseDetailObj.title.show && courseDetailObj.title.value"
                        class="edustandrad-name ">
                        {{ courseDetailObj.title.value }}
                    </b>
                    <p v-if="courseDetailObj.course && courseDetailObj.course.show && courseDetailObj.course.value"
                        class="">
                        {{ courseDetailObj.course.value }}
                    </p>
                    <div class="new-time">
                        <template
                            v-if="courseDetailObj.startDate && courseDetailObj.startDate.show && courseDetailObj.startDate.value">
                            <p class="course-Date">
                                Start Date:{{ courseDetailObj.startDate.value }}
                            </p>
                        </template>
                        <template
                            v-if="courseDetailObj.endDate && courseDetailObj.endDate.show && courseDetailObj.endDate.value">
                            <p class="course-Date">
                                End Date:{{ courseDetailObj.endDate.value }}
                            </p>
                        </template>
                    </div>
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
                    <v-card-text v-html="courseDetailObj.description.value" class='content-demo'></v-card-text>
                    <div v-if="courseDetailObj.pathUrl" class="course-btn">
                        <v-btn v-if="courseDetailObj.buyBtn" size="small">Buy Now</v-btn>
                        <NuxtLink :to="`/course-detail/${courseDetailObj.pathUrl.value}`">
                            <v-btn size="small">{{ courseDetailObj.pathUrl.title }}</v-btn>
                        </NuxtLink>

                    </div>
                </div>
            </div>
        </div>
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
<style scoped>
#courseListDesign04 .full-card {
    display: flex;
    position: relative;
    box-shadow: -3px 4px 6px -1px var(--v-success);
    padding: 10px;
    position: relative;
}

#courseListDesign04 .content-demo {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 0px;

}

#courseListDesign04 .eduname {
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

#courseListDesign04 .edustandrad-name {
    font-size: 14px;
    justify-content: center;
    display: flex;
    margin-top: 20px;
}

#courseListDesign04 .content-fee p {
    padding: 0px 10px;
    font-size: 12px;
}

#courseListDesign04 .content-fee {
    position: absolute;
    background: #d9cbcb;
    border-radius: 0px;
    top: 0;

    right: 0px;
}

#courseListDesign04 .course-Date {
    font-size: 11px;
    color: #896cb4;
    padding: 3px 0px;
}

#courseListDesign04 .content-fee p strike {
    padding: 0px 5px;
    font-size: 13px;
    color: red;
}

#courseListDesign04 .discount-cost {
    color: yellow;
}

#courseListDesign04 .course-name {
    height: 50px;
}

#courseListDesign04 .new-time {
    display: flex;
    justify-content: space-between;
}

#courseListDesign04 .course-btn {
    justify-content: space-around;
    display: flex;
    padding: 10px;
}

#courseListDesign04 .course-btn button {
    background: var(--v-success);
    border-radius: 20px;
    color: #fff;
}
#courseListDesign04 .course-btn a {
    text-decoration: none;
}
@media screen and (max-width:600px) {
    #courseListDesign04 .full-card {
        display: block;
    }

    #courseListDesign04 .course-btn {
        padding: 20px 0px;
        transform: translate(1%, 3%);
    }

    #courseListDesign04 .new-time {
        display: block;
    }

}
</style>

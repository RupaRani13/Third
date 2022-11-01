<template>
    <div id="courseListDesign05">
        <v-row>
            <template v-for="item in myArr" :key="item.title">
                <v-col class="v-col-lg-3">

                    <v-card class="course-card" v-bind="props">
                        <div>
                            <p v-if="item.name" class="edustandrad-name ">
                                {{item.name}}
                            </p>
                            <div class="course-img">
                                <v-img :src="item.thumb" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover
                                    class="bg-grey-lighten-2" >
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="success">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <p v-if="cardCondition.eduStandard.show==true&&item.eduStandard&&item.eduStandard.name"
                                class="eduname text-white">
                                {{item.eduStandard.name}}
                            </p>
                            </div>
                        
                            <div class="course-content">

                                <p v-if="cardCondition.courseName.show==true&&item.course&&item.course.name" class="">
                                    {{item.course.name}}
                                </p>
                                <v-card flat
                                    v-if="item.linkedProduct&&item.linkedProduct.cost&&item.linkedProduct.mrp&&(cardCondition.cost||cardCondition.mrp || cardCondition.discount)"
                                    class="content-fee">
                                    <p>
                                        <span
                                            v-if="cardCondition.cost.show==true">{{cardCondition.cost.value}}{{item.linkedProduct.cost}}</span>
                                        <span
                                            v-if="cardCondition.mrp.show==true"><strike>{{item.linkedProduct.mrp}}</strike></span>
                                        <span v-if="cardCondition.discount.show==true"
                                            class="discount-cost">{{discount(item.linkedProduct.mrp,item.linkedProduct.cost)}}%
                                            OFF</span>
                                    </p>
                                </v-card>
                                <p v-if="item.linkedProduct&&item.linkedProduct.startDate" class="course-Date">Start
                                    Date:{{item.linkedProduct.startDate}}</p>
                                <p v-else-if="item.startDate" class="course-Date">Start Date:{{item.startDate}}</p>
                                <p v-if="item.linkedProduct&&item.linkedProduct.validity" class="course-Date">End
                                    Date:{{item.linkedProduct.validity}}</p>
                                <p v-else-if="item.endDate" class="course-Date">End Date:{{item.endDate}}</p>
                                <v-card-text v-if="item&&item.desci" v-html="item.desci" class='content-demo'>
                                </v-card-text>
                                <div class="course-btn">
                                    <v-btn size="small">See Details</v-btn>
                                    <v-btn size="small">Buy Now</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-card>

                </v-col>
            </template>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        myArr: {
            default: [],
        },
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

                },
                discount: {
                    show: true,

                },
                courseName: {
                    show: false,
                    value: 'course name :'
                },

            }
        }
    },
    methods: {

        discount(mrp, cost) {
            let x = typeof mrp; //only for check  this is string or not
            let y = typeof cost
            let mymrp = mrp.trim();
            let newmrp = parseInt(mymrp);
            let mycost = cost.trim();
            let newcost = parseInt(mycost)
            console.log(newmrp, newcost)

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
#courseListDesign05 .course-img{
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

#courseListDesign05 .edustandrad-name {
    font-size: 14px;
    padding: 3px 0px;
    text-align: center;
    font-weight: 700;
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
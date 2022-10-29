<template>
    <div id="courseListDesign03">
        <v-row>
            <template v-for="item in myArr" :key="item.title">
                <v-col class="v-col-lg-6 v-col-md-6 v-col-sm-12 v-col-12">
                    <div class="full-card">
                    <div class="myClass" style="position:relative">
                        <v-img :src="item.thumb" lazy-src="/gallery_loading_image.jpeg"   aspect-ratio="1"  cover min-width="189"
                            class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success">
                                    </v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
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
                    </div>
                    <div class="coursecard-design">
                        <p v-if="cardCondition.eduStandard.show==true&&item.eduStandard&&item.eduStandard.name"
                            class="eduname text-white">
                            {{item.eduStandard.name}}
                        </p>
                        <div class="course-content">
                            <b v-if="item.name" class="edustandrad-name ">
                                {{item.name}}
                            </b>
                            <p v-if="cardCondition.courseName.show==true&&item.course&&item.course.name" class="">
                                {{item.course.name}}
                            </p>
                           
                            <p v-if="item.linkedProduct&&item.linkedProduct.startDate" class="course-Date">
                                Start
                                Date:{{item.linkedProduct.startDate}}</p>
                            <p v-else-if="item.startDate" class="course-Date">Start Date:{{item.startDate}}
                            </p>
                            <p v-if="item.linkedProduct&&item.linkedProduct.validity" class="course-Date">
                                End
                                Date:{{item.linkedProduct.validity}}</p>
                            <p v-else-if="item.endDate" class="course-Date">End Date:{{item.endDate}}</p>

                            <v-card-text v-if="item&&item.desci" v-html="item.desci" class='content-demo'>
                            </v-card-text>
                        
                        </div>
                        <div class="course-btn">
                                <v-btn size="small">See Details</v-btn>
                                <v-btn size="small">Buy Now</v-btn>
                            </div>
                    </div>
                    </div>
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
<style scoped>
 #courseListDesign03 .full-card{
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
#courseListDesign03 .content-fee{
    
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
#courseListDesign03 .coursecard-design{
    padding: 10px;
    background: var(--v-background);
}
#courseListDesign03 .course-btn{
    position: absolute;
    bottom: 0;
    justify-content: space-around;
    display: flex;
    gap: 10px;
    /* padding: 20px 0px; */
    transform: translate(0%, -40%);
   
}
#courseListDesign03 .course-btn button{
    background: var(--v-success);
    border-radius: 20px;
    color: #fff;
}
@media screen and (max-width:600px) {
    #courseListDesign03 .full-card{
        display: block;
    }
    #courseListDesign03 .course-btn{
    position: relative;
    transform: translate(0%, 6%);
    }
    
}
</style>

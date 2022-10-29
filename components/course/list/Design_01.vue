<template>
    <div id="courseListDesign01">
        <v-row>
            <template v-for="item in myArr" :key="item.title">
                <v-col class="v-col-lg-3">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="course-card" v-bind="props">
                            <div>
                                <div class="myClass" style="position:relative">
                                    <v-expand-transition v-if="item.desci&&cardCondition.description.show&&isHovering">
                                        <v-card-text  v-html="item.desci"
                                            class='content-demo'></v-card-text>
                                    </v-expand-transition>
                                    <v-img :src="item.thumb" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9"
                                        cover class="bg-grey-lighten-2">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align-item="center" justify="center">
                                                <v-progress-circular indeterminate color="success">
                                                </v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>

                                </div>
                                <p v-if="cardCondition.eduStandard.show&&item.eduStandard&&item.eduStandard.name"
                                    class="eduname text-white"  >
                                    {{item.eduStandard.name}}
                                </p>
                                <div class="course-content">
                                    <p v-if="item.name" class="edustandrad-name ">
                                        {{item.name}}
                                    </p>
                                    <p v-if="cardCondition.course.show&&item.course&&item.course.name"
                                        class="">
                                        {{item.course.name}}
                                    </p>
                                    <v-card flat
                                        v-if="item.linkedProduct&&item.linkedProduct.cost&&item.linkedProduct.mrp&&(cardCondition.cost.show||cardCondition.mrp.show || cardCondition.discount.show)"
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
                                    <template v-if="cardCondition.startDate.show">
                                        <p v-if="item.linkedProduct&&item.linkedProduct.startDate" class="course-Date">
                                            Start Date:{{item.linkedProduct.startDate}}
                                        </p>
                                        <p v-else-if="item.startDate" class="course-Date">Start Date:{{item.startDate}}</p>
                                    </template>
                                    <template v-if="cardCondition.endDate.show">
                                        <p v-if="item.linkedProduct&&item.linkedProduct.validity" class="course-Date">End
                                        Date:{{item.linkedProduct.validity}}</p>
                                        <p v-else-if="item.endDate" class="course-Date">End Date:{{item.endDate}}</p>
                                    </template>
                                    <div class="course-btn">
                                        <v-btn size="small">Buy Now</v-btn>
                                        <NuxtLink :to="`/course-detail/${item.id}`">
                                            <v-btn size="small">See Details</v-btn>
                                        </NuxtLink>

                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
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
                    value: 'Education Standard',
                },
                course: {
                    show: false,
                    value: 'course'
                },
                cost: {
                    show: true,
                    value: 'Price',
                },
                mrp: {
                    show: true,
                    value: 'Mrp',
                },
                discount: {
                    show: true,
                    value: 'Discount',
                },
                description: {
                    'show': false,
                },
                startDate : {
                    show: true,
                    value: 'Start Date'
                },
                endDate : {
                    show: true,
                    value: 'End Date'
                } 
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

            if (newmrp > 0) {
                return (Math.round(newmrp - newcost) / newmrp * 100).toFixed(2)
            }

        },

    }
}
</script>

<style>
#courseListDesign01 .course-card {
    box-shadow: 0 0 5px grey;
    border: 2px solid grey;
}

#courseListDesign01 .course-content {
    padding: 9px;
    height: auto;
    position: relative;


}

#courseListDesign01 .content-demo {


    overflow: auto;
    overflow-y: scroll;
    background: #c4ccc4db;
    position: absolute;
    top: 0px;
    z-index: 1;
    height: 100%;

}

#courseListDesign01 .content-fee {
    height: 20px;
    right: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0px;
    background: #afafaf;
    transform: translate(0px, -100%);
}

#courseListDesign01 .content-fee p {
    padding: 0px 10px;
    font-size: 12px;
}

#courseListDesign01 .course-Date {
    font-size: 11px;
    color: #896cb4;
    padding: 3px 0px;
}

#courseListDesign01 .content-fee p strike {
    padding: 0px 5px;
    font-size: 13px;
    color: red;
}

#courseListDesign01 .discount-cost {
    color: yellow;
}

#courseListDesign01 .course-name {
    height: 50px;
}

#courseListDesign01 .course-btn {
    display: flex;
    justify-content: space-between;
    padding: 9px 0px;
}
#courseListDesign01 .course-btn a{
    text-decoration: none;
}
#courseListDesign01 .edustandrad-name {
    font-size: 14px;
    padding: 3px 0px;
}

#courseListDesign01 .eduname {
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
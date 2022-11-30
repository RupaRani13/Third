<template>

                <v-col id="courseListDesign01" class="v-col-lg-3">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="course-card" v-bind="props">
                            <div>
                                <div class="myClass" style="position:relative">
                                    <v-expand-transition v-if="courseDetailObj.description&&courseDetailObj.description.show&&courseDetailObj.description.value&&isHovering">
                                        <v-card-text  v-html="courseDetailObj.description.value"
                                            class='content-demo'></v-card-text>
                                    </v-expand-transition>
                                    <template v-if="courseDetailObj.thumb&&courseDetailObj.thumb.show">
                                        <v-img v-if="courseDetailObj.thumb.value" :src="courseDetailObj.thumb.value" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover
                                            class="bg-grey-lighten-2">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align-item="center" justify="center">
                                                    <v-progress-circular indeterminate color="success">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                        <v-img v-else src="/default-course-img.jpeg" lazy-src="/gallery_loading_image.jpeg" aspect-ratio="1.9" cover
                                            class="bg-grey-lighten-2">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align-item="center" justify="center">
                                                    <v-progress-circular indeterminate color="success">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    
                                    </template>
                                </div>
                                <p v-if="courseDetailObj.eduStandard&&courseDetailObj.eduStandard.show&&courseDetailObj.eduStandard.value"
                                    class="eduname" >
                                    {{courseDetailObj.eduStandard.value}}
                                </p>
                                <div class="course-content">
                                    <p v-if="courseDetailObj.title&&courseDetailObj.title.show&&courseDetailObj.title.value" class="edustandrad-name ">
                                        {{courseDetailObj.title.value}}
                                    </p>
                                    <p v-if="courseDetailObj.course&&courseDetailObj.course.show&&courseDetailObj.course.value"
                                        class="">
                                        {{courseDetailObj.course.value}}
                                    </p>
                                    <v-card flat
                                        v-if="courseDetailObj.cost&&courseDetailObj.cost.value&&courseDetailObj.cost.show || courseDetailObj.mrp&&courseDetailObj.mrp.value&&courseDetailObj.mrp.show"
                                        class="content-fee">
                                        <p>
                                            <span
                                                v-if="courseDetailObj.cost&&courseDetailObj.cost.value&&courseDetailObj.cost.show">{{courseDetailObj.cost.title}}{{courseDetailObj.cost.value}}</span>
                                            <span
                                                v-if="courseDetailObj.mrp&&courseDetailObj.mrp.value&&courseDetailObj.mrp.show"><strike>{{courseDetailObj.mrp.value}}</strike></span>
                                            <span v-if="courseDetailObj.discount.show&&courseDetailObj.mrp&&courseDetailObj.mrp.value&&courseDetailObj.cost&&courseDetailObj.cost.value"
                                                class="discount-cost">{{discount(courseDetailObj.mrp.value,courseDetailObj.cost.value)}}%
                                                OFF</span>
                                        </p>
                                    </v-card>
                                    <template v-if="courseDetailObj.startDate&&courseDetailObj.startDate.show&&courseDetailObj.startDate.value">
                                        <p class="course-Date">
                                            Start Date:{{courseDetailObj.startDate.value}}
                                        </p>
                                    </template>
                                    <template  v-if="courseDetailObj.endDate&&courseDetailObj.endDate.show&&courseDetailObj.endDate.value">
                                        <p class="course-Date">
                                            End Date:{{courseDetailObj.endDate.value}}
                                        </p>
                                    </template>
                                 
                                    <div v-if="courseDetailObj.pathUrl" class="course-btn">
                                        <v-btn v-if="courseDetailObj.buyBtn"  size="small">Buy Now</v-btn>
                                        <NuxtLink :to="`${courseDetailObj.pathUrl.value}`">
                                        <!-- <NuxtLink :to="`${courseDetailObj.pagepath.path}${courseDetailObj.pathUrl.value}`"> -->
                                            <v-btn size="small">{{courseDetailObj.pathUrl.title}}</v-btn>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
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
    width: 100%;

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
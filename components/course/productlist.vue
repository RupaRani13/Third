<template> 
    <ui-coursecard-design01 :courseDetailObj="courseDetailObj"></ui-coursecard-design01>
</template>

<script>
export default {
    async setup(props) {
        const productdetails = await useProductdetails(props.id)
        return { productdetails }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            courseDetailObj : {}
        }
    },
    methods: {
        getCourseDetailObj(productDetail){
            let myObj = {
                        title: {
                            show : true,
                            value : null
                        },
                        thumb: {
                            show : true,
                            value : null
                        },
                        eduStandard: {
                            show : false,
                            title : 'Exam Category',
                            value : null
                        },
                        course: {
                            show : false,
                            title : 'Exam',
                            value : null
                        },
                        cost: {
                            show : true,
                            title : 'Price:',
                            value : null
                        },
                        mrp: {
                            show : true,
                            title : 'Mrp',
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
                            title : 'Start Date',
                            value : null
                        },
                        endDate : {
                            show : true,
                            title : 'End Date',
                            value : null
                        }, 
                        pathUrl : {
                            show : true,
                            title : 'See Details',
                            value : null,
                        },
                        buyBtn: {
                            show: true,
                        },
                    }
            if( productDetail.title){
                myObj.title.value = productDetail.title
            }
            if( productDetail.thumb){
                myObj.thumb.value = productDetail.thumb
            }
            if( productDetail.eduStandard&& productDetail.stream.value){
                myObj.eduStandard.value = productDetail.stream.value
            }
            if( productDetail.course&& productDetail.course.value){
                myObj.course.value = productDetail.course.value
            }
            if( productDetail.cost){
                myObj.cost.value = productDetail.cost
            }
            if( productDetail.mrp){
                myObj.mrp.value = productDetail.mrp
            }
            if( productDetail.description){
                myObj.description.value = productDetail.description
            }
            if( productDetail.startDate){
                myObj.startDate.value = productDetail.startDate
            }
            if( productDetail.validity){
                myObj.endDate.value = productDetail.validity
            }
            console.log(myObj);
            return myObj


        }


    },
    created(){
        this.courseDetailObj = this.getCourseDetailObj(this.productdetails);

    }
}
</script>

<style>
/* #courseDeatailsD01 #product-detailscarddesign .v-card-title {
    white-space: unset;
    height: 74px;
}

#product-detailscarddesign .v-card-text p {
    overflow: hidden;
    overflow-y: scroll;
    height: 100px;
} */

#product-detailscarddesign .course-card {
    box-shadow: 0 0 5px grey;
    border: 2px solid grey;
}

#product-detailscarddesign .content-demoDesign  {
    overflow: auto;
    overflow-y: scroll;
    background: #c4ccc4db;
    position: absolute;
    top: 0px;
    z-index: 1;
    height: 100%;
    width: 100%;
    padding:10px;

}

#product-detailscarddesign .eduname {
    position: absolute;
    background: var(--v-success);
    top: 0px;
    border-radius: 0px 0px 20px 0px;
    height: 26px;
    padding: 2px 14px;
    box-shadow: 1px 4px 8px var(--v-surface-variant);
    font-size: 14px;
}

#product-detailscarddesign .course-content {
    padding: 9px;
    height: auto;
    position: relative;


}

#product-detailscarddesign .edustandrad-name {
    font-size: 14px;
    padding: 3px 0px;
}

#product-detailscarddesign .content-fee {
    height: 20px;
    right: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0px;
    background: #afafaf;
    transform: translate(0px, -100%);
}

#product-detailscarddesign .content-fee p {
    padding: 0px 10px;
    font-size: 12px;
}

#product-detailscarddesign .content-fee p strike {
    padding: 0px 5px;
    font-size: 13px;
    color: red;
}

#product-detailscarddesign .discount-cost {
    color: yellow;
}
#product-detailscarddesign .course-btn {
    display: flex;
    justify-content: space-between;
    padding: 9px 0px;
    margin:0px;
}
#product-detailscarddesign .course-btn a{
    text-decoration: none;
}
</style>
<template>
    <div>
        <v-container>
            <ui-tabs-design01 :list="tabArr" @activeIndex=" getprogramIdByEdstandard"></ui-tabs-design01>
            <ui-tabs-design01 :list="coursetab" @activeIndex=" getprogramIdByCourse"></ui-tabs-design01>
            <v-row>
                <template v-for="item in filteredCourseProgram" :key="item">
                    <ui-coursecard-design01 :courseDetailObj="item"></ui-coursecard-design01>
                    <!-- <ui-coursecard-design02 :courseDetailObj="item"></ui-coursecard-design02> -->
                    <!-- <ui-coursecard-design03 :courseDetailObj="item"></ui-coursecard-design03> -->
                </template>
            </v-row>
        </v-container>
    </div>
</template>

<script>


export default {
    async setup() {
        const course = await useCourse();
        const edustand = await useEdustandard();
        const courseprogram = await useCourseProgram();
        return {
            course, edustand, courseprogram
        }
    },
    data() {
        return {
            tabArr: [],
            filteredCourseProgram: [],
            selectedEdustandard: '',
            coursetab: '',
            selectedCourseProgram: {
                course: 'All',
                edustandard: 'All',
            },
            
        }
    },

    methods: {
        getprogramIdByEdstandard(index) {
            this.selectedCourseProgram.edustandard = this.edustand[index].name;
            this.getFilteredCp(this.selectedCourseProgram.edustandard, this.selectedCourseProgram.course);
        },
        getprogramIdByCourse(index) {
            this.selectedCourseProgram.course = this.course[index].name;
            this.getFilteredCp(this.selectedCourseProgram.edustandard, this.selectedCourseProgram.course);
        },
        getFilteredCp(edustandardName, courseName) {
            if (edustandardName == 'All' && courseName == "All") {
                this.filteredCourseProgram = this.courseprogram;
            } else if (edustandardName != 'All' && courseName == "All") {
                this.filteredCourseProgram = this.courseprogram.filter(item => item.eduStandard && item.eduStandard.name == edustandardName);
            } else if (edustandardName == 'All' && courseName != "All") {
                this.filteredCourseProgram = this.courseprogram.filter(item => item.course && item.course.name == courseName);
            } else {
                this.filteredCourseProgram = this.courseprogram.filter(item => item.course && item.eduStandard && item.course.name == courseName && item.eduStandard.name == edustandardName);
            }
            this.filteredCourseProgram = this.getFinalCourseObj(this.filteredCourseProgram);


        },
        getFinalCourseObj(myArr){
            if(myArr&&myArr.length){
                let CourseArr = [];
                myArr.forEach(item=>{
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
                            show : true,
                            title : 'Exam Category',
                            value : null
                        },
                        course: {
                            show : false,
                            title : 'Exam',
                            value : null
                        },
                        cost: {
                            show : false,
                            title : 'Price',
                            value : null
                        },
                        mrp: {
                            show : false,
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
                        }
                    }
                    if(item.name){
                        myObj.title['value'] = item.name;
                    }
                    if(item.linkedProduct&&item.linkedProduct.cost){
                    myObj.cost['value'] = item.linkedProduct.cost;  
                    }
                    if(item.linkedProduct&&item.linkedProduct.mrp){
                    myObj.mrp['value'] = item.linkedProduct.mrp;  
                    }
                    if(item.desci){
                    myObj.description['value'] = item.desci;  
                    }
                    if(item.thumb){
                    myObj.thumb['value'] = item.thumb;  
                    }
                    if(item.course&&item.course.name){
                    myObj.course['value'] = item.course.name;  
                    }
                    if(item.eduStandard&&item.eduStandard.name){
                    myObj.eduStandard['value'] = item.eduStandard.name;  
                    }
                    if(item.startDate){
                        myObj.startDate['value'] = item.startDate
                    } else if(item.linkedProduct&&item.linkedProduct.startDate){
                    myObj.startDate['value'] = item.myObj.linkedProduct.startDate;  
                    }
                    if(item.endDate){
                        myObj.endDate['value'] = item.endDate
                    } else if(item.linkedProduct&&item.linkedProduct.validity){
                    myObj.endDate['value'] = item.myObj.linkedProduct.validity;  
                    }
                    if(item.id){
                        myObj.pathUrl.value = item.id
                    }
                    CourseArr.push(myObj)
                })
                return CourseArr;

            }

        }
    },
    created() {
        this.filteredCourseProgram = this.getFinalCourseObj(this.courseprogram);
        this.edustand.unshift({ name: "All" })
        this.course.unshift({ name: "All" })
        this.tabArr = this.edustand.map(item => item = item.name);
        this.coursetab = this.course.map(item2 => item2 = item2.name);

    },
}
</script>

<style>

</style> 
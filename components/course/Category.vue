<template>
    <div>
        <v-container>
            <ui-tabs-design01 :list="tabArr" @activeIndex=" getprogramIdByEdstandard"></ui-tabs-design01>
            <ui-tabs-design01 :list="coursetab" @activeIndex=" getprogramIdByCourse"></ui-tabs-design01>
            <course-list-design01 :cardCondition="cardCondition" :myArr="filteredCourseProgram"></course-list-design01>
            <!-- <course-list-design02 :cardCondition="cardCondition" :myArr="filteredCourseProgram"></course-list-design02> -->
            <!-- <course-list-design03 :cardCondition="cardCondition" :myArr="filteredCourseProgram"></course-list-design03> -->
            <!-- <course-list-design04 :cardCondition="cardCondition" :myArr="filteredCourseProgram"></course-list-design04> -->
<<<<<<< components/course/Category.vue
            <!-- <course-list-design05 :cardCondition="cardCondition" :myArr="filteredCourseProgram"></course-list-design05> -->
=======
            <course-list-design01 :cardCondition="cardCondition" :myArr="filteredCourseProgram"></course-list-design01>
>>>>>>> components/course/Category.vue
        </v-container>
    </div>
</template>

<script>


export default {
    async setup() {
        const course = await useCourse();
        const edustand = await useEdustandard();
        const courseprogram = await useCourseProgram('6349186898bb9b52be001b24');
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
<<<<<<< components/course/Category.vue
            cardCondition: {   
                eduStandard:{
=======
            cardCondition: {
                eduStandard: {
>>>>>>> components/course/Category.vue
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
                    show: true,
                },
                startDate : {
                    show: false,
                    value: 'Start Date'
                },
                endDate : {
                    show: false,
                    value: 'End Date'
                }      
            }
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
        }
    },
    created() {
        this.filteredCourseProgram = this.courseprogram;
        this.edustand.unshift({ name: "All" })
        this.course.unshift({ name: "All" })
        this.tabArr = this.edustand.map(item => item = item.name);
        this.coursetab = this.course.map(item2 => item2 = item2.name);

    },
}
</script>

<style>

</style> 
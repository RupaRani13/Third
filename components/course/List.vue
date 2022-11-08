
<template>
    <div id="course-listPage">
        <v-container>
            <v-card-title v-if="eduStandardId" class="edu-name">
                EduStandard: {{ eduStandard.name }}
            </v-card-title>
            <v-card-title v-if="courseId" class="course-name">
                Course: {{ course.name }}
            </v-card-title>
            <ui-tabs-design02 v-if="!eduStandardId && !courseId" :list="eduStandardNameArr"
                @activeIndex="getprogramIdByEdstandard"></ui-tabs-design02>
            <ui-tabs-design02 v-if="courseNameArr.length > 0" :activeTab="activeCourseTab" :list="courseNameArr"
                @activeIndex="getprogramIdByCourse"></ui-tabs-design02>
            <v-row v-if="filteredCourseProgram.length">
                <template v-for="item in filteredCourseProgram" :key="item">
                    <ui-coursecard-design01 :courseDetailObj="item"></ui-coursecard-design01>
                </template>
            </v-row>
        </v-container>
    </div>
</template>
<script>


export default {
    async setup(props) {
        const course = await useCourse(props.eduStandardId, props.courseId);
        const eduStandard = ref(null);
        if (!props.courseId || props.courseId && props.eduStandardId || !props.courseId && !props.eduStandardId) {
            eduStandard.value = await useEdustandard(props.eduStandardId);
        }
        const courseProgram = await useCourseProgram(props.eduStandardId, props.courseId);
        return {
            course, eduStandard, courseProgram
        }
    },
    props: {
        eduStandardId: {
            default: null,
        },
        courseId: {
            default: null,
        }
    },
    data() {
        return {
            eduStandardNameArr: [],
            courseNameArr: [],
            filteredCourse: [],
            filteredCourseProgram: [],
            selectedCourseProgram: {
                course: 'All',
                edustandard: 'All',
            },
            activeCourseTab: 0,

        }
    },

    methods: {
        getprogramIdByEdstandard(index) {
            this.activeCourseTab = 0;
            this.selectedCourseProgram.edustandard = this.eduStandard[index].name;
            this.getfilteredCourse(this.eduStandard[index].id);
            this.selectedCourseProgram.course = "All";
            this.getFilteredCp(this.selectedCourseProgram.edustandard, this.selectedCourseProgram.course);
        },
        getprogramIdByCourse(index) {
            this.selectedCourseProgram.course = this.course[index].name;
            this.getFilteredCp(this.selectedCourseProgram.edustandard, this.selectedCourseProgram.course);
        },
        getfilteredCourse(eduStandard) {
            if (eduStandard) {
                this.filteredCourse = this.course.filter(item => {
                    if (item.eduStandard && item.eduStandard.id == eduStandard) {
                        return item
                    }
                })
            } else {
                this.filteredCourse = this.course;
            }
            if (this.filteredCourse.some(e => e.name == 'All')) {
                this.courseNameArr = this.filteredCourse.map(item => item = item.name);
            } else if (this.filteredCourse.length) {
                this.filteredCourse.unshift({ name: "All" });
                this.courseNameArr = this.filteredCourse.map(item => item = item.name);
            } else {
                this.courseNameArr = [];
            }

        },
        getFilteredCp(edustandardName, courseName) {
            if (edustandardName == 'All' && courseName == "All") {
                this.filteredCourseProgram = this.courseProgram;
            } else if (edustandardName != 'All' && courseName == "All") {
                this.filteredCourseProgram = this.courseProgram.filter(item => item.eduStandard && item.eduStandard.name == edustandardName);
            } else if (edustandardName == 'All' && courseName != "All") {
                this.filteredCourseProgram = this.courseProgram.filter(item => item.course && item.course.name == courseName);
            } else {
                this.filteredCourseProgram = this.courseProgram.filter(item => item.course && item.eduStandard && item.course.name == courseName && item.eduStandard.name == edustandardName);
            }
            this.filteredCourseProgram = this.getStandardCP(this.filteredCourseProgram);
        },
        getStandardCP(myArr) {
            if (myArr && myArr.length) {
                let CourseArr = [];
                myArr.forEach(item => {
                    let myObj = {
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
                        endDate: {
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
                    if (item.name) {
                        myObj.title['value'] = item.name;
                    }
                    if (item.linkedProduct && item.linkedProduct.cost) {
                        myObj.cost['value'] = item.linkedProduct.cost;
                    }
                    if (item.linkedProduct && item.linkedProduct.mrp) {
                        myObj.mrp['value'] = item.linkedProduct.mrp;
                    }
                    if (item.desci) {
                        myObj.description['value'] = item.desci;
                    }
                    if (item.thumb) {
                        myObj.thumb['value'] = item.thumb;
                    }
                    if (item.course && item.course.name) {
                        myObj.course['value'] = item.course.name;
                    }
                    if (item.eduStandard && item.eduStandard.name) {
                        myObj.eduStandard['value'] = item.eduStandard.name;
                    }
                    if (item.startDate) {
                        myObj.startDate['value'] = item.startDate
                    } else if (item.linkedProduct && item.linkedProduct.startDate) {
                        myObj.startDate['value'] = item.myObj.linkedProduct.startDate;
                    }
                    if (item.endDate) {
                        myObj.endDate['value'] = item.endDate
                    } else if (item.linkedProduct && item.linkedProduct.validity) {
                        myObj.endDate['value'] = item.myObj.linkedProduct.validity;
                    }
                    if (item.id) {
                        myObj.pathUrl.value = item.id
                    }
                    CourseArr.push(myObj)
                })
                return CourseArr;

            }

        }
    },
    created() {
        if (!this.$props.courseId) {
            this.getfilteredCourse()
        }
        this.filteredCourseProgram = this.getStandardCP(this.courseProgram);
        if (!this.$props.eduStandardId && !this.$props.courseId) {
            this.eduStandard.unshift({ name: "All" })
            this.eduStandardNameArr = this.eduStandard.map(item => item = item.name);
        }
    },
}
</script>

<style>
#course-listPage .edu-name,
#course-listPage .course-name {
    text-align: center;
}
</style> 








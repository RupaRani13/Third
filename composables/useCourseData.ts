// const storeEdustandard = () => useState<any>('eduStandard', () => null);
async function useEdustandard(eduStandard = null) {
    const apiUrl = ref(null);
    if (eduStandard) {
        apiUrl.value = `https://demo02.institute.org.in/api/webber/edustandard/${eduStandard}`;
    } else {
        apiUrl.value = 'https://demo02.institute.org.in/api/webber/edustandard';
    }

    return await $fetch(apiUrl.value);
}
async function useCourse(eduStandard = null, course = null) {
    const apiUrl = ref(null);
    apiUrl.value = "https://demo02.institute.org.in/api/webber/course";

    const params = {}
    if (eduStandard) {
        apiUrl.value = 'https://demo02.institute.org.in/api/webber/course';
        params['eduStandard'] = eduStandard;
    }
    if (course) {
        apiUrl.value = `https://demo02.institute.org.in/api/webber/course/${course}`;

    }

    return await $fetch(apiUrl.value, { params: params });

}

async function useCourseProgram(eduStandard = null, course = null) {
    const apiUrl = "https://demo02.institute.org.in/api/webber/courseprogram";
    const params = {}
    if (eduStandard) {
        params['eduStandard'] = eduStandard;
    }
    if (course) {
        params['course'] = course;
    }
    return await $fetch(apiUrl, { params: params });

}
async function useCourseProgramDetail(courseProgramDetail) {
    const apiUrl = `https://demo02.institute.org.in/api/webber/courseprogram/${courseProgramDetail}`;
    const params = {}
    return await $fetch(apiUrl, { params: params });

}
export { useEdustandard, useCourse, useCourseProgram, useCourseProgramDetail }
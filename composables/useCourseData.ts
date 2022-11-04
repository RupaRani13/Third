// const storeEdustandard = () => useState<any>('eduStandard', () => null);
async function useEdustandard(eduStandard=null) {
    const apiUrl = ref(null);
    console.log('hello',eduStandard)
    if(eduStandard){
        apiUrl.value = `https://demo02.institute.org.in/api/webber/edustandard/${eduStandard}`;
    }else{
        apiUrl.value = 'https://demo02.institute.org.in/api/webber/edustandard';
    }

   return await $fetch(apiUrl.value);
}
async function useCourse(eduStandard=null) {
    const apiUrl = 'https://demo02.institute.org.in/api/webber/course';
    const params = {}
    if(eduStandard){
        params['eduStandard'] = eduStandard;
    }
    return await $fetch(apiUrl,{params : params});

}
// async function useCourseProgram(){
//     const apiUrl = 'https://demo02.institute.org.in/api/webber/courseprogram';
//    return await $fetch(apiUrl);

// }
async function useCourseProgram(eduStandard=null){
   const apiUrl = "https://demo02.institute.org.in/api/webber/courseprogram";
   const params = {}
   if(eduStandard){
       params['eduStandard'] = eduStandard;
   }
   return await $fetch(apiUrl,{params : params});

}
export { useEdustandard, useCourse, useCourseProgram }
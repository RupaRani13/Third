// const storeEdustandard = () => useState<any>('eduStandard', () => null);
async function useEdustandard() {
    const apiUrl = 'https://demo02.institute.org.in/api/webber/edustandard';
   return await $fetch(apiUrl);
}
async function useCourse() {
    const apiUrl = 'https://demo02.institute.org.in/api/webber/course';
   return await $fetch(apiUrl);
}
export { useEdustandard, useCourse }
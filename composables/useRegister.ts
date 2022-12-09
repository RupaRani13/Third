

async function useAdmissionSettings() {
    const apiUrl = 'https://demo02.institute.org.in/api/public/data/admission-setting'
    const data: Object = await $fetch(apiUrl)
    return data
}
export {useAdmissionSettings} 
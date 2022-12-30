async function usedummytesti() {
    const apiUrl = 'https://demo02.institute.org.in/api/webber/testimonial' 
    const data = await $fetch(`${apiUrl}`)
    return data;
}
export {usedummytesti}
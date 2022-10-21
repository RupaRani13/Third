
export default async function (id) {
    const apiUrl = 'https://demo02.institute.org.in/api/testment/webfront/data/slider/'
    const data = await $fetch(`${apiUrl}${id}`)
    return data;
}
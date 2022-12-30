 async function uselogin(userData) {
    const apiUrl = 'https://demo02.institute.org.in/api/public/send-otp'
     
    const data = await $fetch(`${apiUrl}`,{method:'POST',body: userData })
    return data;
}
export {uselogin}

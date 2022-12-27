    const authToken = ref(null);
    const user = ref(null);
    function useGetLoginDetails() {
        authToken.value = localStorage.getItem('authToken');
        user.value = JSON.parse(localStorage.getItem('user'));
        return { "authToken" : authToken, "user" : user }
    }   
    function useSetLoginDetails(token, user) {
        localStorage.setItem('authToken',token);
        localStorage.setItem('user', JSON.stringify(user));
    }
    function useRemoveLoginDetails() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        authToken.value = ref(null);
        user.value = ref(null);
    } 
export {useGetLoginDetails, useSetLoginDetails, useRemoveLoginDetails }
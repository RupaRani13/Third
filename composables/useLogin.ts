        const authToken = ref(null);
        const user = ref(null);    
    export default function(){
        if(!process.client) return

        function useSetLoginDetails(token, user) {
            localStorage.setItem('authToken',token);
            localStorage.setItem('user', JSON.stringify(user));
            authToken.value = localStorage.getItem('authToken');
            user.value = JSON.parse(localStorage.getItem('user'));
        } 
        function useGetLoginDetails() {
            if(!process.client) return
            authToken.value = localStorage.getItem('authToken');
            user.value = JSON.parse(localStorage.getItem('user'));
        } 
        function useRemoveLoginDetails() {
            if(!process.client) return
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            authToken.value = ref(null);
            user.value = ref(null);
        }
        useGetLoginDetails();
        return {authToken, user, useSetLoginDetails , useRemoveLoginDetails }
    } 


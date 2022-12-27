 
    export default function(){
        if(!process.client) return

        function useSetLoginDetails(token, user) {
            localStorage.setItem('authToken',token);
            localStorage.setItem('user', JSON.stringify(user));
        } 
        return {useSetLoginDetails }
    } 


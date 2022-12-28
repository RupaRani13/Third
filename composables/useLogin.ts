
 
    function useSetLoginDetails(token, user) {
        localStorage.setItem('authToken',token);
        localStorage.setItem('user', JSON.stringify(user));
    }

export {useSetLoginDetails }
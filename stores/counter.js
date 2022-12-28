import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
              user: '',
              token: '',
           }
  },

  actions: {
    logOut(){
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.$state.token = '';
      this.$state.user = '';
    },
    login(userData){
      $fetch(`https://demo02.institute.org.in/api/auth/signin`,{method:'POST',body: userData}).then(res=>{
        localStorage.setItem('authToken',res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.$state.token = res.token;
        this.$state.user = res.user;
      }).catch(e=>console.log(e))

    }
  },

})
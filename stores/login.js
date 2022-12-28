import { defineStore } from 'pinia';
export const useLoginStore = defineStore('counter', {
  state: () => {
    return { 
              user: null,
              token: null,
           }
  },
  getters : {
    isLogin : (state) => state.token ? true : false,
    firstName : (state) => state.user ? state.user.firstName : null,
  },
  actions: {
    logOut(){
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.token = '';
      this.user = '';
    },
    login(userData){
      $fetch(`https://demo02.institute.org.in/api/auth/signin`,{method:'POST',body: userData}).then(res=>{
        localStorage.setItem('authToken',res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.token = res.token;
        this.user = res.user;
      }).catch(e=>console.log(e))
    },
    getLocalStorageData(){
      if(process.client){
          if(localStorage.getItem('authToken')){
            this.token = localStorage.getItem('authToken')
          }
          if(localStorage.getItem('user')){
            this.user = JSON.parse(localStorage.getItem('user'));
          }
      }
    }
  },

})
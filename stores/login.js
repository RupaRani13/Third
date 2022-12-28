import { defineStore } from 'pinia';
export const useLoginStore = defineStore('counter', {
  state: () => {
    return { 
              user: null,
              token: null,

           }
  },
  getters : {
    isLogin : (state) => {if(state.token){ return true}else{ return false }},
    firstName : (state) => {if(state.user){ return state.user.firstName}else{ return null }},
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
    },
    getLocalStorageData(){
      if(process.client){
          if(localStorage.getItem('authToken')){
            this.$state.token = localStorage.getItem('authToken')
          }
          if(localStorage.getItem('user')){
            this.$state.user = JSON.parse(localStorage.getItem('user'));
          }
      }
    }
  },

})
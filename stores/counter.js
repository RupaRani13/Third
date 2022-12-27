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
    login(){
    localStorage.setItem('authToken',token);
    localStorage.setItem('user', JSON.stringify(user));
    console.log('Hello23');
    this.$state.token = '';
    this.$state.user = '';
    }
  },

})
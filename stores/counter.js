import { defineStore } from 'pinia'
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
    this.$state.token = '';
    this.$state.user = '';
    }
  },

})



// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     function increment() {
//       count.value++
//     }
  
//     return { count, increment }
//   })


   
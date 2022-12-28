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
    logIn(){
    localStorage.setItem('authToken',token);
    localStorage.setItem('user', JSON.stringify(user));
    this.$state.token = 'token';
    this.$state.user = 'user';
    }
 
}

})



// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     function increment() {
//       count.value++
//     }
  
//     return { count, increment }
//   })


   
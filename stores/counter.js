import { defineStore } from 'pinia'
<<<<<<< HEAD

// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return { count: 0 }
//   },

//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function increment() {
      count.value++
    }
  
    return { count, increment }
  })
=======
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


   
>>>>>>> a95fe66dc384a94f362f635aa4261b774223e535

import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
            count: 10,
              /* Initialize state from local storage to enable user to stay logged in */
              // loginDetails.value:''
              user: '',
              token: '',
           
           }
  },

  actions: {
    // increment() {
    //   // this.count++
    // },
    logOut(){
      debugger
      alert('1')
      this.loginDetails.value
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


   
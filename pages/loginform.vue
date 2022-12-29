<template>
  <v-main>
    <!-- <v-btn @click="counter.increment">Increate</v-btn> -->
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card>
           <v-card-text>
             <v-form @submit.prevent="logIn" >
               <v-text-field label="Enter your user name" name="name" v-model="userData.username" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
               </v-text-field>
               <v-text-field label="Enter your password" name="password" v-model="userData.password" prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?"  class="rounded-0" outlined>
               </v-text-field>
               <v-btn x-large block type="submit">Login</v-btn>
             </v-form>
           </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// import { useCounterStore } from '@/stores/counter'
// import { defineStore } from 'pinia'

export default {

// setup(){
//   const counter = useCounterStore();
//   const userData = ref(null);
//   userData.value = {}
//   userData.value.username="";
//   userData.value.password="";
//   const {useSetLoginDetails} = useLogin(); 
//   const signIn = ()=> {
//     $fetch(`https://demo02.institute.org.in/api/auth/signin`,{method:'POST',body: userData.value}).then(res=>{
//       counter.logIn()
//       useSetLoginDetails(res.token,res.user);
//       counter.$state.token = res.token;
//       counter.$state.user = res.user;
//     }).catch(e=>console.log(e))
//   };
//   const pinia = createPinia();
//   if(localStorage.getItem("user")){
//     pinia.state.value = JSON.parse(localStorage.getItem("user"));
//   }
//   watch(
//     () =>  pinia.state.value.user, //arrow function needed
//     (state) => {
//       localStorage.setItem('authToken', JSON.stringify(state))
//   },{ deep: true });
//   return {
//     userData, signIn, counter

//   } 


// },

methods: {


}
}
</script>

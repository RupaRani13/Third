<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card>
             <v-card-text>
               <v-form>
                 <v-text-field label="Enter your user name" name="name" v-model="userData.username" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
                 </v-text-field>
                 <v-text-field label="Enter your password" name="password" v-model="userData.password" prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?"  class="rounded-0" outlined>
                 </v-text-field>
                 <v-btn x-large block @click="signIn()">Login</v-btn>
               </v-form>
             </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app> 
</template>

<script>
export default {
  setup(){
    const userData = ref(null);
    userData.value = {}
    userData.value.username="";
    userData.value.password="";
    const signIn = ()=> {
      $fetch(`https://demo02.institute.org.in/api/auth/signin`,{method:'POST',body: userData.value}).then(res=>{
        useSetLoginDetails(res.token,res.user)
      }).catch(e=>console.log(e))
    } 
    return {
      userData, signIn

    } 
  },
  data() {

  },
  methods: {


  }
}
</script>
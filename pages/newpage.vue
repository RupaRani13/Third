<template>

  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <div v-if="!store.isLogin">
          <ui-tabs-design01 :list="tabArr" @activeIndex="(i) => index = i">
          </ui-tabs-design01>
          <v-card v-if="index == 0">
            <v-card-text>
              <v-form>
                <v-text-field label="Enter your user name" name="name" v-model="userData.username"
                  prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
                </v-text-field>
                <v-text-field label="Enter your password" name="password" v-model="userData.password"
                  prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?" class="rounded-0" outlined>
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-btn x-large block @click="store.login(userData)">Login</v-btn><br>
          
          </v-card>

          <v-card v-if="index == 1">
            <v-form>
              <v-text-field :disabled="store.otpSubmit" label="Enter your user name" name="name"
                v-model="userData.username" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
              </v-text-field>
              <v-text-field v-if="store.otpSubmit" label="Enter your otp" name="name" v-model="userData.otp"
                prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
              </v-text-field>
              <v-btn v-if="store.otpSubmit" @click="store.getOtp(userData.username)&&timerCount">Reset Otp  {{ timerCount }}</v-btn>
              <v-btn v-if="store.otpSubmit" @click="store.otpSubmit = false;">Reset Number</v-btn>
              
            </v-form>
            <v-btn v-if="!store.otpSubmit" x-large block @click="store.getOtp(userData.username)">Send otp</v-btn><br>
            <v-btn v-if="store.otpSubmit" x-large block @click="store.loginViaOtp(userData.otp)">Submit</v-btn><br>
          </v-card>
        </div>
        <v-card v-if="store.isLogin">
          <v-card-text text="You are alredy logged in">
            <span v-if="store.firstName">Hello, {{ store.firstName }}!!</span><br>
            <v-btn v-if="store.firstName" @click="store.logOut" class="bg-grey mr-2 text-lowercase" color="white" ripple
              density="compact" elevation="1" variant="text">
              <v-icon icon="mdi-login-variant" class="mr-2"></v-icon>
              Logout
            </v-btn>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
import { useLoginStore } from '@/stores/login'
export default {
  async setup() {
    const store = useLoginStore();

    const userData = ref(null);
    userData.value = {}
    userData.value.username = "";
    userData.value.password = "";
    userData.value.otp = "";
    return {
      userData, store,
    }
  },
  data() {
    return {
      timerCount: 30,
      tabArr: ['Login with Password', 'Login with OTP'],
      index: 0,
    }
  },
  methods: {
 
    // getOtp(userName){
    //   const myData = {'username' : userName}
    //   const apiUrl = 'https://demo02.institute.org.in/api/public/send-otp'
    //   $fetch(`${apiUrl}`,{method:'POST',body: myData }).then(res=>{
    //     this.otpSubmit = true;
    //     this.loginWithOtpDetails.user = res.user.id;
    //     this.loginWithOtpDetails.id = res.id;
    //     debugger
    //   }).catch(e=>console.log(e))
    // },
    // loginViaOtp(otp){
    //   this.loginWithOtpDetails.otp=otp;
    //   $fetch("https://demo02.institute.org.in/api/public/varify",{method:'POST',body: this.loginWithOtpDetails }).then(res=>{
    //     console.log(res)
    //     localStorage.setItem("authToken", res.token)
    //     localStorage.setItem("user", JSON.stringify(res.user))

    //     debugger
    //   }).catch(e=>console.log(e))
    // }
  },
  watch: {
    timerCount: {
      handler(value) {
     
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
            console.log(this.store.otpSubmit)
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }


}
</script>
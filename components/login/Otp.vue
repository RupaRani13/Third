<template>
    <v-form v-if="!store.isLogin">
        <v-card-title class="text-center bg-success mb-5">Login</v-card-title>
        <template v-if="!otpPage">
            <v-text-field v-model="userData.username" label="Enter your user name" prepend-inner-icon="mdi-account"
                type="text" class="rounded-0" outlined>
            </v-text-field>
            <v-btn variant="outlined" color="success" x-large block @click="getOtp()">Send OTP</v-btn>
            <v-divider class="m-4"></v-divider>
        </template>
        <template v-else>
            <div style="position :relative;">
                <v-text-field :disabled="otpPage" v-model="userData.username" label="Enter your user name"
                    prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
                </v-text-field>
                <v-btn v-if="otpPage" class="re-enter-username" color="success" @click="otpPage = false" flat
                    density="compact">Re-Enter</v-btn>
            </div>
            <v-text-field label="OTP" v-model="userData.otp" prepend-inner-icon="mdi-lock" type="text" class="rounded-0"
                outlined>
                <template v-slot:append-inner>
                    <v-badge v-if="showTimer" class="timer" color="success" :content="timer" inline></v-badge>
                    <v-btn color="success" :disabled="showTimer" @click="getOtp()" flat
                        density="compact">Resend</v-btn>
                </template>
            </v-text-field>
            <v-btn variant="outlined" color="success" x-large block
                @click="store.loginViaOtp(userData)">Login</v-btn><br>
        </template>
        <v-divider class="m-4"></v-divider>
        <v-card-text>
            <div class="d-flex justify-end align-center">
                Login With Password?
                <nuxt-link to="login">
                    <v-btn class="pa-0 ma-0" color="primary" variant="plain" density="compact">Login </v-btn>
                </nuxt-link>
            </div>
            <div class="d-flex justify-end align-center">
                Don't have an account yet?
                <nuxt-link to="signup">
                    <v-btn class="pa-0" color="alert" variant="plain" density="compact">Sign Up</v-btn>
                </nuxt-link>
            </div>
        </v-card-text>
    </v-form>
    <div class="pa-6" v-else>
        <h1 class="text-h4">You are login as <span class="text-capitalize text-success">{{ store.firstName }} !!</span>
        </h1>
        <h2 class="text-h6">Sign in from another user <v-btn size="small" density="comfortable" color="success" ripple
                @click="store.logOut()">Logout</v-btn></h2>
    </div>
</template>
<script>
import { useLoginStore } from '@/stores/login';
import { useSnackbar } from '@/stores/snackbar';

export default {

    setup() {
        const snackbar=useSnackbar();
        const store=useLoginStore();
        const otpPage=ref(false);
        const timer=ref(30);
        const showTimer=ref(false);
        const showPsd=ref(false);
        const userData=reactive({
            username: '',
            otp: '',
            verifyOption: 'mobile',
            user: '',
            id: ''
        });
        function getOtp() {
            if(!userData.username) {
                snackbar.showSnackbar("username is required");
                return
            }
            const myData={ 'username': userData.username }
            const apiUrl='https://demo02.institute.org.in/api/public/send-otp23'
            $fetch(`${apiUrl}`, { method: 'POST', body: myData }).then(res => {
                this.otpPage=true;
                snackbar.showSnackbar('OTP send to your registered Mobile Number');
                userData.user=res.user.id;
                userData.id=res.id;
                runTimer()
                }).catch(e => {
                    this.otpPage=true;
                    runTimer();
                    if (e.data&&e.data.message) snackbar.showSnackbar(e.data.message);
                    console.log(e)
                }
            )
        };
        function runTimer(){
            const interval = setInterval(()=>{
                if(timer.value>0&&otpPage.value){
                    showTimer.value = true
                    timer.value--;
                    console.log(timer.value);
                }else{
                    clearInterval(interval);
                    showTimer.value = false
                    timer.value=30;
                    console.log('timer stopped')
                }
            },1000)
        } 
        return {
            userData, store, showPsd, otpPage, getOtp, showTimer, timer
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.re-enter-username {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    right: 12px;
}
.timer{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }

a {
    text-decoration: none;
}
</style>
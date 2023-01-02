<template>
    <v-form>
        <v-card-title class="text-center bg-success">Reset Password</v-card-title>
        <template v-if="!otpPage">
            <v-text-field label="Enter your user name" v-model="userData.username"
                prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
            </v-text-field>
            <v-btn class="float-right" flat density="compact" @click="$emit('goToLogin')">Login? </v-btn>
            <v-btn x-large block @click="getResetPsdOtp()">Send OTP</v-btn><br>
        </template>
        <template v-else>
            <v-text-field :disabled="otpPage" v-model="userData.username" label="Enter your user name" 
                prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
            </v-text-field>
            <v-text-field label="OTP" v-model="userData.otp" prepend-inner-icon="mdi-lock" type="text" class="rounded-0" outlined>
                <template v-slot:append-inner>
                    <v-badge v-if="showTimer" class="timer" color="success" :content="timer" inline></v-badge>
                    <v-btn color="success" :disabled="showTimer" @click="getResetPsdOtp()" flat density="compact">Resend</v-btn>
                </template>
            </v-text-field>

            <v-text-field label="New Password" v-model="userData.newPassword"
                prepend-inner-icon="mdi-lock" type="text" class="rounded-0" outlined>
            </v-text-field>
            <v-text-field label="Confirm Password" name="name" v-model="userData.confirmPassword"
                prepend-inner-icon="mdi-lock" type="text" class="rounded-0" outlined>
            </v-text-field>
            <v-btn class="float-right" flat density="compact" @click="$emit('goToLogin')">Login? </v-btn>
            <v-btn x-large @click="otpPage=false">Reset UserName</v-btn><br>
            <v-btn x-large @click="setNewPsd()">Submit</v-btn><br>
        </template>
    </v-form>
</template>

<script>
    import { useSnackbar } from '@/stores/snackbar'

    export default {
        setup(props, { emit }){
            const snackbar = useSnackbar();
            const otpPage = ref(false);
            const timer = ref(30);
            const showTimer= ref(false);
            const userData= reactive({
                username : null,
                newPassword : null,
                confirmPassword : null,
                id : null,
                otp : null
            });
            async function getResetPsdOtp() {
                $fetch(`https://demo02.institute.org.in/api/public/user/sent-reset-password-otp`, { method: 'POST', body: {username:userData.username} }).then((res)=>{
                    otpPage.value = true;
                    runTimer();
                    userData.id = res.id;
                    snackbar.showSnackbar('OTP send to your registered Mobile Number');

                }).catch(e=>{
                    if(e.data&&e.data.message) snackbar.showSnackbar(e.data.message)
                })
            };
            async function setNewPsd() {
                const data = {
                    newPassword: userData.newPassword,
                    confirmPassword: userData.confirmPassword,
                    id: userData.id,
                    otp: userData.otp
                }
                $fetch(`https://demo02.institute.org.in/api/public/user/reset-password`, { method: 'POST', body: data}).then((res)=>{
                console.log(res);
                snackbar.showSnackbar('Password changed successfully')
                emit('goToLogin');
                }).catch(e=>console.log(e))
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
            return {userData, otpPage, getResetPsdOtp, setNewPsd, runTimer, showTimer, timer}
        },
        data(){
        },
        methods : {

        },
        // watch: {
        //     otpPage(newVal, oldVal) {
        //         if(newVal==true){
        //             this.runTimer()
        //         }
        //     }
        // },


    }
        
</script>

<style scoped>
    .timer{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }

</style>
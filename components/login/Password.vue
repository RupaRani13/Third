<template>
    <v-form v-if="!store.isLogin">
        <template v-if="!resetPsd">
            <v-card-title class="text-center bg-success">Login</v-card-title>
            <v-text-field label="Enter your user name" name="name" v-model="userData.username"
                prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
            </v-text-field>
            <v-text-field label="Enter your password" name="password" v-model="userData.password"
                prepend-inner-icon="mdi-lock" :type="!showPsd? 'password' : 'text'" class="rounded-0" outlined :append-inner-icon="showPsd? 'mdi-eye' : 'mdi-eye-off'" @click:appendInner="showPsd=!showPsd">
            </v-text-field>
            <v-btn class="float-right" flat density="compact" @click="resetPsd=true">Forget password ? </v-btn>
            <v-btn x-large block @click="store.login(userData, '/')">Login</v-btn><br>
        </template>
        <template v-if="resetPsd">
            <LoginResetPsd @goToLogin="resetPsd=false"></LoginResetPsd>
        </template>
    </v-form>
    <div class="pa-6" v-else>
        <h1 class="text-h4">You are login as <span class="text-capitalize text-success">{{ store.firstName }} !!</span></h1>
        <h2 class="text-h6">Sign in from another user <v-btn size="small" density="comfortable" color="success" ripple @click="store.logOut()">Logout</v-btn></h2>
    </div>
</template>
<script>
    import { useLoginStore } from '@/stores/login'

    export default {
        setup(){
            const showPsd = ref(false);
            const resetPsd = ref(false);
            const store = useLoginStore();
            const userData = ref(null);
            userData.value = {}
            userData.value.username = "";
            userData.value.password = "";
            return {
            userData, store, showPsd, resetPsd
            }
        },
        methods : {
        }    
    }
</script>

<style>

</style>
<template>
    <div style="height: 32px">
    <v-system-bar  style="padding: 0 50px" window color="blue-lighten-4">

        <v-btn :href="`tel:${websiteData.contactNumber[0]}`" class="bg-grey mr-2" color="white" ripple density="compact" flat v-if="websiteData&&websiteData.contactNumber&&websiteData.contactNumber[0]" variant="text">
            <v-icon icon="mdi-phone-in-talk" class="mr-2"></v-icon>
            {{websiteData.contactNumber[0]}}
        </v-btn>
        <v-btn :href="`tel:${websiteData.contactNumber[1]}`" class="bg-grey mr-2" color="white"  ripple density="compact" v-if="websiteData&&websiteData.contactNumber&&websiteData.contactNumber[0]" variant="text">
            <v-icon icon="mdi-phone-in-talk" class="mr-2"></v-icon>
            {{websiteData.contactNumber[0]}}
        </v-btn>
        <v-btn :href="`mailto:${websiteData.email[0]}`" class="bg-grey lighten-2 mr-2 text-lowercase" color="white" ripple density="compact" v-if="websiteData&&websiteData.contactNumber&&websiteData.email[0]" variant="text">
            <v-icon icon="mdi-email" class="mr-2"></v-icon>
            {{websiteData.email[0]}}
        </v-btn>
        <v-btn :href="`mailto:${websiteData.email[1]}`" class="bg-grey mr-2 text-lowercase" color="white" ripple density="compact" elevation="1" v-if="websiteData&&websiteData.contactNumber&&websiteData.email[1]" variant="text">
            <v-icon icon="mdi-email" class="mr-2"></v-icon>
            {{websiteData.email[1]}}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="!login" class="bg-grey mr-2 text-lowercase" color="white" ripple density="compact" elevation="1" variant="text">
            <v-icon icon="mdi-account-plus" class="mr-2"></v-icon>
            Register
        </v-btn>
        <v-btn v-if="!login" class="bg-grey mr-2 text-lowercase" color="white" ripple density="compact" elevation="1" variant="text">
            <v-icon icon="mdi-login-variant" class="mr-2"></v-icon>
            Login
        </v-btn>
        <span v-if="login">Hello, {{ name }}!!</span>
        <v-btn v-if="login" @click="logOut()" class="bg-grey mr-2 text-lowercase" color="white" ripple density="compact" elevation="1" variant="text">
            <v-icon icon="mdi-login-variant" class="mr-2"></v-icon>
            Logout
        </v-btn>
        </v-system-bar>
    </div>


</template>

<script>
export default {
    async setup() {
        const websiteData=await useWebsiteData('5f8ff2901c6863595640aa75');
        const loginDetails = ref(null);
        const login = ref(false);
        const name = ref(null)
        if(process.client){
            loginDetails.value = useGetLoginDetails();
            if(loginDetails.value.authToken){
                login.value = true;
            }
            if(loginDetails.value.user&&loginDetails.value.user.firstName){
                name.value = loginDetails.value.user.firstName;
            }
        }
        const logOut = () => {
            useRemoveLoginDetails();
        }
        return {
            websiteData, login, name, logOut
        };
    },

}


</script>

<style scoped>
</style>
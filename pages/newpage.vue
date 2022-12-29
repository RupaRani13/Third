<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card v-if="!store.isLogin">
          <v-card-text>
            <v-form>
              <v-text-field label="Enter your user name" name="name" v-model="userData.username"
                prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined>
              </v-text-field>
              <v-text-field label="Enter your password" name="password" v-model="userData.password"
                prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?" class="rounded-0" outlined>
              </v-text-field>
              <v-btn x-large block @click="store.login(userData)">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
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
  setup() {
    const store = useLoginStore();
    const userData = ref(null);
    userData.value = {}
    userData.value.username = "";
    userData.value.password = "";
    return {
      userData, store
    }
  },
  data() {
  
  }
}
</script>
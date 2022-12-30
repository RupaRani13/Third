<template>
    <div>
        <v-btn @click="showData">see more</v-btn>
<!-- <p >Child {{myprop}}</p> -->
<!-- <dummychild-1 :xyz="myprop"></dummychild-1> -->
    </div>
</template>

<script>
    export default {
        props:{
            myprop:{
                type : String,

            }
        },
        data(){
            return{
      
            }
        },
     
        methods:{
            showData(){
                this.$emit('showMsg',23)
            } 
        }
    }
</script>

<style  scoped>

</style>
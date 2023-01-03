<template>
    <div>
        <!-- <v-btn @click="showData">see more</v-btn> -->
        <!-- <p >Child {{myprop}}</p> -->
        <!-- <dummychild-1 :xyz="myprop"></dummychild-1> -->
        <p  @change='sentOpcao()'>hello</p>        
        <v-btn @click="showData(20)">see more</v-btn>
    </div>
</template>

<script>
    export default {
        setup(props, {emit}){
            const newVal = 20
            // function showData(){
            //     emit('showMsg',23,12,10, newVal)
            // }
            const showData = (abc) => {
                emit('showMsg',23,12,newVal, abc)
            }
            return {
                showData
            }

        },
        props:{
            myprop:{
                type : String,

            }
        },
        data(){
            return{
                myValue: 20,
      
            }
        },
     
        methods:{
            // showData(){
            //     this.$emit('showMsg',23,12,10, this.myValue)
            // } 
            sentOpcao(){
            this.$emit('opcao-emit', 1)
            }
        }
    }

</script>

<style  scoped>

</style>
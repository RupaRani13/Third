<template>
    <div>
        <!-- <v-btn @click="showData">see more</v-btn> -->
        <!-- <p >Child {{myprop}}</p> -->
        <!-- <dummychild-1 :xyz="myprop"></dummychild-1> -->
        <p  @change='sentOpcao()'>hello</p>
    </div>
</template>

<script>
export default {
    setup() {
   
    },
    props: {
        myprop: {
            type: String,
        }
    },
    data() {
        return {

        }
    },

    methods: {
        // showData() {
        //     this.$emit('showMsg', 23)
        // },
        sentOpcao(){
           this.$emit('opcao-emit', 1)
        }

    }
}
</script>

<style  scoped>

</style>
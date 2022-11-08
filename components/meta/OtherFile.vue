<template>
    <Head>
        <!-- <Script :children="gaCode"></Script> -->
        
    </Head>

</template>

<script>
export default {
    async setup(){
        const data = await useWebsiteData('5f8ff2901c6863595640aa75');
        const gaCode = data.gaCode;
        const gmCode = data.gmCode;
        // const gmCode = {type : "text/javascript" ,  xvy :"hbdhasbdhasd"};
        console.log(gaCode)
        return {gaCode, gmCode}
    },
    // head() {
    //     return {
    //         script: [
    //             {
    //                 src: 'https://code.jquery.com/jquery-3.5.1.min.js'
    //             }
    //         ],
    //     }
    // }
}

</script>

<style scoped>

</style>

<template>
    <Head>
        <Script :children="gaCode"></Script>
    </Head>
</template>

<script>
export default {
    async setup(){
        const gaCode = ref(null);
        const data = await useWebsiteData('5f8ff2901c6863595640aa75');
        gaCode.value = data.gaCode;
        gaCode.value = `<\/script>${gaCode.value}<script>`;
        return {gaCode}
    },
}

</script>

<style scoped>

</style>

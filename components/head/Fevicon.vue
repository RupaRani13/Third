<template>
    <Head>
        <Meta name="msapplication-square" :content="favicon" />
        <Link rel="icon" type="image/x-icon" :href="favicon" />
        <Link rel="apple-touch-icon" :href="favicon" />  
    </Head>

</template>
<script>
export default {
    async setup(){
        const data = await useWebsiteData('5f8ff2901c6863595640aa75');
        const favicon = data.favicon;
        return {favicon}
    }
}
</script>

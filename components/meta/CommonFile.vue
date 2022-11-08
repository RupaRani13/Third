<template>
    <Head>
        <Meta name="msapplication-square" :content="favicon" />
        <Link rel="icon" type="image/x-icon" :href="favicon" />
        <Link rel="apple-touch-icon" :href="favicon" />
        <Script async type="text/javascript">{{gaCode}}</Script>

        <Script src='https://code.jquery.com/jquery-3.5.1.min.js'></Script>
        
    </Head>

</template>
<script>
export default {
    async setup(){
        const data = await useWebsiteData('5f8ff2901c6863595640aa75');
        const favicon = data.favicon;
        console.log(data);
        const gaCode = data.gaCode;
        return {favicon,gaCode}
    }
}
</script>

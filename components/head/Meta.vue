<template>
        <Head>
            <!-- {{$route}} -->
            <Meta http-equiv="content-type" content="text/html; charset=UTF-8" />
            <Meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
            <Meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <Meta property='og:site_name' :content='title' />
            <Meta property='og:type' content='website' />
            <!-- title -->
            <Title>{{title}}</Title>
            <template v-if="metaTags.ogTitle">
                <Meta property="og:title" :content="metaTags.ogTitle" />
                <Meta name="twitter:title" :content="metaTags.ogTitle" />
            </template>
            <template v-else>
                <Meta property="og:title" :content="title" />
                <Meta name="twitter:title" :content="title" />
            </template>
            <!-- url -->
            <Link rel='canonical' :href="url" />
            <Meta property='og:url'  :content="url" />
            <Meta name='twitter:url' :content="url" />
            <!-- description -->
            <template v-if="metaTags.ogDescription">
                <Meta name='description' :content='metaTags.ogDescription' />
                <Meta property='og:description' :content='metaTags.ogDescription' />
                <Meta name='twitter:description' :content='metaTags.ogDescription' />
            </template>
            <!-- image -->
            <template v-if="metaTags.ogImage">
                <Meta property="og:image" :content="metaTags.ogImage" />
                <Meta name="twitter:image" :content="metaTags.ogImage" />
            </template>
            <!-- keywords -->
            <Meta v-if="metaTags.keywords" :content="metaTags.keywords" />
        </Head>
</template>
<script>
export default {
    async setup(){  
        const originUrl = ref(null);
        const fullPath = ref(null);

        if(process.server){
            const data = useRequestHeaders();
            originUrl.value = data.host
        }else{
            originUrl.value = window.location.origin
        }
        const route = useRoute();
        fullPath.value= route.fullPath;
        const url = ref(null);
        url.value= originUrl.value+fullPath.value;
        return {url} 
    },
    props : {
        title : {
            type : String
        },
        metaTags : {
            type : Object

        }
    }
}
</script>


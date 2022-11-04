<template>
        <Head>
            {{metaTags}}
            <Title>{{title}}</Title>
            <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <Meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <Meta http-equiv="content-type" content="text/html; charset=UTF-8" />
            <template v-if="metaTags">
                <Meta v-if="metaTags.keywords" :content="metaTags.keywords" />
                <Meta v-if="metaTags.ogTitle" property="og:title" :content="metaTags.ogTitle" />
                <Meta v-if="metaTags.ogDescription" property="og:description" :content="metaTags.ogDescription" />
                <Meta v-if="metaTags.ogImage" property="og:image" :content="metaTags.ogImage" />
            </template>


        </Head>
</template>
<script>
export default {
    async setup(props){
        
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


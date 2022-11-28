<template>
    <div>
        <HeadMeta :title="pageTitle" :metaTags="pageMetaTags"></HeadMeta>
        <template v-if="pageBlocks&&pageBlocks.length">
            <div v-for="item in pageBlocks" :key="item.id">
                <component :is="item.design" :blockContent="item" />
            </div>
        </template>
        <template v-else>
            <PagenotfoundDesign03></PagenotfoundDesign03>
        </template>
    </div>
</template>
<script>
export default {
    async setup() {
        const route = useRoute();
        const pageData = await usePageData(route.fullPath);
        const pageId = ref(null);
        const pageTitle = ref(null);
        const pageMetaTags = ref(null);
        if(pageData){
            pageId.value = pageData.id;
            pageTitle.value = pageData.title;
            pageMetaTags.value = pageData.metaTags;
        }
        const pageBlocks = shallowRef(null)
        if(pageId.value){
            pageBlocks.value = await usepageBlock(pageId.value);
            pageBlocks.value = pageBlocks.value.filter(item => {
                if (item.status == true) {
                    if (item.design=='D01') {
                        item['design'] = resolveComponent('pageblock/design01')
                    } else if (item.design=='D02'){
                        item['design'] = resolveComponent('pageblock/design02')
                    } else if (item.design=='D03'){
                        item['design'] = resolveComponent('pageblock/design03')
                    } else if(item.design=='D04'){
                        item['design'] = resolveComponent('pageblock/design04')
                    }else if(item.design=='D05'){
                        item['design'] = resolveComponent('pageblock/design05')
                    }else {
                        item['design'] = resolveComponent('pageblock/design01')
                    }
                    return true;
                }
            });
        }else{
            throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
        }
        return { pageBlocks, pageTitle, pageMetaTags };
    },
    data() {
        return {
            
        }
    }
}
</script>

<style >

</style>
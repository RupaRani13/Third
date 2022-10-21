<template>
    <div v-if="pageBlocks.length">
        <div v-for="item in pageBlocks" :key="item.id">
            <component :is="item.design" :blockContent="item" />
        </div>
    </div>
</template>
<script>
export default {
    async setup() {
        const route = useRoute();
        const pageData = await usePageData(route.fullPath);
        const pageBlocks = shallowRef(null);
        if(pageData){
            pageBlocks.value = await usepageBlock(pageData);
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
        }
        return { pageBlocks, pageData };
    },
    data() {
        return {
        }
    }
}
</script>

<style >

</style>
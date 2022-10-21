<template>
    <div>
        <v-container> 
            <component :is="design" :list="tabArr" @activeIndex="getCategoryId">
                <component :is="listDesign" :id="downloadCategoryId"></component>
            </component>
        </v-container>
    </div>
</template>

<script>
export default {
    async setup(props) {
        const listDesign = shallowRef(null);
        if(props.list){
            if (props.list&&props.list.includes('L01')) {
                listDesign.value = resolveComponent('download/list/design01')
            }
            else if (props.list&&props.list.includes('L02')) {
                listDesign.value = resolveComponent('download/list/design02')
            }
            else if (props.list&&props.list.includes('L03')) {
                listDesign.value = resolveComponent('download/list/design03')
            }
            else if (props.list&&props.list.includes('L04')) {
                listDesign.value = resolveComponent('download/list/design04')
            }
            else if (props.list&&props.list.includes('L05')) {
                listDesign.value = resolveComponent('download/list/design05')
            }
            else if (props.list&&props.list.includes('L06')) {
                listDesign.value = resolveComponent('download/list/design06')
            }
            else if (props.list&&props.list.includes('L07')) {
                listDesign.value = resolveComponent('download/list/design07')
            }
            else if (props.list&&props.list.includes('L08')) {
                listDesign.value = resolveComponent('download/list/design08')
            }
            else{
                listDesign.value = resolveComponent('download/list/design01')
            }
        }
        
        const downloadCategories=await useDownloadCategory()
        return { downloadCategories, listDesign }

    },
    props:{
        design:{
            required:true,
        },
        list:{
            required:true,
        }
    },
    data(){
        return {
            tabArr : [],
            downloadCategoryId : null,
        }

    },
    methods : {
        getCategoryId(index){
            this.downloadCategoryId = this.downloadCategories[index].id;
        }
    },
    created(){
        this.tabArr = this.downloadCategories.map(item=> item = item.title);
        this.downloadCategories.length ? this.downloadCategoryId = this.downloadCategories[0].id : this.downloadCategoryId = '';
    },

}
</script>

<style>

</style>

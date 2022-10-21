<template>
    <div>
        <v-container>
            <component :is="design" :list="tabArr" @activeIndex="getAlbumId">
                <component :is="photoDesign"  v-if="albumType=='PHOTO'" :id="albumId"></component>
                <component :is="videoDesign"  v-if="albumType=='VIDEO'" :id="albumId"></component>
            </component>
        </v-container>
    </div>
</template>

<script>
export default {
    async setup(props) {
        const photoDesign = shallowRef(null);
        const videoDesign = shallowRef(null);
        photoDesign.value = resolveComponent('gallery/photo/list')
        videoDesign.value = resolveComponent('gallery/video/list')
        const album = await useGalleryAlbum(props.albumType);
        return { album, photoDesign, videoDesign}
    },
    props : {
        albumType : {
            type : String,
        },
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
            albumId : null,
            albumListData : [],
        }
    },
    methods : {
        getAlbumId(index){
            this.albumId = this.album[index].id;
            
        },
    },
    created(){
        if(this.album&&this.album.length){
            this.tabArr = this.album.map(item=> item = item.title); //create array
        this.album.length ? this.albumId = this.album[0].id : this.albumId = '';
        }
    },


}
</script>

<style scoped>

</style>

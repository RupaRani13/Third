<template>
    <div id="downloadlistDesign01">
            <v-card v-if=" downloadList.list.length">
                <v-row class="px-5 pt-3 mb-2 heading-sec">
                    <v-col class="v-col-2 v-col-lg-1">
                        <h4>Index</h4>
                    </v-col>
                    <v-col>
                        <h4>Title</h4>
                    </v-col>
                    <v-col>
                        <h4>Category</h4>
                    </v-col>
                    <v-col>
                        <h4>Downloads</h4>
                    </v-col>
                </v-row>
                <v-row class="px-5 pb-5 content-item" v-for="(item, index) in downloadList.list" :key="index">
                    <v-col cols="1" class="index-item">
                        <h4> {{ index + 1 }}</h4>
                    </v-col>
                    <v-col>
                        <v-card-title>{{ item.title }}</v-card-title>
                    </v-col>
                    <v-col>
                        <h4>{{ item.category.title }}</h4>
                    </v-col>
                    <v-col>
                        <v-btn class="downmoad-btn">
                            <a :href="item.fileUrl" target="_blank">Download</a>
                        </v-btn>
                    </v-col>
                </v-row>

            </v-card>
            <v-card v-else>
                No Files Available  
            </v-card>

    </div>




</template>

<script>
export default {
    async setup(props) {
        const downloadList = reactive({ list: null })
        downloadList.list = await useDownload(props.id)
        return { downloadList }
    },
    props: {
        id: {
            type: String,
            default: '',
            required: false
        },
    },
    data() {
        return {
        }
    },
    methods: {

    },
    watch: {
        id: {
            async handler(value) {
                this.downloadList.list = await useDownload(value);
            },
        }
    },
    created() {
    }
}
</script>

<style>
#downloadlistDesign01 .heading-sec {
    background: var(--v-success);
    }
#downloadlistDesign01 .heading-sec h4{
    color: var(--v-background);
}
#downloadlistDesign01 .content-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#downloadlistDesign01 .downmoad-btn a{
text-decoration: none;
color: var(--v-success);
}
@media only screen and (max-width:475px)  {
    #downloadlistDesign01 .heading-sec{
      display: none;
    }
    #downloadlistDesign01 .content-item{
        display: block;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 20px; 
    }
    #downloadlistDesign01 .content-item .index-item{
      display: none;
    }
    #downloadlistDesign01 .v-card-title{
        font-size: 20px;
    }
    #photoAlbumDesign01 .v-btn__content{
        display: flex;
    }
}

</style>
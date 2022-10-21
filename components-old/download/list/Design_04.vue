<template>
    <div id="downloadlistDesign04"> 
        <v-card v-if=" downloadList.list.length">
            <v-row style="padding: 20px">
                <v-col class="v-col-lg-4" v-for="(item, index) in downloadList.list" :key="index">
                    <div class="serviceBox">
                        <v-card-title>{{ item.category.title }}</v-card-title>
                        <div class="service-icon">
                            <a :href="item.fileUrl" traget="_blank">
                                <v-icon>mdi-progress-download</v-icon>
                            </a>
                        </div>  
                        <h4 class="description">{{ item.title }}</h4>    
                    </div>
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
#downloadlistDesign04 .serviceBox {
    color: var(--v-background);
    background: var(--v-success);
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 0 0 30px;
    border-radius: 15px;
    position: relative;
    z-index: 1;
}
#downloadlistDesign04 .serviceBox:before {
    content: "";
    background: var(--v-background);
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 15px;
    box-shadow: 0 0 10px rgb(0 0 0 / 30%);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
}
#downloadlistDesign04 .serviceBox .v-card-title {
    background: var(--v-success);
    font-size: 19px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 20px 15px 22px;
    margin: 0;
    border-radius: 30px 30px 100% 100%;
    box-shadow: 0 6px 6px rgb(0 0 0 / 20%);
    position: relative;
    z-index: 1;
  
}
#downloadlistDesign04 .serviceBox .service-icon {
    font-size: 28px;
    padding: 15px 0px;

}
#downloadlistDesign04 .serviceBox .service-icon a{
    color: var(--v-success);
    text-decoration: none;
}
#downloadlistDesign04 .serviceBox .service-icon a:hover{
    display: inline-block;
    border-radius: 50%;
    box-shadow: 1px 1px 2px 2px var(--v-success);
   }
#downloadlistDesign04 .serviceBox .description {
    color: var(--v-surface-variant);
    font-size: 17px;
    line-height: 23px;
    margin: 0 25px;
    white-space: unset;
    text-overflow: unset;
    word-wrap: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 68px;
}
</style>
<template>
    <div id="downloadlistDesign05"> 
        <v-card v-if=" downloadList.list.length">
            <v-row style="padding: 20px">
                <v-col class="v-col-lg-4" v-for="(item, index) in downloadList.list" :key="index">
                    <div class="serviceBox">
                        <div class="service-icon">
                            <a :href="item.fileUrl" traget="_blank">
                                <v-icon>mdi-file-download-outline</v-icon>
                            </a>
                        </div>  
                        <div class="service-content">
                            <v-card-title>{{ item.title }}</v-card-title>
                            <h4 class="description">{{ item.category.title }}</h4>   
                        </div>  
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
  #downloadlistDesign05 .serviceBox {
    color:  var(--v-success);
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 0 0 30px 20px;
    position: relative;
}
#downloadlistDesign05 .serviceBox:before {
    content: "";
    border: 3px dotted  var(--v-success);
    border-top-style: solid;
    border-bottom-style: solid;
    border-right: none;
    border-radius: 30px 0 0 30px;
    position: absolute;
    width: 35%;
    top: 58px;
    bottom: 7px;
    left: 0;
}
#downloadlistDesign05 .serviceBox .service-icon {
    /* font-size: 24px;
    line-height: 78px;
    width: 100px;
    height: 100px; */
    font-size: 23px;
    line-height: 59px;
    width: 70px;
    height: 70px;
    margin: 0 auto 10px;
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);
    border: 3px solid  var(--v-success);
    position: relative;
}
#downloadlistDesign05 .serviceBox .service-icon a{
color: var(--v-success);
text-decoration: none;
}
#downloadlistDesign05 .serviceBox .service-content {
    padding: 20px 10px;
    border: 3px solid  var(--v-success);
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);    
}
#downloadlistDesign05 .serviceBox .service-content .v-card-title{
    white-space: unset;
    text-overflow: unset;
    word-wrap: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 68px;
    line-height: 1.2;
}
#downloadlistDesign05 .serviceBox .service-content:before,#downloadlistDesign05 .serviceBox .service-content:after {
    content: "";
    background:  var(--v-success);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 54px;
    left: 35%;
}

#downloadlistDesign05 .serviceBox .description {
    color: var(--v-surface-variant);
    font-size: 14px;
    line-height: 23px;
}
#downloadlistDesign05 .serviceBox .service-content:after {
    border-radius: 0;
    transform: rotate(45deg);
    top: auto;
    bottom: 4px;
}

@media only screen and (max-width:475px){
    #downloadlistDesign05 .serviceBox .service-content .v-card-title{
        height:auto
    }
}

</style>
<template>
    <div id="downloadlistDesign06"> 
        <v-card v-if=" downloadList.list.length">
            <v-row style="padding: 20px">
                <v-col class="v-col-lg-4" v-for="(item, index) in downloadList.list" :key="index">
                    <div class="serviceBox">
                        <div class="service-content">
                            <v-card-title>{{ item.category.title }}</v-card-title>
                            <h4 class="description">{{ item.title }}</h4>   
                        
                        <div class="service-icon">
                            <a :href="item.fileUrl" traget="_blank">
                                <v-icon>mdi-cellphone-arrow-down-variant
</v-icon>
                            </a>
                        </div>  
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
#downloadlistDesign06 .serviceBox {
    color: var(--v-background);
    text-align: center;
    padding: 25px 5px 30px 0;
    box-shadow: 15px 0 15px -15px rgb(0 0 0 / 50%) inset;
    position: relative;
}
#downloadlistDesign06 .serviceBox .service-content {
    background: linear-gradient(to left bottom,var(--v-background),var(--v-success));
    padding: 15px;
    border-radius: 0 30px 30px 0;
    box-shadow: 20px 0 20px -20px rgb(0 0 0 / 50%) inset;
}
#downloadlistDesign06 .serviceBox:after {
    content: "";
    background: var(--v-success);
    width: 20px;
    height: 20px;
    box-shadow: 20px 0 20px -20px rgb(0 0 0 / 50%) inset;
    position: absolute;
    bottom: 10px;
    left: 0;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
}
#downloadlistDesign06 .serviceBox .v-card-title {
    color: var(--v-success);
    background: var(--v-background);
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 15px 10px;
    margin: 0 -20px 20px -15px;
    border-radius: 0 30px 30px 0;
    box-shadow: 10px 0 10px -10px rgb(0 0 0 / 50%) inset, 5px 0 5px rgb(0 0 0 / 20%);
}
#downloadlistDesign06 .serviceBox .description {
    font-size: 15px;
    line-height: 24px;
    margin: 0 0 20px;
    color: var(--v-surface-variant);
    white-space: unset;
    text-overflow: unset;
    word-wrap: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 68px;
}
#downloadlistDesign06 .serviceBox .service-icon a{
    color: #fff;
    font-size: 30px;
    text-decoration: none;
}
#downloadlistDesign06 .serviceBox .service-icon a:hover{
    -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5); 
  background: transparent;
    display: inline-block;
}
.serviceBox:hover .service-icon i{
    transform: rotate(360deg);
    transition: all 0.3s;
}

</style>
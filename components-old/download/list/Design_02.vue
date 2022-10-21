<template>
    <div id="downloadlistDesign02"> 
        <v-card v-if=" downloadList.list.length">
            <v-row style="padding: 20px"    >
                <v-col class="v-col-lg-4" v-for="(item, index) in downloadList.list" :key="index">
                    <div class="serviceBox">
                        <div class="service-icon">
                            <a :href="item.fileUrl" traget="_blank">
                                <v-icon>mdi-download-circle-outline</v-icon>
                            </a>
                        </div>
                        <v-card-title>{{ item.title }}</v-card-title>
                        <h4 class="description">{{ item.category.title }}</h4>
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
#downloadlistDesign02 .serviceBox {
    color: var(--v-success);
    background-color: var(--v-success);
    font-family: 'Raleway', sans-serif;
    text-align: center;
    padding: 35px 15px 40px;
    margin: 0 10px;
    position: relative;
    z-index: 1;
}

#downloadlistDesign02 .serviceBox:before {
    content: '';
    background: repeating-linear-gradient(var(--v-background), var(--v-background) 15px, var(--v-on-surface-variant) 15px, var(--v-on-surface-variant) 30px);
    border-radius: 0 50px;
    box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    position: absolute;
    left: -10px;
    right: -10px;
    top: 20px;
    bottom: 20px;
    z-index: -1;
}

#downloadlistDesign02 .serviceBox .service-icon {
    font-size: 50px;
    margin: 0 0 15px;
}
#downloadlistDesign02 .serviceBox .service-icon a{
  color:var(--v-success);
  text-decoration: none;
}

#downloadlistDesign02 .serviceBox .v-card-title {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 0 0 10px;
}

#downloadlistDesign02 .serviceBox .description {
    color: var(--v-surface-variant);
    font-size: 14px;
    line-height: 25px;
    margin: 0;
}
#downloadlistDesign02 .serviceBox .v-card-title{
    white-space: unset;
    text-overflow: unset;
    word-wrap: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 68px;
   
 
}

@media only screen and (max-width: 1199px) {
    #downloadlistDesign02 .serviceBox {
        margin: 0 10px 40px;
    }
}
</style>
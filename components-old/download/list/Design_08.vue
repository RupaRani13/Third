<template>
    <div id="downloadlistDesign08">
        <v-card v-if=" downloadList.list.length">
            <v-row style="padding: 20px">
                <v-col class="v-col-lg-3 v-col-md-6 v-col-sm-6" v-for="(item, index) in downloadList.list" :key="index">
                    <div class="serviceBox">
                        <div class="service-icon">
                                <a :href="item.fileUrl" traget="_blank">
                                    <v-icon>mdi-download-outline
                                    </v-icon>
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
#downloadlistDesign08 .serviceBox {
    color:var(--v-success);
    background-color: #fff;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    padding: 0 25px 30px;
    position: relative;
    z-index: 1;
}
#downloadlistDesign08 .serviceBox:before,#downloadlistDesign08 .serviceBox:after {
    content: "";
    background: #fff;
    border-radius: 15px 15px;
    box-shadow: 0 0 15px rgb(0 0 0 / 20%);
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    z-index: -1;
}
#downloadlistDesign08 .serviceBox .service-icon {
    color: #fff;
    background: var(--v-success);
    font-size: 45px;
    width: 75%;
    margin: 0 auto 35px;
    border-radius: 0 0 50px 50px;
    position: relative;
}
#downloadlistDesign08 .serviceBox .service-icon a{
    text-decoration: none;
    color: var(--v-background);
    font-size: 27px;
}
#downloadlistDesign08 .serviceBox .service-icon a:hover{
    background: transparent;
    display: inline-block;
    box-shadow: 0px 0px 5px 5px var(--v-background);
    border-radius: 50%;
}
#downloadlistDesign08 .serviceBox .service-icon:before, #downloadlistDesign08 .serviceBox .service-icon:after {
    content: "";
    background: linear-gradient(to top left, var(--v-success) 49%, transparent 50%);
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    left: -10px;
}
#downloadlistDesign08 .serviceBox .service-icon:after {
    background: linear-gradient(to top right, var(--v-success) 49%, transparent 50%);
    left: auto;
    right: -10px;
}
#downloadlistDesign08 .serviceBox .v-card-title {
    font-size: 16px;
  line-height: 1.4;
    text-transform: uppercase;
    margin: 0 0 10px;
    white-space: unset;
    text-overflow: unset;
    word-wrap: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 56px;
}
#downloadlistDesign08 .serviceBox .description {
    color: #555;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 25px;
}
#downloadlistDesign08 .serviceBox:after {
    background-color:var(--v-success);
    height: 50%;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
}
</style>
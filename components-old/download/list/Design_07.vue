<template>
    <div id="downloadlistDesign07">
        <v-card v-if=" downloadList.list.length">
            <v-row style="padding: 20px">
                <v-col class="v-col-lg-3 v-col-md-6 v-col-sm-6" v-for="(item, index) in downloadList.list" :key="index">
                    <div class="serviceBox">
                        <div class="service-content">
                            <div class="service-icon">
                                <a :href="item.fileUrl" traget="_blank">
                                    <v-icon>mdi-download-circle-outline
                                    </v-icon>
                                </a>
                            </div>
                            <v-card-title>{{ item.category.title }}</v-card-title>
                            <h4 class="description">{{ item.title }}</h4>
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
#downloadlistDesign07 .serviceBox {
    color: #666;
    background: linear-gradient(to right, #01871c 49%, var(--v-success) 50%);
    font-family: 'Raleway', sans-serif;
    text-align: center;
    padding: 2px 10px 12px;
    border-radius: 150px 0 50px 50px;
    transition: all 0.3s ease 0s;
}

#downloadlistDesign07 .serviceBox .service-content {
    background:linear-gradient(to top left, #fff, #ffffffa3, rgba(255, 255, 255, 0.8));
    padding: 20px 13px;
    border-radius: 0 130px 50px 50px;
    box-shadow: 3px 3px 5px rgb(0 0 0 / 40%);
}

#downloadlistDesign07 .serviceBox .service-icon {
 
    font-size: 50px;
    margin: 0 0 10px 0;
}
#downloadlistDesign07 .serviceBox .service-icon a{
    text-decoration: none;
    font-size: 25px;
    color: var(--v-background);
   
}
#downloadlistDesign07 .serviceBox .service-icon a:hover{
    -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5); 
  background: transparent;
    display: inline-block;
}
#downloadlistDesign07 .serviceBox .v-card-title {
    color: var(--v-surface-variant);
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 10px;
}

#downloadlistDesign07 .serviceBox .description {
    font-size: 15px;
    line-height: 25px;
    white-space: unset;
    text-overflow: unset;
    word-wrap: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 56px;
}
</style>
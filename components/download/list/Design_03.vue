<template>
    <div id="downloadlistDesign03"> 
        <v-card v-if=" downloadList.list.length">
            <v-row style="padding: 20px">
                <v-col class="v-col-lg-4" v-for="(item, index) in downloadList.list" :key="index">
                    <div class="serviceBox">
                        <v-card-title>{{ item.title }}</v-card-title>
                        <h4 class="description">{{ item.category.title }}</h4>
                        <div class="service-icon">
                            <a :href="item.fileUrl" traget="_blank">
                                <v-icon>mdi-tray-arrow-down</v-icon>
                            </a>
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
#downloadlistDesign03 .serviceBox {
    color: var(--v-surface-variant);
    background: radial-gradient(transparent,var(--v-on-surface-variant));
    font-family: 'Raleway', sans-serif;
    text-align: center;
    padding: 50px 15px 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 0px rgb(0 0 0 / 20%);
    overflow: hidden;
    position: relative;
}
#downloadlistDesign03 .serviceBox:before {
    content: "";
    background: var(--v-success);
    width: 150px;
    height: 150px;
    box-shadow: 5px 5px 5px 0px rgb(0 0 0 / 15%);
    transform: rotate(45deg);
    position: absolute;
    top: -85px;
    left: -85px;
}
#downloadlistDesign03 .serviceBox .v-card-title {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 0 0 10px;
    white-space: unset;
    text-overflow: unset;
    word-wrap: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 68px;
}
#downloadlistDesign03 .serviceBox .v-card-title:after {
    content: '';
    border-top: 5px dotted var(--v-success);
    height: 3px;
    width: 100px;
    margin: 11px auto 0;
    display: block;
    clear: both;
}
#downloadlistDesign03 .serviceBox .description {
    color:var(--v-surface-variant);
    font-size: 15px;
    line-height: 25px;
    margin: 0 0 15px;
}
#downloadlistDesign03 .serviceBox .service-icon a{
    color: var(--v-success);
    font-size: 45px;
    line-height: 45px;
    text-decoration: none;
}
</style>
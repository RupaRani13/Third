<template>
    <div v-if="news.length" id="notification-d01">
        <v-container class="bg-success pa-0 d-flex align-center" fluid>
            <v-btn class="d-none d-sm-inline-block" flat :rounded="0" style="cursor:default">
                {{news.length>0&&id ? news[0].category.title : 'All Notifications'}}
            </v-btn>
            <marquee v-if="news.length" class="d-inline-block mx-2" onmouseover="this.stop()" onmouseout="this.start();" direction="left">
                <template v-for="(item,index) in news" :key="item.id">
                    <v-btn v-if="item.targetUrl" text flat :href="item.targetUrl" target="_blank"
                        class="me-1 bg-transparent">
                        <v-icon icon="mdi-hand-pointing-right" class="me-1"></v-icon>
                        {{item.title}}
                    </v-btn>
                    <template v-else-if="item.featuredImage || item.htmlContent">
                        <v-btn @click="openDialog(index)" text flat class="me-1 bg-transparent">
                            <v-icon icon="mdi-hand-pointing-right" class="me-1"></v-icon>
                            {{item.title}}
                            <UiDialogDesign01 v-if="item.featuredImage" v-model="newsDialog[index]" :image="item.featuredImage"></UiDialogDesign01>
                            <UiDialogDesign01 v-else v-model="newsDialog[index]" :htmlContent="item.htmlContent" :heading="item.title"></UiDialogDesign01>
                        </v-btn>
                    </template>
                    <v-btn v-else text flat class="me-1 bg-transparent">
                        <v-icon icon="mdi-information-outline" class="me-1"></v-icon>
                        {{item.title}}
                    </v-btn>
                </template>
            </marquee>
        </v-container>
    </div>
</template>

<script>
export default {
    async setup(props) {
        const news=await useNews(props.id);
        return {
            news,
        };
    },
    props: {
        id : {
            type: String,
            default : null,
            required : false,
        }
    },
    data() {
        return {
            newsDialog: {},
            
        }
    },

    methods: {
        openDialog(index){
            this.newsDialog = {};
            this.newsDialog[index]=true;
        }
    }

}
</script>

<style >
   #notification-d01 marquee .v-btn .v-btn__content {
    max-width: 600px;
    text-align: start;
    justify-content: space-around;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    }

</style>
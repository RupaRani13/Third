<template>
    <div>
        <v-container id="notification-d03" class="d-flex align-center" fluid>
            <v-card width="100%">
                <v-card-title class="bg-primary">
                    {{news[0].category.title}}
                </v-card-title>
                <v-card-text>
                    <marquee v-if="news.length" class="d-inline-block mx-2" onmouseover="this.stop()" onmouseout="this.start();" direction="up">
                        <template v-for="(item,index) in news" :key="item.id">
                            <v-btn v-if="item.targetUrl" text flat :href="item.targetUrl" target="_blank"
                                class="me-1 bg-transparent d-flex justify-start px-1 px-sm-3">
                                <v-icon icon="mdi-file" color="primary" size="large" class="me-1"></v-icon>
                                {{item.title}}
                            </v-btn>
                            <template v-else-if="item.featuredImage|| item.htmlContent">
                                <v-btn @click="openDialog(index)" text flat class="me-1 bg-transparent d-flex justify-start px-1 px-sm-3">
                                    <v-icon v-if="item.featuredImage" color="primary" size="large" icon="mdi-file-image" class="me-1"></v-icon>
                                    <v-icon v-else icon="mdi-message-reply-text" color="primary" size="large" class="me-1"></v-icon>
                                    {{item.title}}
                                    <UiDialogDesign01 v-if="item.featuredImage" v-model="newsDialog[index]" :image="item.featuredImage"></UiDialogDesign01>
                                    <UiDialogDesign01 v-else v-model="newsDialog[index]" :htmlContent="item.htmlContent" :heading="item.title"></UiDialogDesign01>
                                </v-btn>
                                </template>
                            <v-btn v-else text flat class="me-1 bg-transparent d-flex justify-start px-1 px-sm-3">
                                <v-icon icon="mdi-information-outline" color="primary" size="large" class="me-1"></v-icon>
                                {{item.title}}
                            </v-btn>
                            <v-divider color="primary"></v-divider>
                        </template>
                    </marquee>

                </v-card-text>
            </v-card>
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
            default : '',
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

<style>

#notification-d03 marquee .v-btn{
    height: auto;
    text-align: start;
    width: 100vw;
}
#notification-d03 marquee .v-btn .v-btn__content{
    align-items: flex-start;
    justify-self: start;
    text-transform: none;
    margin: 10px 0;
    white-space: unset;
}

</style>
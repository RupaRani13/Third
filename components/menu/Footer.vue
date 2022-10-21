<template>
    <div id="footerDesign" style="background-color:#3f51b5">   
        <v-container>
            <v-row>
                <v-col class="v-col-lg-4 v-vol-md-4 v-col-sm-4 v-col-12">
                    <div style="width:64%;  height:26%; text-align:center;">
                        <v-img aspect-ratio="2" :src="websiteData.logo" lazy-src="/gallery_loading_image.jpeg"
                            :alt="websiteData.logo.title" cover class="" max-width="100%;">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </div>
                    <p>{{websiteData.description}}</p>
                </v-col>

                <v-col class="v-col-lg-2 v-vol-md-2 v-col-sm-2 v-col-12">
                    <p class="datatitle"><b style="display: inline; position: relative;">{{data.title}}</b></p>
                    <div v-for="item in data.items" :key="item.id"
                        style="color:var(--v-background); padding: 10px 0px;" :href="item.url" target="_blank" @click="clcikmenu">
                        {{item.title}}
                    </div>
                </v-col>
                <v-col class="v-col-lg-2 v-vol-md-2 v-col-sm-2 v-col-12">
                    <p class="datatitle"><b style="display: inline; position: relative;">{{data2.title}}</b></p>
                    <div v-for="item in data2.items" :key="item.id"
                        style="color:var(--v-background); padding: 10px 0px;">
                        {{item.title}}
                    </div>
                </v-col>
                <v-col class="v-col-lg-4 v-vol-md-4 v-col-sm-4 v-col-12" style="position:relative">
                    <p class="datatitle"><b style="display: inline; position: relative;">Contact Details</b></p>
                    <div class="socialicontop" v-for="item in websiteData.contactNumber" :key="item.id">
                        <v-icon>mdi-phone</v-icon>
                        <p>{{item}}</p>
                    </div>
                    <div class="socialicontop">
                        <v-icon>mdi-email</v-icon>
                        <p>{{websiteData.email[0]}}</p>
                    </div>
                    <div class="socialicontop">
                        <v-icon>mdi-map-marker</v-icon>
                        <p>{{websiteData.address}}</p>
                    </div>
                    <div class="socialicon">
                        <a v-if="websiteData.socialLinks.facebook" :href="websiteData.socialLinks.facebook"
                            target="_blank">
                            <v-icon icon="mdi-facebook"></v-icon>
                        </a>
                        <a v-if="websiteData.socialLinks.youTube" :href="websiteData.socialLinks.youTube">
                            <v-icon icon="mdi-youtube"></v-icon>
                        </a>
                        <a v-if="websiteData.socialLinks.instagram" :href="websiteData.socialLinks.instagram">
                            <v-icon icon="mdi-instagram"></v-icon>
                        </a>
                        <a v-if="websiteData.socialLinks.whatsapp" :href="websiteData.socialLinks.whatsapp">
                            <v-icon icon="mdi-whatsapp"></v-icon>
                        </a>
                        <a v-if="websiteData.socialLinks.twitter" :href="websiteData.socialLinks.twitter">
                            <v-icon icon="mdi-twitter"></v-icon>
                        </a>
                        <a v-if="websiteData.socialLinks.telegram" :href="websiteData.socialLinks.telegram">
                            <v-icon icon="mdi-send"></v-icon>
                        </a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    async setup(props) {
        const websiteData = await useWebsiteData('5f8ff2901c6863595640aa75')
        const data = await useMenu(props.id);
        const data2 = await useMenu(props.id2);
        return { websiteData, data, data2 };
    },
    props: {
        id: {
            required: true,
            type: String,
        },
        id2: {
            default: null,
        }
    },
    methods:{
        clcikmenu(){
            alert(1)
        }
    }

}
</script>

<style>
#footerDesign .socialicon {
    display: flex;
    justify-content: flex-start;
    padding: 5px 0px;
}

#footerDesign .socialicontop {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px;
}

#footerDesign .socialicon i,
#footerDesign .socialicontop i {
    padding: 0px 15px;
    color: var(--v-background);
    transition: transform .2s;
}

#footerDesign .socialicon a {
    text-decoration: none;
}

#footerDesign .socialicon i:hover {
    color: red;
    transform: scale(1.5);
}

#footerDesign .v-img__img--cover {
    object-fit: contain;
    text-align: revert;
    width: fit-content;
}

#footerDesign p {
    color: var(--v-background);
    padding-bottom: 10px;
}

#footerDesign .datatitle b:before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    background: var(--v-background);
    bottom: 0;
    margin: -6px 0px;
}
</style>
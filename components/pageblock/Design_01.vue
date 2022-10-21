<template>
    <div id="aboutdesign01" class="py-5">
        <v-container>
            <v-row>
                <v-col
                    :class="[blockContent.media&&blockContent.needMedia?'v-col-lg-6 v-col-md-6 v-col-sm-6 v-col-12':  'v-col-12']">
                    <v-card flat>
                        <v-card-title v-if="blockContent.heading&&blockContent.needHeading"> {{blockContent.heading}}
                        </v-card-title>
                        <v-card-subtitle v-if="blockContent.subHeading&&blockContent.needSubHeading"
                            v-html="blockContent.subHeading">
                        </v-card-subtitle>
                        <v-card-text v-if="blockContent.content&&blockContent.needContent"
                            v-html="blockContent.content">
                        </v-card-text>
                    </v-card>
                    <NuxtLink :to="blockContent.link" target="_blank" v-if="blockContent.link&&blockContent.needLink">
                        <v-btn>msg</v-btn>
                    </NuxtLink>
                </v-col>
                <v-col class="v-col-lg-6 v-col-md-6 v-col-sm-6 v-col-12"
                    v-if="blockContent.media&&blockContent.needMedia">
                    <v-img aspect-ratio="1.9" :src="blockContent.media" lazy-src="/gallery_loading_image.jpeg"
                        :alt="blockContent.title" cover class="" width="100%" height="100%">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="success"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
            <template v-if="blockContent.advanceData">
                <div v-if="blockContent.advanceData.categoryId">
                    <component :is="design" :id="blockContent.advanceData.categoryId" />
                </div>
                <div v-else>
                    <template v-if="blockContent.advanceData.type=='DOWNLOAD'">
                        <download-category :design="design" :list="blockContent.advanceData.design" />
                    </template>
                    <template v-else-if="blockContent.advanceData.type=='PHOTO'||blockContent.advanceData.type=='VIDEO'">
                        <GalleryAlbum :design="design" :list="blockContent.shortCode" :albumType='blockContent.advanceData.type' />
                    </template>
                    <template v-else>
                        <component :is="design" :id="blockContent.advanceData.categoryId" />
                    </template>
                </div>
            </template>
        </v-container>
    </div>
</template>

<script>
export default {
    async setup(props) {
        const design=shallowRef(null);
        if (props.blockContent.advanceData) {
            if (props.blockContent.advanceData.type=='LIST') {
            }
            else if (props.blockContent.advanceData.type=='FEATURES') {
                if (props.blockContent.advanceData.design.includes('I03')) {
                    if (props.blockContent.advanceData.design.includes('D01')) {
                        design.value = resolveComponent('contentlist/feature/item3/design01')
                    }
                    else if (props.blockContent.advanceData.design.includes('D02')) {
                        design.value = resolveComponent('contentlist/feature/item3/design02')
                    }
                    else if (props.blockContent.advanceData.design.includes('D03')) {
                        design.value = resolveComponent('contentlist/feature/item3/design03')
                    }
                    else if (props.blockContent.advanceData.design.includes('D04')) {
                        design.value = resolveComponent('contentlist/feature/item3/design04')
                    }
                    else {
                        design.value = resolveComponent('contentlist/feature/item3/design01')
                    }
                }
                else if (props.blockContent.advanceData.design.includes('I04')) {
                    if (props.blockContent.advanceData.design.includes('D01')) {
                        design.value = resolveComponent('contentlist/feature/item4/design01')
                    }
                    else if (props.blockContent.advanceData.design.includes('D02')) {
                        design.value = resolveComponent('contentlist/feature/item4/design02')
                    }
                    else if (props.blockContent.advanceData.design.includes('D03')) {
                        design.value = resolveComponent('contentlist/feature/item4/design03')
                    }
                    else {
                        design.value = resolveComponent('contentlist/feature/item4/design01')
                    }
                }
                else if (props.blockContent.advanceData.design.includes('I06')) {
                    if (props.blockContent.advanceData.design.includes('D01')) {
                        design.value = resolveComponent('contentlist/feature/item6/design01')
                    }
                    else if (props.blockContent.advanceData.design.includes('D02')) {
                        design.value = resolveComponent('contentlist/feature/item6/design02')
                    }
                    else if (props.blockContent.advanceData.design.includes('D03')) {
                        design.value = resolveComponent('contentlist/feature/item6/design03')
                    }
                    else if (props.blockContent.advanceData.design.includes('D04')) {
                        design.value = resolveComponent('contentlist/feature/item6/design04')
                    }
                    else {
                        design.value = resolveComponent('contentlist/feature/item6/design01')
                    }
                }
                else {
                    if (props.blockContent.advanceData.design.includes('D01')) {
                        design.value = resolveComponent('contentlist/feature/allitem/design01')
                    }
                    else if (props.blockContent.advanceData.design.includes('D02')) {
                        design.value = resolveComponent('contentlist/feature/allitem/design02')
                    } else {
                        design.value = resolveComponent('contentlist/feature/allitem/design01')
                    }
                }
            }
            else if(props.blockContent.advanceData.type=='TEAM'){
                if (props.blockContent.advanceData.design == 'D01') {
                    design.value = resolveComponent('contentlist/team/design01')
                }
                else if (props.blockContent.advanceData.design == 'D02') {
                    design.value = resolveComponent('contentlist/team/design02')
                }
                else if (props.blockContent.advanceData.design == 'D03') {
                    design.value = resolveComponent('contentlist/team/design03')
                }
                else if (props.blockContent.advanceData.design == 'D04') {
                    design.value = resolveComponent('contentlist/team/design04')
                }
                else if (props.blockContent.advanceData.design == 'D05') {
                    design.value = resolveComponent('contentlist/team/design05')
                }
                else if (props.blockContent.advanceData.design == 'D06') {
                    design.value = resolveComponent('contentlist/team/design06')
                }
                else {
                    design.value = resolveComponent('contentlist/accordion/design01')
                }
            }
            else if(props.blockContent.advanceData.type=='FAQ'){
                if (props.blockContent.advanceData.design == 'D01') {
                    design.value = resolveComponent('contentlist/accordion/design01')
                }
                else if (props.blockContent.advanceData.design == 'D02') {
                    design.value = resolveComponent('contentlist/accordion/design02')
                }
                else if (props.blockContent.advanceData.design == 'D03') {
                    design.value = resolveComponent('contentlist/accordion/design03')
                }
                else if (props.blockContent.advanceData.design == 'D04') {
                    design.value = resolveComponent('contentlist/accordion/design04')
                }
                else if (props.blockContent.advanceData.design == 'D05') {
                    design.value = resolveComponent('contentlist/accordion/design05')
                }
                else if (props.blockContent.advanceData.design == 'D06') {
                    design.value = resolveComponent('contentlist/accordion/design06')
                } 
                else if (props.blockContent.advanceData.design == 'D07') {
                    design.value = resolveComponent('contentlist/accordion/design07')
                } 
                else {
                    design.value = resolveComponent('contentlist/accordion/design01')
                }
            }
            else if (props.blockContent.advanceData.type=='NEWS_NOTICE') {
                if (props.blockContent.advanceData.design == 'D01') {
                    design.value = resolveComponent('notification/design01')
                }
                else if (props.blockContent.advanceData.design == 'D02') {
                    design.value = resolveComponent('notification/design02')
                }
                else if (props.blockContent.advanceData.design == 'D03') {
                    design.value = resolveComponent('notification/design03')
                }
                else {
                    design.value = resolveComponent('notification/design01')
                }
            }
            else if (props.blockContent.advanceData.type=='TESTIMONIAL') {
                
                if (props.blockContent.advanceData.design == 'D01') {
                    design.value = resolveComponent('testimonial/design01');
                }
                else if (props.blockContent.advanceData.design == 'D02') {
                    design.value = resolveComponent('testimonial/design02')
                }
                else if (props.blockContent.advanceData.design == 'D03') {
                    design.value = resolveComponent('testimonial/design03')
                }
                else if (props.blockContent.advanceData.design == 'D04') {
                    design.value = resolveComponent('testimonial/design04')
                }
                else if (props.blockContent.advanceData.design == 'D05') {
                    design.value = resolveComponent('testimonial/design05')
                }
                else if (props.blockContent.advanceData.design == 'D06') {
                    design.value = resolveComponent('testimonial/design06')
                }
                else if (props.blockContent.advanceData.design == 'D07') {
                    design.value = resolveComponent('testimonial/design07')
                }
                else {
                    design.value = resolveComponent('testimonial/design01')
                }
            }
            else if (props.blockContent.advanceData.type=='DOWNLOAD'||props.blockContent.advanceData.type=='PHOTO'||props.blockContent.advanceData.type=='VIDEO') {
                if (props.blockContent.advanceData.categoryId) {
                    if (props.blockContent.advanceData.type=='DOWNLOAD') {
                        if (props.blockContent.advanceData.design.includes('L01')) {
                            design.value = resolveComponent('download/list/design01')
                        }
                        else if (props.blockContent.advanceData.design.includes('L02')) {
                            design.value = resolveComponent('download/list/design02')
                        }
                        else if (props.blockContent.advanceData.design.includes('L03')) {
                            design.value = resolveComponent('download/list/design03')
                        }
                        else if (props.blockContent.advanceData.design.includes('L04')) {
                            design.value = resolveComponent('download/list/design04')
                        }
                        else if (props.blockContent.advanceData.design.includes('L05')) {
                            design.value = resolveComponent('download/list/design05')
                        }
                        else if (props.blockContent.advanceData.design.includes('L06')) {
                            design.value = resolveComponent('download/list/design06')
                        }
                        else if (props.blockContent.advanceData.design.includes('L07')) {
                            design.value = resolveComponent('download/list/design07')
                        }
                        else if (props.blockContent.advanceData.design.includes('L08')) {
                            design.value = resolveComponent('download/list/design08')
                        } else {
                            design.value = resolveComponent('download/list/design01')
                        }
                    } else if (props.blockContent.advanceData.type=='PHOTO') {
                        design.value = resolveComponent('gallery/photo/list')
                    } else {
                        design.value = resolveComponent('gallery/video/list')
                    }


                } else {
                    if (props.blockContent.advanceData.design.includes('D01')) {
                        design.value = resolveComponent('ui/tabs/design01')
                    }
                    else if (props.blockContent.advanceData.design.includes('D02')) {
                        design.value = resolveComponent('ui/tabs/design02')
                    }
                    else if (props.blockContent.advanceData.design.includes('D03')) {
                        design.value = resolveComponent('ui/tabs/design03')
                    }
                    else if (props.blockContent.advanceData.design.includes('D04')) {
                        design.value = resolveComponent('ui/tabs/design04')
                    }
                    else if (props.blockContent.advanceData.design.includes('D05')) {
                        design.value = resolveComponent('ui/tabs/design05')
                    }
                    else if (props.blockContent.advanceData.design.includes('D06')) {
                        design.value = resolveComponent('ui/tabs/design06')
                    }
                    else if (props.blockContent.advanceData.design.includes('D07')) {
                        design.value = resolveComponent('ui/tabs/design07')
                    }
                    else {
                        design.value = resolveComponent('ui/tabs/design01')
                    }
                }
            }

        }
        return { design };
    },
    props: {
        blockContent: {
            required: true,
        }
    },
    data() {
        return {}
    }

}
</script>

<style scoped>
#aboutdesign01 .v-card-title {
    text-align: center;
    font-size: 30px;
}

#aboutdesign01 .v-card-subtitle {
    white-space: unset;
    text-align: center;
}

#aboutdesign01 a {
    text-decoration: none;
}

@media only screen and (max-width:475px) {
    #aboutdesign04 .v-card-title {
        margin: 0;
        white-space: unset;
        font-size: 18px;
        /* padding: 1rem; */


    }
}
</style>
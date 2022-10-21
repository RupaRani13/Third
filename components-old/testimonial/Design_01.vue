<template>
    <div id="testimonial-d01" ref="testimonialD01">
        <v-container v-if="testimonials.length">
            <client-only>
                <div v-if="testimonials.length>2&&loopCondition" class="nav-container">
                    <v-btn class="button-prev" color="success" icon="mdi-chevron-left" size="large"></v-btn>
                    <v-btn class="button-next" color="success" icon="mdi-chevron-right" size="large"></v-btn>
                </div>
                <swiper :modules="modules" effect="fade" :space-between="10" :navigation="navigation"
                    :breakpoints="swiperOptions.breakpoints"
                    :autoplay="{delay: 2500, disableOnInteraction : false, pauseOnMouseEnter : true}"
                    :loop="loopCondition" :pagination="{ clickable: true }" calculateHeight='true'>
                    <swiper-slide v-for="item in testimonials" :key="item.id">
                        <v-card>
                            <div class="card-image-box">
                                <v-avatar elevation="2" size="150">
                                    <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                        :alt="item.studentName"></v-img>
                                </v-avatar>
                                <v-card-title>{{item.studentName}}</v-card-title>
                                <v-card-subtitle v-if="item.session" class="font-weight-bold">{{item.session}}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="item.srn" class="text-caption">{{item.srn}}</v-card-subtitle>
                            </div>
                            <v-divider color="primary"></v-divider>
                            <v-card-text v-html="item.message">
                            </v-card-text>

                        </v-card>
                    </swiper-slide>
                </swiper>
                <template #fallback>
                    <div class="server">
                        <div v-if="testimonials.length>2" class="nav-container">
                            <v-btn class="button-prev" color="success" icon="mdi-chevron-left" size="large"></v-btn>
                            <v-btn class="button-next" color="success" icon="mdi-chevron-right" size="large"></v-btn>
                        </div>
                        <div class="card-container">
                            <template v-for="(item,index) in testimonials" :key="item.id">
                                <v-card v-if="index<3">
                                    <div class="card-image-box">
                                        <v-avatar elevation="2" size="150">
                                            <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png"
                                                :src="item.image" :alt="item.studentName"></v-img>
                                        </v-avatar>
                                        <v-card-title>{{item.studentName}}</v-card-title>
                                        <v-card-subtitle v-if="item.session" class="font-weight-bold">{{item.session}}
                                        </v-card-subtitle>
                                        <v-card-subtitle v-if="item.srn" class="text-caption">{{item.srn}}
                                        </v-card-subtitle>
                                    </div>
                                    <v-divider color="primary"></v-divider>
                                    <v-card-text v-html="item.message" class="scroller">
                                    </v-card-text>
                                </v-card>
                            </template>
                        </div>
                        <div v-if="testimonials.length>2"
                            class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            <span v-for="(item,index) in testimonials" :key="item.id"
                                :class="[index==0?'swiper-pagination-bullet swiper-pagination-bullet-active':'swiper-pagination-bullet']"
                                role="button" aria-label="Go to slide 1" aria-current="true"></span>
                        </div>
                    </div>
                </template>
            </client-only>
        </v-container>
    </div>
</template>

<script>
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default {
    async setup(props) {
        const testimonials = await useTestimonial(props.id);
        return {
            modules: [Navigation, Pagination, A11y, Autoplay],
            testimonials,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        id: {
            type: String,
            default: null,
            required: false
        }
    },
    data() {
        return {
            swiperOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    960: {
                        slidesPerView: 3,
                    },
                    1920: {
                        slidesPerView: 4,
                    }
                },

            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            windowWidth: null,
        }
    },
    methods: {

    },
    mounted() {
        if(process.client){
                this.windowWidth = window.innerWidth;
                window.onresize = () => {
                this.windowWidth = window.innerWidth;
            }
        }
    },
    computed:{

        loopCondition(){
            if(process.client){
                if(this.testimonials.length>1&&this.windowWidth<600){
                    return true
                }else if(this.testimonials.length>2&&this.windowWidth<960){
                    return true
                }else if(this.testimonials.length>3&&this.windowWidth<1920){ 
                    return true
                }else if(this.testimonials.length>4&&this.windowWidth>1920){
                    return true
                }else{  
                    return false
                }
            }

        }
    }

}
</script>

<style >
#testimonial-d01 .v-avatar {
    position: absolute;
    transform: translate(10%, -40%);
    border-style: inset;
    border-color: var(--v-primary);
    border-top-color: var(--v-success);
    border-left-color: var(--v-success);
    border-width: 3px;
    box-sizing: border-box;
}

#testimonial-d01 .v-card {
    margin-top: 60px;
    /* margin-bottom: 50px; */
    overflow: initial;
    border: 1px solid var(--v-primary);
    border-radius: 15px;
    border-top-color: var(--v-success);
    border-left-color: var(--v-success);
}

#testimonial-d01 .v-card-title,
#testimonial-d01 .v-card-subtitle {
    padding-left: 174px;
    color: white;
}

#testimonial-d01 .v-card .v-card-text {
    /* max-height: 200px; */
    height: 141px;
    overflow: auto;
    margin: 15px 0px;
    padding-top: 0;
    padding-bottom: 0;
}

#testimonial-d01 .server .card-container {
    display: flex;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    width: fit-content;
    gap: 10px;
    margin-bottom: 50px;
    /* height: 393px; */
}

#testimonial-d01 .server {
    overflow: hidden;


}

#testimonial-d01 {
    position: relative;
}



#testimonial-d01 .nav-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#testimonial-d01 .nav-container .button-prev {
    position: absolute;
    left: 0;
    transform: translate(10px, 50%);
    top: 50%;
    z-index: 2;
}

#testimonial-d01 .server .card-container .v-card {
    width: calc((100% - 20px) / 3);
}

#testimonial-d01 .nav-container .button-next {
    position: absolute;
    right: 0;
    transform: translate(-10px, 50%);
    top: 50%;
    z-index: 2;
}

#testimonial-d01 .card-image-box {
    height: 100px;
    background: var(--v-success);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

#testimonial-d01 .server .card-container .v-card {
    width: calc(100vw - 32px);
}

@media screen and (min-width: 600px) {
    #testimonial-d01 .server .card-container .v-card {
        width: calc((100vw - 42px) / 2);
    }
}

@media screen and (min-width: 960px) {
    #testimonial-d01 .server .card-container .v-card {
        width: calc((900px - 52px) / 3);
    }
}

@media screen and (min-width: 1280px) {
    #testimonial-d01 .server .card-container .v-card {
        width: calc((1200px - 52px) / 3);
    }
}

@media screen and (min-width: 1920px) {
    #testimonial-d01 .server .card-container .v-card {
        width: calc((1800px - 62px) / 4);
    }
}

@media screen and (min-width:960px) and (max-width: 1280px) {
    #testimonial-d01 .v-card {
        margin-top: 80px;
    }

    #testimonial-d01 .card-image-box {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #testimonial-d01 .v-avatar {
        transform: translateY(-52%);
    }

    #testimonial-d01 .card-image-box {
        height: 160px;
    }

    #testimonial-d01 .v-card-title {
        margin-top: 65px;
    }

    #testimonial-d01 .v-card-title,
    #testimonial-d01 .v-card-subtitle {
        padding-left: 16px;
    }


}

@media screen and (max-width: 730px) {

    #testimonial-d01 .v-card {
        margin-top: 80px;
    }

    #testimonial-d01 .card-image-box {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #testimonial-d01 .v-avatar {
        transform: translateY(-52%);
    }

    #testimonial-d01 .card-image-box {
        height: 160px;
    }

    #testimonial-d01 .v-card-title {
        margin-top: 65px;
    }

    #testimonial-d01 .v-card-title,
    #testimonial-d01 .v-card-subtitle {
        padding-left: 16px;
    }


}

@media screen and (max-width: 1010px) {
    #testimonial-d01 .nav-container {
        display: none;
    }
}

#testimonial-d01 .swiper-wrapper {
    padding-bottom: 50px;
}




/* Scrollbar Styling */
#testimonial-d01 .v-card-text {
    overflow-y: scroll;
    scrollbar-color: var(--v-success) #ffffff;
}

#testimonial-d01 ::-webkit-scrollbar {
    width: 3px;
    height: 15px;
}

#testimonial-d01 ::-webkit-scrollbar-track-piece {
    background-color: var(--v-on-surface-variant);
    -webkit-border-radius: 10px;
}

#testimonial-d01 ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: var(--v-success);
    -webkit-border-radius: 10px;
}

#testimonial-d01 .server .swiper-pagination {
    position: absolute;
    bottom: 30px;
}
</style>
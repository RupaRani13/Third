<template>
    <div id="testimonial-d02" ref="testimonialD02">
        <v-container v-if="testimonials.length" class="">
            <client-only>
                <div v-if="testimonials.length>2&&loopCondition" class="nav-containerdesign02">
                    <v-btn class="button-prev" color="success" icon="mdi-chevron-left" size="large"></v-btn>
                    <v-btn class="button-next" color="success" icon="mdi-chevron-right" size="large"></v-btn>
                </div>
                <swiper :modules="modules" effect="fade" :space-between="10" :navigation="navigation"
                    :breakpoints="swiperOptions.breakpoints"
                    :autoplay="{delay: 2500, disableOnInteraction : false, pauseOnMouseEnter : true}"
                    :loop="loopCondition" :pagination="{ clickable: true }" calculateHeight='true'>
                    <swiper-slide v-for="item in testimonials" :key="item.id">
                        <v-card>
                            <v-icon>mdi-format-quote-open</v-icon>
                            <v-card-text v-html="item.message">
                            </v-card-text>
                            <div class="card-image-box">
                                <v-divider></v-divider>
                                <div class="custom-shape-divider-top-1663413001">
                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                                        preserveAspectRatio="none">
                                        <path
                                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                            class="shape-fill"></path>
                                    </svg>
                                </div>
                                <v-avatar elevation="2" size="150">
                                    <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                        :alt="item.studentName"></v-img>
                                </v-avatar>
                                <v-card-title>{{item.studentName}}</v-card-title>
                                <v-card-subtitle v-if="item.session" class="font-weight-bold">{{item.session}}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="item.srn" class="text-caption">{{item.srn}}</v-card-subtitle>
                            </div>
                        </v-card>
                    </swiper-slide>
                </swiper>
                <template #fallback>
                    <div class="server">
                        <div v-if="testimonials.length>2" class="nav-containerdesign02">
                            <v-btn class="button-prev" color="success" icon="mdi-chevron-left" size="large"></v-btn>
                            <v-btn class="button-next" color="success" icon="mdi-chevron-right" size="large"></v-btn>
                        </div>
                        <div class="card-container">
                            <template v-for="(item,index) in testimonials" :key="item.id">
                                <v-card v-if="index<3">
                                    <v-icon>mdi-format-quote-open</v-icon>
                                    <v-card-text v-html="item.message">
                                    </v-card-text>
                                    <div class="card-image-box">
                                        <v-divider></v-divider>
                                        <div class="custom-shape-divider-top-1663413001">
                                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 1200 120" preserveAspectRatio="none">
                                                <path
                                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                                    class="shape-fill"></path>
                                            </svg>
                                        </div>
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
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

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
    mounted() {
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
                    }
                },

            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },

        }
    },
    methods: {},
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
#testimonial-d02 {
    position: relative;
}
#testimonial-d02 .v-card {
    margin-top: 40px;
    margin-bottom: 50px;
    overflow: initial;
    border: 1px solid var(--v-primary);
    border-radius: 15px;
    border-top-color: var(--v-success);
    border-left-color: var(--v-success);
}
#testimonial-d02 .card-image-box {
    background: var(--v-success);
    height: 180px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    position: relative;
}
#testimonial-d02 .v-avatar {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--v-background);
    box-sizing: border-box;
}
#testimonial-d02 .v-card-title {
    margin-top: 75px;
    text-align: center;
    color: var(--v-background);
}
#testimonial-d02 .v-card-subtitle {
    text-align: center;
    color: var(--v-background);
}
#testimonial-d02 .v-card-text {
    height: 141px;
    overflow: auto;
    margin: 15px 0px 64px;
    padding-top: 0;
    padding-bottom: 0;
}
#testimonial-d02 .nav-containerdesign02 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
#testimonial-d02 .nav-containerdesign02 .button-prev {
    position: absolute;
    left: 0;
    transform: translate(10px, 50%);
    top: 50%;
    z-index: 2;
}
#testimonial-d02 .nav-containerdesign02 .button-next {
    position: absolute;
    right: 0;
    transform: translate(-10px, 50%);
    top: 50%;
    z-index: 2;
}
#testimonial-d02 .mdi-format-quote-open {
    color: var(--v-primary-darken-1);
    font-size: 34px;
    top: 17px;
}
#testimonial-d02 .card-image-box .v-divider{
    position: absolute;
    top: -1px;
    width: calc(100% - 1px);
    border-top-color: var(--v-background);
    border-top-width: 2px;
}
@media screen and (max-width: 1010px) {
    #testimonial-d02 .nav-containerdesign02 {
        display: none;
    }
}
#testimonial-d02 .server{
    overflow: hidden;
}
#testimonial-d02 .server .card-container{
    display: flex;
    align-items: flex-start;
    width: fit-content; 
    gap: 10px;
    /* flex-wrap: wrap; */
    /* width: -moz-fit-content;*/
    /* margin-bottom: 50px; */
}
#testimonial-d02 .server .card-container .v-card{
    width: calc(100vw - 32px);
}
@media screen and (min-width: 600px){
    #testimonial-d02 .server .card-container .v-card{
        width: calc((100vw - 42px) / 2);
}
}
@media screen and (min-width: 960px){
#testimonial-d02 .server .card-container .v-card {
    width: calc((900px - 52px) / 3);
  
}
}
@media screen and (min-width: 1280px) {
    #testimonial-d02 .server .card-container .v-card {
        width: calc((1200px - 52px) / 3);
    }
}

@media screen and (min-width: 1920px) {
    #testimonial-d02 .server .card-container .v-card {
        width: calc((1800px - 62px) / 4);
    }
}
/* wave css */
.custom-shape-divider-top-1663413001 {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 139%; */
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1663413001 svg {
    position: relative;
    display: block;
    width: calc(132% + 1.3px);
    height: 40px;
}

.custom-shape-divider-top-1663413001 .shape-fill {
    fill: #FFFFFF;
}

/* Scrollbar Styling */
#testimonial-d02 .v-card-text {
    overflow-y: scroll;
    scrollbar-color: var(--v-success) #ffffff;
}

#testimonial-d02 ::-webkit-scrollbar {
    width: 3px;
    height: 15px;
}

#testimonial-d02 ::-webkit-scrollbar-track-piece {
    background-color: var(--v-on-surface-variant);
    -webkit-border-radius: 10px;
}

#testimonial-d02 ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: var(--v-success);
    -webkit-border-radius: 10px;
}

#testimonial-d02 .server .swiper-pagination {
    position: absolute;
    bottom: 28px;
}

</style>
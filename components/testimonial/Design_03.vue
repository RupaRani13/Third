<template>
    <div id="testimonial-d03" ref="testimonialD03" style="background:var(--v-success)">
        <v-container v-if="testimonials.length">
            <client-only>
                <div v-if="testimonials.length>2&&loopCondition" class="nav-container">
                    <v-btn class="button-prev" color="var(--v-background)" icon="mdi-chevron-left" size="large"></v-btn>
                    <v-btn class="button-next" color="var(--v-background)" icon="mdi-chevron-right" size="large">
                    </v-btn>
                </div>
                <swiper :modules="modules" effect="fade" :space-between="10" :navigation="navigation"
                    :breakpoints="swiperOptions.breakpoints"
                    :autoplay="{delay: 2500, disableOnInteraction : false, pauseOnMouseEnter : true}"
                    :loop="loopCondition" :pagination="{ clickable: true }" calculateHeight='true'>
                    <swiper-slide v-for="item in testimonials" :key="item.id">
                        <div class="testimonial">
                            <v-icon>mdi-format-quote-open</v-icon>
                            <v-card-text v-html="item.message"></v-card-text>
                            <div class="card-image-box">
                                <!-- <div class="pic"><img :src="item.image" alt=""></div> -->
                                <v-avatar elevation="2" size="150" style="z-index: 1;">
                                    <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                        :alt="item.studentName"></v-img>
                                </v-avatar>
                                <v-card-title>{{item.studentName}}</v-card-title>
                                <v-card-subtitle v-if="item.session">{{item.session}}</v-card-subtitle>
                                <v-card-subtitle v-if="item.srn">{{item.srn}}</v-card-subtitle>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <template #fallback>
                    <div class="server">
                        <div v-if="testimonials.length>2" class="nav-container">
                            <v-btn class="button-prev" color="var(--v-background)" icon="mdi-chevron-left" size="large">
                            </v-btn>
                            <v-btn class="button-next" color="var(--v-background)" icon="mdi-chevron-right"
                                size="large"></v-btn>
                        </div>
                        <div class="card-container">
                            <template v-for="(item,index) in testimonials" :key="item.id">
                                
                                    <div class="testimonial"  v-if="index<3">
                                        <v-icon>mdi-format-quote-open</v-icon>
                                        <v-card-text v-html="item.message">
                                        </v-card-text>
                                        <div class="card-image-box">
                                            <!-- <div class="pic"><img :src="item.image" alt=""></div> -->
                                            <v-avatar elevation="2" size="150" style="z-index: 1;">
                                                <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png"
                                                    :src="item.image" :alt="item.studentName"></v-img>
                                            </v-avatar>
                                            <v-card-title>{{item.studentName}}</v-card-title>
                                            <v-card-subtitle>{{item.session}}</v-card-subtitle>
                                            <v-card-subtitle>{{item.srn}}</v-card-subtitle>
                                        </div>
                                    </div>
                               
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
        if (process.client) {
            this.windowWidth = window.innerWidth;
            window.onresize = () => {
                this.windowWidth = window.innerWidth;
            }
        }
    },
    computed: {
        loopCondition() {
            if (process.client) {
                if (this.testimonials.length > 1 && this.windowWidth < 600) {
                    return true
                } else if (this.testimonials.length > 2 && this.windowWidth < 960) {
                    return true
                } else if (this.testimonials.length > 3 && this.windowWidth < 1920) {
                    return true
                } else if (this.testimonials.length > 4 && this.windowWidth > 1920) {
                    return true
                } else {
                    return false
                }
            }
        }
    }

}
</script>

<style >
/* #testimonial-d03 .v-card {
    margin-top: 60px;
    overflow: initial;
    border: 1px solid var(--v-primary);
    border-radius: 15px;
    border-top-color: var(--v-success);
    border-left-color: var(--v-success);
} */

#testimonial-d03 .v-card-title {
    color: #fff;
    text-transform: capitalize;
    margin: 0 0 5px 0;
}

#testimonial-d03 .v-card-subtitle {
    display: block;
    font-size: 14px;
    color: var(--v-background);
}

#testimonial-d03 .testimonial .v-avatar {
    display: inline-block;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 2px 2px var(--v-on-surface-variant);
    overflow: hidden;
    z-index: 1;
    position: relative;
}

#testimonial-d03 .testimonial .v-icon {
    display: inline-block;
    font-size: 80px;
    color: var(--v-success);
 
    opacity: 0.6;
}

#testimonial-d03 .testimonial .v-card-text {
    text-align: left;
    opacity: 0.8;
    overflow-y: scroll;
    height: 130px;
    padding: 0px 20px 20px;
    margin-bottom: 15px;
}


#testimonial-d03 {
    position: relative;
}

#testimonial-d03 .nav-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#testimonial-d03 .nav-container .button-prev {
    position: absolute;
    left: 0;
    transform: translate(10px, 50%);
    top: 50%;
    z-index: 2;
}

#testimonial-d03 .nav-container .button-next {
    position: absolute;
    right: 0;
    transform: translate(-10px, 50%);
    top: 50%;
    z-index: 2;
}

#testimonial-d03 .testimonial .card-image-box {
    width: 100%;
    position: absolute;
    left: 0;
}

#testimonial-d03 .testimonial:before,
#testimonial-d03 .testimonial:after {
    content: "";
    border-top: 40px solid #fff;
    border-right: 125px solid transparent;
    position: absolute;
    bottom: -40px;
    left: 0;
}

#testimonial-d03 .testimonial:after {
    border-right: none;
    border-left: 125px solid transparent;
    left: auto;
    right: 0;
}

#testimonial-d03 .testimonial {
    background: #fff;
    text-align: center;
    padding: 30px 1px 50px;
    margin: 0 0px 100px;
    position: relative;
}

#testimonial-d03 .server .card-container {
    display: flex;
    align-items: flex-start;
    width: fit-content;
    gap: 10px;
    margin-bottom: 130px;
} 

#testimonial-d03 .server {
    overflow: hidden;
}
#testimonial-d03 .testimonial .swiper-pagination {
    position: absolute;
    bottom: 30px;
}
/* #testimonial-d03 .server .card-container .v-card {
    width: calc((100% - 20px) / 3);
} */

/* #testimonial-d03 .card-image-box {
    height: 100px;
    background: var(--v-success);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
*/
 #testimonial-d03 .server .testimonial{
    width: calc(100vw - 32px);
} 

@media screen and (min-width: 600px) {
    #testimonial-d03 .server .testimonial {
        width: calc((100vw - 42px) / 2);
    }
}

@media screen and (min-width: 960px) {
    #testimonial-d03 .server .testimonial{
        width: calc((900px - 52px) / 3);
    }
}

@media screen and (min-width: 1280px) {
    #testimonial-d03 .server .testimonial {
        width: calc((1200px - 52px) / 3);
    }
}

@media screen and (min-width: 1920px) {
    #testimonial-d03 .server .testimonial {
        width: calc((1800px - 62px) / 4);
    }
}


@media screen and (max-width: 1010px) {
    #testimonial-d03 .nav-container {
        display: none;
    }
}

#testimonial-d03 .swiper-wrapper {
    padding-bottom: 50px;
    margin-bottom: 100px;
}
#testimonial-d03 .swiper-pagination-bullet.swiper-pagination-bullet-active{
    background: var(--v-background);
}

/* 
#testimonial-d03 .server .swiper-wrapper {
    padding-bottom: 50px;
    margin-bottom: 100px;
} */




/* Scrollbar Styling */
#testimonial-d03 .v-card-text {
    overflow-y: scroll;
    scrollbar-color: var(--v-success) #ffffff;
}

#testimonial-d03 ::-webkit-scrollbar {
    width: 3px;
    height: 15px;
}

#testimonial-d03 ::-webkit-scrollbar-track-piece {
    background-color: var(--v-on-surface-variant);
    -webkit-border-radius: 10px;
}

#testimonial-d03 ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: var(--v-success);
    -webkit-border-radius: 10px;
}



/* #testimonial-d03 .testimonial .pic img {
    width: 100%;
    height: auto;
} */
/* controls */



@media only screen and (max-width: 650px) and (min-width: 400px) {
    #testimonial-d03 .testimonial:before {
        border-right: 280px solid transparent;
    }
    #testimonial-d03 .testimonial:after {
        border-left: 280px solid transparent;
    }
}
</style>
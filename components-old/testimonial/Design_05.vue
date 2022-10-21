<template>
    <div id="testimonial-d05" ref="testimonialD05">
        <v-container v-if="testimonials.length" style="background: var(--v-background);">
            <client-only>
                <div class="nav-containerdesign05">
                    <v-btn class="button-prev"  icon="mdi-arrow-left" size="large"></v-btn>
                    <v-btn class="button-next" icon="mdi-arrow-right" size="large"></v-btn>
                </div>
                <swiper :modules="modules" effect="fade" :space-between="10" :navigation="navigation"
                    :breakpoints="swiperOptions.breakpoints"
                    :autoplay="{delay: 2500, disableOnInteraction : false, pauseOnMouseEnter : false}"
                    :loop="loopCondition" :pagination="{ clickable: true }" calculateHeight='true'>
                    <swiper-slide v-for="item in testimonials" :key="item.id">
                        <v-card>
                            <v-avatar size="150">
                                <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                    :alt="item.studentName"></v-img>
                            </v-avatar>
                            <v-card-title>{{item.studentName}}</v-card-title>
                            <v-card-subtitle v-if="item.srn" class="font-weight-bold">{{item.srn}}</v-card-subtitle>
                            <v-card-subtitle v-if="item.session" class="text-caption">[{{item.session}}]
                            </v-card-subtitle>
                            <v-card-text v-html="item.message"></v-card-text>

                        </v-card>
                    </swiper-slide>
                </swiper>
                <template #fallback>
                    <div class="server">
                        <div v-if="testimonials.length>1" class="nav-containerdesign05">
                            <v-btn class="button-prev" icon="mdi-arrow-left" size="large"></v-btn>
                            <v-btn class="button-next" icon="mdi-arrow-right" size="large"></v-btn>
                        </div>
                        <div class="card-container">
                            <template v-for="(item,index) in testimonials" :key="item.id">
                                <v-card v-if="index==0">
                                    <v-avatar size="150">
                                        <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                            :alt="item.studentName"></v-img>
                                    </v-avatar>
                                    <v-card-title>{{item.studentName}}</v-card-title>
                                    <v-card-subtitle v-if="item.srn" class="font-weight-bold">{{item.srn}}
                                    </v-card-subtitle>
                                    <v-card-subtitle v-if="item.session" class="text-caption">[{{item.session}}]
                                    </v-card-subtitle>
                                    <v-card-text v-html="item.message"></v-card-text>
                                </v-card>

                            </template>
                        </div>
                        <div v-if="testimonials.length>1"
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
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import "swiper/css/effect-fade";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default {
    async setup(props) {
        const testimonials = await useTestimonial(props.id);
        return {
            modules: [Navigation, Pagination, A11y, Autoplay, EffectFade],
            testimonials,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    mounted() {
        if (process.client) {
            this.windowWidth = window.innerWidth;
            window.onresize = () => {
                this.windowWidth = window.innerWidth;
            }
        }
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
                        slidesPerView: 1,
                    },
                    960: {
                        slidesPerView: 1,
                    },
                    1920: {
                        slidesPerView: 1,
                    }
                },

            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },

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
#testimonial-d05 {
    position: relative;
}

#testimonial-d05 .v-card {
    background: var(--v-success);
    text-align: center;
    /* padding: 40px 20px; */
    border-radius: 5px;
    margin: 10px 142px;
    height: 434px;
    padding: 65px 1px 20px;
   
}

#testimonial-d05 .v-card .v-img {
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}

#testimonial-d05 .v-card .v-img img {
    width: 100%;
    /* height: auto; */
    filter: grayscale(100%);
}

#testimonial-d05 .card-box {
    position: relative;
    margin: 0px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* #testimonial-d05 .mdi-chevron-left::before{
    color: var(--v-background);
}
#testimonial-d05 .mdi-chevron-right::before::before{
    color: var(--v-background);
} */

#testimonial-d05 .v-card .v-icon {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(50%, 200%);
}

/* Scrollbar Styling */
#testimonial-d05 .v-card-text {
    overflow-y: scroll;
    scrollbar-color: var(--v-background);
    margin: 20px 0px;
    padding: 0 16px;
}

#testimonial-d05 ::-webkit-scrollbar {
    width: 3px;
    height: 15px;
}

#testimonial-d05 ::-webkit-scrollbar-track-piece {
    background-color: var(--v-background);
    -webkit-border-radius: 10px;
}

#testimonial-d05 ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    color:var(--v-surface-variant);
    -webkit-border-radius: 10px;
}

/*  */
@media screen and (max-width:600px) {
    #testimonial-d05 .v-card {
        margin: 10px 1px;
        padding: 65px 1px;
    }
    #testimonial-d05 .v-card-text{
        height: 135px;
        margin: 20px 0px;

    }
}

#testimonial-d05 .v-card-title {
    font-size: 16px;
    color: var(--v-background);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 0;
    padding: 0px 16px;
}

/* 
#testimonial-d05 .card-box .v-card-subtitle {
    display: block;
    font-size: 12px;
    font-style: italic;
    color: #bcbcbc;
    margin-top: 10px;
    text-transform: uppercase;
} */
/* 
#testimonial-d05 .v-avatar {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--v-background);
    box-sizing: border-box;
} */

#testimonial-d05 .v-card-subtitle {
    display: block;
    font-size: 12px;
    font-style: italic;
    color: var(--v-background);
    margin-top: 0px;
    text-transform: uppercase;
}

#testimonial-d05 .v-card-text {
    height: 84px;
    overflow: auto;
    margin: 20px 0px;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    color:var(--v-background)
}


#testimonial-d05 .nav-containerdesign05 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#testimonial-d05 .nav-containerdesign05 .button-prev {
    position: absolute;
    left: 50%;
    transform: translate(-250%, 200%);
    z-index: 2;
    background: transparent;
    box-shadow: none;
}

#testimonial-d05 .nav-containerdesign05 .button-next {
    position: absolute;
    right: 50%;
    transform: translate(250%, 200%);
    z-index: 2;
    background: transparent;
    box-shadow: none;
}
#testimonial-d05 .mdi-arrow-right::before, #testimonial-d05 .mdi-arrow-left::before{
  color: var(--v-background)
}

#testimonial-d05 .server {
    overflow: hidden;
}

#testimonial-d05 .server .card-container {
    display: flex;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    width: -moz-fit-content;
    width: fit-content;
    gap: 10px;
    /* margin-bottom: 50px; */
}
#testimonial-d05 .server {
    position: relative;
}
/* #testimonial-d05 .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--v-background);
    transform: translateY(-43%);
}
#testimonial-d05 .swiper-pagination-bullets.swiper-pagination-horizontal{
    transform: translateY(6%)
}*/
#testimonial-d05 .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--v-background);
   
}

</style>
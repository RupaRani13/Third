<template>
    <div id="testimonial-d07" ref="testimonialD07">
        <v-container v-if="testimonials.length" style="background: var(--v-background);">
            <client-only>

                <swiper :modules="modules" effect="fade" :space-between="10" :navigation="navigation"
                    :breakpoints="swiperOptions.breakpoints"
                    :autoplay="{delay: 2500, disableOnInteraction : false, pauseOnMouseEnter : false}"
                    :loop="loopCondition" :pagination="{ clickable: true }" calculateHeight='true'>
                    <swiper-slide v-for="item in testimonials" :key="item.id">
                        <v-card>
                            <div class="nav-container">
                                <v-btn class="button-prev" icon="mdi-arrow-left" size="large"></v-btn>
                                <v-btn class="button-next" icon="mdi-arrow-right" size="large"></v-btn>
                            </div>
                            <v-icon size="large">mdi-format-quote-open</v-icon>
                            <v-card-text v-html="item.message"></v-card-text>
                            <div class="line-divider"></div>
                            <v-avatar size="150">
                                <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                    :alt="item.studentName"></v-img>
                            </v-avatar>
                            <div class="card-box">
                                <v-card-title :class="[item.srn?'pe-0' : '']">{{item.studentName}},</v-card-title>
                                <v-card-subtitle v-if="item.srn" class="font-weight-bold">{{item.srn}}</v-card-subtitle>
                            </div>
                            <v-card-subtitle v-if="item.session" class="text-caption">[{{item.session}}]
                            </v-card-subtitle>
                        </v-card>
                    </swiper-slide>
                </swiper>
                <template #fallback>
                    <div class="server">

                        <div class="card-container">
                            <template v-for="(item,index) in testimonials" :key="item.id">
                                <v-card v-if="index==0">
                                    <div class="nav-container">
                                        <v-btn class="button-prev" icon="mdi-arrow-left" size="large"></v-btn>
                                        <v-btn class="button-next" icon="mdi-arrow-right" size="large"></v-btn>
                                    </div>
                                    <v-icon size="large">mdi-format-quote-open</v-icon>
                                    <v-card-text v-html="item.message"></v-card-text>
                                    <div class="line-divider"></div>
                                    <v-avatar size="150">
                                        <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                            :alt="item.studentName"></v-img>
                                    </v-avatar>
                                    <div class="card-box">
                                        <v-card-title :class="[item.srn?'pe-0' : '']">{{item.studentName}},
                                        </v-card-title>
                                        <v-card-subtitle v-if="item.srn" class="font-weight-bold">{{item.srn}}
                                        </v-card-subtitle>
                                    </div>
                                    <v-card-subtitle v-if="item.session" class="text-caption">[{{item.session}}]
                                    </v-card-subtitle>
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

<style>
#testimonial-d07 {
    position: relative;
}

#testimonial-d07 .v-card {
    border: 10px solid var(--v-success);
    padding: 70px 1px;
    text-align: center;
    position: relative;
    overflow: inherit;
    z-index: 1;
    height: 500px;

}

#testimonial-d07 .v-avatar {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid var(--v-background);
    box-sizing: border-box;
    display: block;
    margin-top: 36px;
}

#testimonial-d07 .mdi-format-quote-open {
    /* color: var(--v-secondary-darken-1); */
    font-size: 57px;
    position: absolute;
    left: 10%;
    top: -6%;
    background: var(--v-background);

}

#testimonial-d07 .card-box {

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}





#testimonial-d07 .line-divider {
    position: relative;

}

#testimonial-d07 .line-divider::before {
    content: "";
    width: 75%;
    border-top: 2px solid var(--v-success);
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

}

#testimonial-d07 .line-divider:after {
    content: "";
    width: 20px;
    height: 20px;
    background: var(--v-background);
    position: absolute;
    bottom: -10px;
    left: 50%;
    top: 1px;
    border-bottom: 2px solid var(--v-success);
    border-right: 2px solid var(--v-success);
    transform: translate(-50%, -55%) rotate(45deg);

}

#testimonial-d07 .v-card-text ::-ms-ticks-after {
    content: "";
    width: 20px;
    height: 20px;
    background: var(--v-background);
    position: absolute;
    bottom: -10px;
    left: 50%;
    border-bottom: 1px solid var(--v-on-surface-variant);
    border-right: 1px solid var(--v-on-surface-variant);
    transform: translateX(-50%) rotate(45deg);
}
/* Scrollbar Styling */
#testimonial-d07 .v-card-text {
    height: 128px;
    overflow-y: scroll;
    scrollbar-color: var(--v-success) #fff;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    /* color: var(--v-on-surface-variant); */
    line-height: 30px;
    padding-bottom: 25px;
    margin-bottom: 15px;
    position: relative;
    padding: 0px 20px;

}
#testimonial-d07 ::-webkit-scrollbar {
    width: 3px;
    height: 15px;
}

#testimonial-d07 ::-webkit-scrollbar-track-piece {
    background-color:  var(--v-on-surface-variant);
    -webkit-border-radius: 10px;
}

#testimonial-d07 ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: var(--v-success);
    -webkit-border-radius: 10px;
}

/*  */
#testimonial-d07 .v-card-title {
    display: inline-block;
    font-size: 23px;
    font-weight: 700;
    /* color:  var(--v-on-surface-variant); */
    text-transform: capitalize;
    margin: 0;
}

#testimonial-d07 .v-card-subtitle {
    display: inline-block;
    font-size: 20px;
    /* color: var(--v-on-surface-variant); */
    padding: 0px;
}


@media screen and (max-width:600px) {
    #testimonial-d07 .v-card {

        padding: 24px 1px 49px;
    }

    #testimonial-d07 .v-card-text {
        height: 125px;
        margin: 20px 0px;

    }

    #testimonial-d07 .v-card-title {
        text-align: center;
    }

    #testimonial-d07 .v-card-subtitle {
        text-align: center;
    }
}

#testimonial-d07 .nav-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#testimonial-d07 .nav-container .button-prev {
    position: absolute;
    right: 10%;
    transform: translate(-200%, -50%);
    z-index: 2;
    background: transparent;
    box-shadow: none;
    bottom: -33px;
    background: var(--v-success);
    outline: 9px solid var(--v-background);
    height: 30px;
    width: 30px;
    box-shadow :  0 0 0 3px var(--v-background);
}

#testimonial-d07 .nav-container .button-next {
    position: absolute;
    right: 10%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: transparent;
    box-shadow: none;
    bottom: -33px;
    background: var(--v-success);
    outline: 9px solid var(--v-background);
    height: 30px;
    width: 30px;
    box-shadow :  0 0 0 3px var(--v-background);

}

#testimonial-d07 .swiper {
    overflow: unset;
}

#testimonial-d07 .server {
    overflow: hidden;
}

#testimonial-d07 .server .card-container {
    display: flex;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    width: -moz-fit-content;
    width: fit-content;
    gap: 10px;
}

#testimonial-d07 .server {
    position: relative;
}

#testimonial-d07 .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--v-success);

}

#testimonial-d07 .swiper-pagination-bullet {
    width: 33px;
    height: 6px;
    border-radius: 20px;
}

@media screen and (max-width:1024px) {
    #testimonial-d07 .v-card {
        height: 504px;
    }
}

@media screen and (max-width:600px) {
    #testimonial-d07 .swiper-pagination {
        bottom: 38px;
    }

    #testimonial-d07 .v-card {
        height: 531px;
    }
}
</style>
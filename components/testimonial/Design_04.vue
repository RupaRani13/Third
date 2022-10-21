<template>
    <div id="testimonial-d04" ref="testimonialD02">
        <v-container v-if="testimonials.length" class="">
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
                            <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                :alt="item.studentName"></v-img>
                                <v-icon size="x-large">mdi-format-quote-open</v-icon>

                            <v-card-text v-html="item.message"></v-card-text>
                            <v-card-title>{{item.studentName}}</v-card-title>

                            <div class="card-box">
                                <v-card-subtitle v-if="item.srn" class="font-weight-bold">{{item.srn}}</v-card-subtitle>

                                <v-card-subtitle v-if="item.session" class="text-caption">[{{item.session}}]
                                </v-card-subtitle>
                            </div>
                        </v-card>
                    </swiper-slide>
                </swiper>
                <template #fallback>
                    <div class="server">
                        <div v-if="testimonials.length>2&&loopCondition" class="nav-container">
                            <v-btn class="button-prev" color="success" icon="mdi-chevron-left" size="large"></v-btn>
                            <v-btn class="button-next" color="success" icon="mdi-chevron-right" size="large"></v-btn>
                        </div>
                        <div class="card-container">
                            <template v-for="(item,index) in testimonials" :key="item.id">
                                <div class="testimonial-item">
                                    <v-card v-if="index<4">
                                    <v-img aspect-ratio=" 1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                        :alt="item.studentName">
                                    </v-img>
                                    <v-icon size="large">mdi-format-quote-open</v-icon>

                                    <v-card-text v-html="item.message"></v-card-text>
                                    <v-card-title>{{item.studentName}}</v-card-title>

                                    <div class="card-box">
                                        <v-card-subtitle v-if="item.srn" class="font-weight-bold">{{item.srn}}
                                        </v-card-subtitle>

                                        <v-card-subtitle v-if="item.session" class="text-caption">[{{item.session}}]
                                        </v-card-subtitle>
                                    </div>
                                </v-card>

                                </div>

    

                            </template>
                        </div>
                        <div v-if="testimonials.length>2" :loop="loopCondition"
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
        const testimonials=await useTestimonial(props.id);
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

        }
    },
    methods: {},
    computed : {
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
#testimonial-d04 {
    position: relative;
}

#testimonial-d04 .v-card {
    text-align: center;
    padding: 68px 1px 30px 30px;
    margin: 70px 15px 50px;
    background: var(--v-on-surface-variant);
    box-shadow: 8px 4px 0 0 var(--v-success);
    position: relative;
    overflow: initial;
    border-radius : 0px;
}

#testimonial-d04 .v-card .v-img {
    width: 120px;
    height: 120px;
    border: 5px solid var(--v-success);
    margin: 0 auto;
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
}

#testimonial-d04 .card-box {
    position: relative;
    margin: 0px 0;
    padding-right: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#testimonial-d04 .v-card .v-icon {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(40%, 160%);
    color : var(--v-successs);
    opacity: 0.5;
}
#testimonial-d04 .v-card .v-icon::before {
    font-size: 70px;
}

#testimonial-d04 .card-box:after {
    content: "";
    width: 50px;
    height: 2px;
    background: var(--v-primary);
    margin: 0 auto;
    position: absolute;
    bottom: -10px;
    left: -29px;
    right: 0;
}

#testimonial-d04 .v-card-title {
    text-transform: uppercase;
    margin: 0;
    padding-left: 0px;
    padding-right: 29px;
    color: var(--v-successs);
}

#testimonial-d04 .card-box .v-card-subtitle {
    display: inline-block;
    color: #757575;
    text-transform: capitalize;
    padding: 0px 5px;
}

#testimonial-d04 .v-avatar {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--v-background);
    box-sizing: border-box;
}

#testimonial-d04 .v-card-subtitle {
    text-align: center;
    color: var(--v-background);
}

#testimonial-d04 .v-card-text {
    height: 124px;
    overflow: auto;
    margin: 20px 0px;
    padding: 0;
    text-indent:12px;
    padding-right: 29px ;
    position: relative;
}

#testimonial-d04 .v-card-text:before {
    content: "\f10d";
    font-family: "FontAwesome";
    font-size: 32px;
    color: #77a9dd;
    position: absolute;
    top: -15px;
    left: -35px;
}

#testimonial-d04 .nav-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

#testimonial-d04 .nav-container .button-prev {
    position: absolute;
    left: 0;
    transform: translate(10px, 50%);
    top: 50%;
    z-index: 2;
}

#testimonial-d04 .nav-container .button-next {
    position: absolute;
    right: 0;
    transform: translate(-10px, 50%);
    top: 50%;
    z-index: 2;
}

#testimonial-d04 .mdi-format-quote-open {
    color: var(--v-primary-darken-1);
    font-size: 34px;
    top: 17px;
}

@media screen and (max-width: 1010px) {
    #testimonial-d04 .nav-container {
        display: none;
    }
}

#testimonial-d04 .server {
    overflow: hidden;
}



#testimonial-d04 .server .card-container {
    display: flex;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    width: -moz-fit-content;
    width: fit-content;
    gap: 10px;
    /* margin-bottom: 50px; */
}

#testimonial-d04 .server .testimonial-item {
    width: calc(100vw - 32px);
}

@media screen and (min-width: 600px) {
    #testimonial-d04 .server .testimonial-item{
        width: calc((100vw - 42px) / 2);
    }
}

@media screen and (min-width: 960px) {
    #testimonial-d04 .server .testimonial-item{
        width: calc((900px - 52px) / 3);
    }
}

@media screen and (min-width: 1280px) {
    #testimonial-d04 .server .testimonial-item {
        width: calc((1200px - 52px) / 3);
    }
}

@media screen and (min-width: 1920px) {
    #testimonial-d04 .server .testimonial-item {
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
#testimonial-d04 .v-card-text {
    overflow-y: scroll;
    scrollbar-color: var(--v-success) #ffffff;
}

#testimonial-d04 ::-webkit-scrollbar {
    width: 3px;
    height: 15px;
}

#testimonial-d04 ::-webkit-scrollbar-track-piece {
    background-color: var(--v-on-surface-variant);
    -webkit-border-radius: 10px;
}

#testimonial-d04 ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: var(--v-success);
    -webkit-border-radius: 10px;
}

#testimonial-d04 .server .swiper-pagination {
    position: absolute;
    bottom: 28px;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active{
background: var(--v-success);
}
</style>
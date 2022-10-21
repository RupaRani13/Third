<template>
    <div id="testimonial-d06" ref="testimonialD06">
        <v-container v-if="testimonials.length" style="background: var(--v-background);">
            <client-only>
                <!-- <div class="nav-containerdesign02">
                    <v-btn class="button-prev" icon="mdi-arrow-left" size="large"></v-btn>
                    <v-btn class="button-next" icon="mdi-arrow-right" size="large"></v-btn>
                </div> -->
                <swiper :modules="modules" effect="fade" :space-between="10" :navigation="navigation"
                    :breakpoints="swiperOptions.breakpoints"
                    :autoplay="{delay: 2500, disableOnInteraction : false, pauseOnMouseEnter : false}"
                    :loop="loopCondition" :pagination="{ clickable: true }" calculateHeight='true'>
                    <swiper-slide v-for="item in testimonials" :key="item.id">
                        <v-card>
                            <!-- <v-icon size="large">mdi-format-quote-open</v-icon> -->
                          
                                <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                    :alt="item.studentName"></v-img>
                           
                            <v-card-text v-html="item.message"></v-card-text>
                            <v-card-title>{{item.studentName}}</v-card-title>
                            <div class="card-box">
                            <v-card-subtitle v-if="item.srn" :class="[item.session?'pe-0' : '']" class="font-weight-bold">{{item.srn}}</v-card-subtitle>
                            <v-card-subtitle v-if="item.session" class="text-caption ps-0">[{{item.session}}]
                            </v-card-subtitle>
                            </div>

                        </v-card>
                    </swiper-slide>
                </swiper>
                <template #fallback>
                    <div class="server">
                        <!-- <div v-if="testimonials.length>1" class="nav-containerdesign02">
                            <v-btn class="button-prev" icon="mdi-arrow-left" size="large"></v-btn>
                            <v-btn class="button-next" icon="mdi-arrow-right" size="large"></v-btn>
                        </div> -->
                        <div class="card-container">
                            <template v-for="(item,index) in testimonials" :key="item.id">
                                <v-card v-if="index==0">
                                   
                                <v-img aspect-ratio="1" cover lazy-src="/testimonial-boy.png" :src="item.image"
                                    :alt="item.studentName"></v-img>
                           
                            <v-card-text v-html="item.message"></v-card-text>
                            <v-card-title>{{item.studentName}}</v-card-title>
                            <v-card-subtitle v-if="item.srn" class="font-weight-bold">{{item.srn}}</v-card-subtitle>
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
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import "swiper/css/effect-fade";

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default {
    async setup(props) {
        const testimonials = await useTestimonial(props.id);
        return {
            modules: [ Pagination, A11y, Autoplay, EffectFade],
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
#testimonial-d06 {
    position: relative;
}

#testimonial-d06 .v-card {
    text-align: center;
    padding: 100px 40px 5px;
    margin-top: 100px;
    border-top: 5px solid var(--v-success);;
    position: relative;
    overflow: inherit;
    box-shadow: none;
   
}
#testimonial-d06 .v-card::before {
    content: "\f10d";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 50px;
    color: var(--v-success);;
    opacity: 0.5;
   
}

#testimonial-d06 .v-card .v-img {
    width: 150px;
    height: 150px;
    border: 5px solid var(--v-success);;
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
    margin: 0 auto;
}
#testimonial-d06 .card-box {
  
    display: flex;
    align-items: center;
    gap:10px;
    justify-content: flex-end;
} 

/* #testimonial-d06 .mdi-chevron-left::before{
    color: var(--v-background);
}
#testimonial-d06 .mdi-chevron-right::before::before{
    color: var(--v-background);
} */

/* #testimonial-d06 .v-card .v-icon {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(50%, 200%);
} */

/* Scrollbar Styling */
#testimonial-d06 .v-card-text {
    overflow-y: scroll;
    scrollbar-color: var(--v-success) #fff;
    font-size: 14px;
    /* color: #6f6f6f; */
    line-height: 25px;
    margin-bottom: 30px;
}

#testimonial-d06 ::-webkit-scrollbar {
    width: 3px;
    height: 15px;
}

#testimonial-d06 ::-webkit-scrollbar-track-piece {
    background-color: var(--v-on-surface-variant);
    -webkit-border-radius: 10px;
}

#testimonial-d06 ::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: var(--v-success);
    -webkit-border-radius: 10px;
}
/*  */
#testimonial-d06 .v-card-title {
    display: block;
    text-align: right;
    font-size: 22px;
    margin: 0;
}
#testimonial-d06 .v-card-subtitle {
    display: block;
    font-size: 12px;
    margin-top: 7px;
    text-align: right;
}


@media screen and (max-width:600px) {
    #testimonial-d06 .v-card {
      
        padding: 65px 1px 49px;
    }
    #testimonial-d06 .v-card-text{
        height: 129px;
        margin: 20px 0px;
        padding: 0px 20px;

    }
    #testimonial-d06 .v-card::before{
        font-size: 32px;
        top:53px;
    }
    #testimonial-d06 .v-card-title{
        text-align: center;
    }
    #testimonial-d06 .v-card-subtitle{
        text-align: center;
    }
}



/* 
#testimonial-d06 .card-box .v-card-subtitle {
    display: block;
    font-size: 12px;
    font-style: italic;
    color: #bcbcbc;
    margin-top: 10px;
    text-transform: uppercase;
} */

/* #testimonial-d06 .v-avatar {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--v-background);
    box-sizing: border-box;
} */


/* 
#testimonial-d06 .v-card-text {
    height: 90px;
    overflow: auto;
    margin: 20px 0px;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    color:var(--v-background)
} */
#testimonial-d06 .nav-containerdesign02 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
#testimonial-d06 .nav-containerdesign02 .button-prev {
    position: absolute;
    left: 50%;
    transform: translate(-250%, 200%);
    z-index: 2;
    background: transparent;
    box-shadow: none;
}
#testimonial-d06 .nav-containerdesign02 .button-next {
    position: absolute;
    right: 50%;
    transform: translate(250%, 200%);
    z-index: 2;
    background: transparent;
    box-shadow: none;
}
#testimonial-d06 .server {
    overflow: hidden;
}

#testimonial-d06 .server .card-container {
    display: flex;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    width: -moz-fit-content;
    width: fit-content;
    gap: 10px;
}
#testimonial-d06 .server {
    position: relative;
}
#testimonial-d06 .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--v-success);
   
}
#testimonial-d06 .swiper-pagination-bullet{
    width: 33px;
    height: 6px;
    border-radius: 20px;
}

</style>
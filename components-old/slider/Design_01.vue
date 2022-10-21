<template >
    <v-carousel v-if="sliderData.slides" cycle height="calc(100vh - 96px)" hide-delimiter-background progress="primary" show-arrows="hover"
        v-model="model">
        <v-carousel-item v-for="(item, i) in sliderData.slides" :key="i">
            <div class="d-flex fill-height justify-center align-center">
                <img style="height: calc(100vh - 96px); width: 100vw" :src="item.imgUrl" alt="">
            </div>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    async setup(props) {
        const sliderData=await useSlider(props.id)
        return {
            sliderData,
        };
    },
    props :{
        id : {
            type : String,
            required : true,
        }
    },
    data() {
        return {
            model: 0,
        }
    }
}
</script>

<style scoped>
</style>
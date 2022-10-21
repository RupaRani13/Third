<template>
    <div id="contentDesign05">
        <v-container>
           
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="item in contentListdata" :key="item">
                    <v-expansion-panel-title v-if="item.title"  expand-icon="mdi-plus" collapse-icon="mdi-minus">
                        {{item.title}}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text v-if="item.desci" >
                        <p v-html="item.desci" ></p>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>       
        </v-container>
    </div>
</template>

<script>
export default {
    async setup(props) {
        const contentListdata = await useContentListItem(props.id);
        return { contentListdata };
    },
    props: {
        id: {
            type: String,
            default: null,
            required: false
        }
    },
    created() {
        console.log(this.contentListdata)
    },
}
</script>

<style>
#contentDesign05 .text-subtitle-2 {
    text-align: center;
    font-size: 32px !important;
    margin-bottom: 31px !important;
}
#contentDesign05 .v-expansion-panel-title__icon{
    font-weight: 900;
    width: 40px;
    height: 40px;
    line-height: 32px;
    border-radius: 50%;
    background: var(--v-success);
    /* text-align: center; */
    font-size: 15px;
    margin: 0px;
    /* color: #fff; */
    border: 5px solid #fff;
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    transition: all 0.3s ease 0s;
}
#contentDesign05 .v-expansion-panel-title__icon i{
    text-align: center;
    top: 4px;
    left: 3px;
}
#contentDesign05 .v-expansion-panel{
    border: none;
    box-shadow: none;
    border-radius: 10px;
    margin-bottom: 10px;
}
#contentDesign05 .v-expansion-panel-title{
    padding: 0;
    border: none;
    border-radius: 10px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
    display: block;
    padding: 20px 35px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    background: var(--v-success);
    border: none;
    position: relative;
    transition: all 0.3s ease 0s;
}   

#contentDesign05 .v-expansion-panel-text{
    padding: 15px 25px;
    /* background: var(--v-on-surface-variant);; */
    font-size: 14px;
    /* color: #fff; */
    line-height: 25px;
    border-top: none;
    position: relative;
}
#contentDesign05 .v-expansion-panels--variant-accordion > .v-expansion-panel::after{
    opacity: 0;
}
#contentDesign05 .v-expansion-panel__shadow{
    box-shadow: none;
}
@media only screen and (max-width:475px){
    #contentDesign05 .v-expansion-panel-title{
     font-size: 16px;
     line-height: 1.4;
    }
}









</style>
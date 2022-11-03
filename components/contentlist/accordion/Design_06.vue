<template>
    <div id="contentDesign06">
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
    },
}
</script>

<style>
#contentDesign06 .text-subtitle-2 {
    text-align: center;
    font-size: 32px !important;
    margin-bottom: 31px !important;
}
#contentDesign06 .v-expansion-panel-title__icon{
   
    font-weight: 900;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    background: var(--v-background);
    position: absolute;
    top: 12px;
    right: 19px;
    font-size: 14px;
    color:  var(--v-success);
    text-align: center;
    z-index: 1; 
    transform: translate(3%, 20%);

}
#contentDesign06 .v-expansion-panel-title:after{
    content: "";
    display: block;
    width: 3px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 30px;
    background: var(--v-background);}
#contentDesign06 .v-expansion-panel-text:after{
    content: "";
    display: block;
    width: 3px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 30px;
    background: var(--v-success);
}
#contentDesign06 .v-expansion-panel-title__icon i{
    top: 2px;
    left: 2px;
}
#contentDesign06 .v-expansion-panel{
    border: none;
    box-shadow: none;
    border-radius: 0;
    margin-top: 0;
}
#contentDesign06 .v-expansion-panel-title{
    padding: 0;
    border-radius: 0;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: var(--v-background);
    padding: 15px 48px 15px 20px;
    background: var(--v-success);
    position: relative;
    transition: all 0.3s ease 0s;
}   


#contentDesign06 .v-expansion-panel-text{
        background: var(--v-background);
    color: var(--v-success);
    padding: 20px 50px 15px 20px;
    line-height: 25px;
    border: none;
    position: relative;
}
                











</style>
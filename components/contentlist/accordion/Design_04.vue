<template>
    <div id="contentDesign04">
        <v-container>
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="item in contentListdata" :key="item">
                    <v-expansion-panel-title v-if="item.title" expand-icon="mdi-chevron-down" collapse-icon="mdi-chevron-up">
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
#contentDesign04 .text-subtitle-2 {
    text-align: center;
    font-size: 32px !important;
    margin-bottom: 31px !important;
}
#contentDesign04 .v-expansion-panel-title__icon{
    font-weight: 900;
    width: 55px;
    height: 55px;
    line-height: 55px;
    border-radius: 50%;
    background: var(--v-success);
    font-size: 18px;
    color: var(--v-background);
    text-align: center;
    border: 1px solid transparent;
    box-shadow: 0 3px 10px rgb(0 0 0 / 58%);
    position: absolute;
    top: 50%;
    left: -20px;
    transition: all 0.3s ease 0s;
    transform: translateY(-50%);
    display: inherit;
}
#contentDesign04 .v-expansion-panel{
    border: none;
    box-shadow: none;
    border-radius: 0;
    margin: 0 0 15px 10px;
}
#contentDesign04 .v-expansion-panel-title{
    padding: 0;
    border-radius: 30px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
    display: block;
    padding: 12px 20px 12px 50px;
    background: var(--v-success);
    font-size: 18px;
    font-weight: 600;
    color: var(--v-background);
    border: 1px solid transparent;
    border-radius: 30px;
    position: relative;
    transition: all 0.3s ease 0s;
}
/* #contentDesign04 .v-expansion-panel-title:after{
    content: "\f107";
    font-family: "Font Awesome 5 Free";
  
} */
#contentDesign04 .v-expansion-panel-text{
    /* padding: 20px 25px 10px 9px; */
    background: transparent;
    font-size: 14px;
    color: #8c8c8c;
    line-height: 25px;
    border-top: none;
    position: relative;
    padding-left: 25px;
    border-left: 1px dashed #8c8c8c;
}
#contentDesign04 .v-expansion-panel__shadow{
    box-shadow: none;
}
#contentDesign04 .v-expansion-panels{
    padding: 3px 30px 3px 30px;
}
#contentDesign04 .v-expansion-panels--variant-accordion > .v-expansion-panel::after{
    opacity: 0;
}
#contentDesign04 .v-expansion-panel__shadow{
    box-shadow: none;
}
@media only  screen and (max-width:475px){
    #contentDesign04 .v-expansion-panel-title{
        font-size: 16px;
        line-height: 1.4;
    }
}








</style>
<template>
    <div id="contentDesign07">
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
#contentDesign07 .text-subtitle-2 {
    text-align: center;
    font-size: 32px !important;
    margin-bottom: 31px !important;
}
#contentDesign07 .v-expansion-panel-title__icon{
    /* content: "\f106";
    font-family: "Font Awesome 5 Free"; */
    font-weight: 900;
    position: absolute;
    top: 30%;
    right: 15px;
    font-size: 18px;
    color: var(--v-background);
   

}
#contentDesign07 .v-expansion-panel-title--active:after{
    content: "";
    border-right: 24px solid var(--v-success);
    border-bottom: 18px solid transparent;
    position: absolute;
    bottom: 0;
    left: 0px;
    transform: translateY(100%);
    opacity: 0.6;
  
}
#contentDesign07 .v-expansion-panels{
    padding-right: 24px;
    padding-left: 24px;
    z-index: 1;
    gap:12px
}
#contentDesign07 .v-expansion-panel{
    border: none;
    box-shadow: none;
}
#contentDesign07 .v-expansion-panel-title{
    padding: 0;
    border-radius: 0;
    border: none;
    padding: 0;
    display: block;
    font-size: 16px;
    color: var(--v-background);
    font-weight: bold;
    background: var(--v-success);
    padding: 15px 50px 15px 25px;
    position: relative;
    margin-left: -24px;
    transition: all 0.3s ease 0s;
}
#contentDesign07 .v-expansion-panel-title:before{
    content: "";
    border-left: 24px solid var(--v-success);
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    position: absolute;
    top: 0;
    right: -24px;
    transition: all 0.3s ease 0s;
}
#contentDesign07 .v-expansion-panel-title--active:before{
    border-top: 33px solid transparent;
    border-bottom: 31px solid transparent;
    opacity: 1;
}
#contentDesign07 .v-expansion-panels--variant-accordion > .v-expansion-panel::after{
    opacity: 0;
}
#contentDesign07 .v-expansion-panel__shadow{
    box-shadow: none;
}
#contentDesign07 .v-expansion-panel-text__wrapper{
    margin-right: 24px;
    background: var(--v-on-surface-variant);
}
@media only  screen and (max-width:475px){
    #contentDesign07 .v-expansion-panel-title{
        padding: 15px 30px 15px 12px;
        font-size: 16px;
        line-height: 1.4;
    }
    #contentDesign07 .v-expansion-panels{
        padding-right: 0px;
    }
    #contentDesign07 .v-expansion-panel-title__icon{
        right: 4px;
    }
}





</style>
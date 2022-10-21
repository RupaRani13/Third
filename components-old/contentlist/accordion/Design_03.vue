<template>
    <div id="contentDesign03">
        <v-container>
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="item in contentListdata" :key="item">
                    <v-expansion-panel-title v-if="item.title" class="pa-4">
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
#contentDesign03 .text-subtitle-2 {
    text-align: center;
    font-size: 32px !important;
    margin-bottom: 31px !important;
}
#contentDesign03 .v-expansion-panel-title__icon{
    display: none;
}
#contentDesign03 .v-expansion-panels{
    padding: 3px 3px 3px 76px;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
#contentDesign03 .v-expansion-panels:before{
    content: "";
    width: 1px;
    height: calc(100% - 14px);
    background: var(--v-success);
    position: absolute;
    top: 0;
    left: 22px;
    z-index: -1;
}
#contentDesign03 .v-expansion-panel{
    border: none;
    box-shadow: none;
    border-radius: 0;
}
#contentDesign03 .v-expansion-panel-title{
    padding: 0;
    border-radius: 0;
    border: none;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
    position: relative;
}
#contentDesign03 .v-expansion-panel-title:before{
    content: "\f05b";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 20px;
    color: var(--v-background);
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: var(--v-success);
    border: 1px solid var(--v-success);
    position: absolute;
    top: 0;
    left: -74px;
}
#contentDesign03 .v-expansion-panel-title--active:before{
    background: var(--v-background);
    color: var(--v-success);
    opacity: 1;
}
#contentDesign03 .v-expansion-panel-text{
    font-size: 14px;

    line-height: 25px;
    padding: 5px 15px 15px 0;
    border: none;
}
#contentDesign03 .v-expansion-panels--variant-accordion > .v-expansion-panel::after{
    opacity: 0;
}
#contentDesign03 .v-expansion-panel__shadow{
    box-shadow: none;
}
@media screen and (max-width:475px) {
    #contentDesign03 .v-expansion-panel-title:before{
        left: -52px;
    }
    #contentDesign03 .v-expansion-panels{    
    padding-left: 55px;
    }
    #contentDesign07 .v-expansion-panel-title{
    font-size: 16px;
    line-height: 1.4;
    }
    
}




</style>
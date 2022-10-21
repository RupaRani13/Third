<template>
    <div id="contentDesign02">
        {{activePanel}}
        <v-container>
            <v-expansion-panels variant="accordion" v-model="activePanel">
                <v-expansion-panel v-for="(item,index) in contentListdata" :key="item" :value="index" >
                    <v-expansion-panel-title v-if="item.title">
                        {{item.title}}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text class="pa-4">
                        <p>hello</p>
                        <p class="" v-if="item.desci" v-html="item.desci"></p>
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
        return { contentListdata, 
                  };
       
    },
    data(){
        return{
            activePanel: 0,
        }
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
#contentDesign02 .text-subtitle-2 {
    text-align: center;
    font-size: 32px !important;
    margin-bottom: 31px !important;
}
#contentDesign02 .v-expansion-panel-title__icon{
    display: none;
}
#contentDesign02 .v-expansion-panel{
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin: 0 30px 10px 30px;
    overflow: hidden;
    position: relative;
    
}
#contentDesign02 .v-expansion-panel-title{
    
    border: none;
    border-radius: 0;
    position: relative;
}
#contentDesign02 .v-expansion-panel-title{
    display: block;
    padding: 15px 20px;
    margin: 0;
    background: var(--v-success);
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--v-background);
    border-radius: 0;
    position: relative;
}
#contentDesign02 .v-expansion-panel-title:before{
    content: "\f068";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    width: 30px;
    height: 30px;
    line-height: 25px;
    border-radius: 50%;
    background: var(--v-success);
    font-size: 14px;
    color: var(--v-background);
    text-align: center;
    border: 3px solid var(--v-background);
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
}
#contentDesign02 .v-expansion-panel-title:after{
    content: "";
    width: 17px;
    height: 7px;
    background: var(--v-background);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
#contentDesign02 .v-expansion-panel-text {
    border-left: 3px solid var(--v-success);
    border-top: none;
    background: var(--v-background);
    font-size: 15px;
    color: #1c2336;
    line-height: 27px;
    position: relative;
}

#contentDesign02 .v-expansion-panel-text:after{
    content: "";
    height: 3px;
    width: 50%;
    background: var(--v-success);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
}
#contentDesign02 .v-expansion-panel-title--active:before{
    background: var(--v-background);
    color: var(--v-success);
    opacity: 1;
}
#contentDesign02 .v-expansion-panels--variant-accordion > .v-expansion-panel::after{
    opacity: 0;
}
#contentDesign02 .v-expansion-panel__shadow{
    box-shadow: none;
}
@media only  screen and (max-width:475px){
    #contentDesign02 .v-expansion-panel-title{
        padding: 15px 47px 15px 12px;
        font-size: 16px;
        line-height: 1.4;
    }
}
</style>
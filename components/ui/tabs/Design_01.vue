<template>
    <div id="tabDesign01">
        <v-card flat>
            <v-tabs v-model="activeTab" color="success" show-arrows slider-color="background">
                <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)" :key="index">
                    {{item }}
                </v-tab>
            </v-tabs>
            <slot></slot>
        </v-card>
    </div>
</template>
<script>
export default {
    async setup() {
    },
    props : {
        list : {
            type : Array,
            required : true
        },
        activeTab : {
            default : 0,
        }

    },
    data(){
        return{
            albumId : null,
        }
    },
    methods : {
            setActiveTab(index){
                this.$emit('activeIndex', index);
            }
        },
    created(){
    
    },


}
</script>

<style>
 
    #tabDesign01 .v-btn__underlay, #tabDesign01 .v-btn__overlay{
        display: none;
    }
    #tabDesign01 .v-slide-group__next,#tabDesign01  .v-slide-group__prev{
        min-width: 15px  !important;
        background: var(--v-background);
        border: 2px solid var(--v-success);
        color: var(--v-success);
        max-width: 20px;
    }
    #tabDesign01 .v-btn__content{
        height: 100%;
    }
    #tabDesign01 .v-slide-group__next--disabled,#tabDesign01 .v-slide-group__prev--disabled{
        opacity: 1;
        background: var(--v-on-surface-variant);
    }
    #tabDesign01 .v-tab{
        color:var(--v-success) 
    }
    #tabDesign01 .v-tab.active{
        background: var(--v-success);
        color:var(--v-background) !important;
    }
   
    @media only screen and (max-width:475px) {
        #tabDesign01  .v-tabs{
            display: block;
        height: fit-content;
        }
        #tabDesign01 .v-tabs .v-tab a{
            max-width: 100%;
        }
 
        #tabDesign01 .v-slide-group__content ._web-inspector-hide-shortcut_{
            width: 100%;
            display: block;
        }
        #tabDesign01 .v-tabs .v-tab{
            display: block;
            
        }
        #tabDesign01 .v-btn__content{
            width: calc(100vw - 32px);
            height: 100%;
            
        }
  
        #tabDesign01 .v-slide-group__content{
            display: block;
        }
        #tabDesign01 .v-slide-group__prev, #tabDesign01 .v-slide-group__next{
            display: none;
        }
        #tabDesign01 .v-slide-group__container{
        justify-content: center;
    }
    }
        
    

</style>
<template>
    <div id="tabDesign05">
        <v-container>
            <v-card>
                <v-tabs class="nav-tabs" show-arrows center-active>
                    <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)" :key="index"><a>{{item}}</a></v-tab>
                </v-tabs >
                <slot></slot>

            </v-card>
        </v-container>
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
            }
        },
        data(){
            return{
                activeTab : 0,
                albumId : null,
            }
        },
        methods : {
            setActiveTab(index){
                this.activeTab = index;
                this.$emit('activeIndex', index);
            }
        },
        created(){
        
        },
    
    
    }
    </script>
<style>
    
     #tabDesign05  > .v-card{
        display: none
    }
     #tabDesign05 .nav-tabs {
    margin: 0;
    border: none;
    position: relative;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    }
     #tabDesign05 .nav-tabs>.v-tab {
        float: left;
        margin-bottom: -1px;
        position: relative;
        display: block;
    
    }
     #tabDesign05 .nav-tabs .v-tab{
        padding: 0 !important;
      
    }
    #tabDesign05  .nav-tabs .v-tab a {
    color: var(--v-surface-variant);
    background: var(--v-background);
    border-radius: 0;
    font-size: 16px;
    margin-right: -1px;
    padding: 5.5px 30px;
    border-top: 1px solid var(--v-on-surface-variant);;
    border-bottom: 1px solid var(--v-on-surface-variant);;
    }
    #tabDesign05 .nav-tabs .v-tab.active a{
        border: none;
    color: var(--v-background);
    background: var(--v-success);
    border-top: 1px solid var(--v-on-surface-variant);;
    border-bottom: 1px solid var(--v-on-surface-variant);;
    }
    #tabDesign05 .nav-tabs .v-tab.active > a, #tabDesign05 .nav-tabs > .v-tab.active > a:focus,#tabDesign05 .nav-tabs > .v-tab.active > a:hover{
        border: none;
    color: var(--v-background);
    background:  var(--v-success);
    border-top: 1px solid var(--v-on-surface-variant);
    border-bottom: 1px solid var(--v-on-surface-variant);
    }
    #tabDesign05 .nav-tabs .v-tab a:before {
    border-bottom: 15px solid rgba(0, 0, 0, 0);
    border-left: 15px solid var(--v-background);
    border-top: 15px solid rgba(0, 0, 0, 0);
    content: "";
    position: absolute;
    right: -15px;
    top: 9px;
    z-index: 2;
}
    #tabDesign05 .nav-tabs .v-tab.active a:before {
        border-left: 17px solid  var(--v-success);
        /* top:11px;
        content: ""; */
    }

    #tabDesign05  .nav-tabs .v-tab.active a:after , #tabDesign05  .nav-tabs .v-tab a:after{
    content: "";
    border-left: 17px solid  var(--v-success);
    border-top: 17px solid transparent;
    border-bottom: 17px solid transparent;
    position: absolute;
    top: 8px;
    right: -17px;
    z-index: 1;
}
#tabDesign05 .nav-tabs  .v-tab a:after {
    border-left: 17px solid  var(--v-on-surface-variant);

    
}

     #tabDesign05 .v-tab--selected .v-tab__slider{
        display :  none
    }
     #tabDesign05 .v-btn__underlay,  #tabDesign05 .v-btn__overlay{
        display: none;
    }
     #tabDesign05 .v-slide-group__next, #tabDesign05  .v-slide-group__prev{
        min-width: 15px  !important;
        background: var(--v-background);
        border: 2px solid var(--v-success);
        color: var(--v-success);
        max-width: 20px;
    }
     #tabDesign05 .v-btn__content{
        height: 100%;
    }
     #tabDesign05 .v-slide-group__next--disabled, #tabDesign05 .v-slide-group__prev--disabled{
        opacity: 1;
        background: var(--v-on-surface-variant);
    }
     #tabDesign05 > .v-container > .v-card,  #tabDesign05 > .v-container > .v-card .v-card:first-of-type {
        box-shadow : none;
        border-radius: 0px;
    }
    #tabDesign05 .nav-tabs .v-tab a:first-child{
       border-left:  1px solid var(--v-on-surface-variant);;
    }
    #tabDesign05 .nav-tabs .v-tab:last-child a{
       border-right:  1px solid var(--v-on-surface-variant);;
    }
    @media only screen and (max-width:475px) {
         #tabDesign05 .nav-tabs .v-tab a{
            display: block;
            width: 100%;
            max-width: unset;
            border-top: unset;
    border-bottom: unset;
    justify-content: center;
    height: 100%;
    align-items: center;
    display: flex;
        }
         #tabDesign05 .nav-tabs{
            display: block;
        height: fit-content;
        }
        .v-slide-group__content .__web-inspector-hide-shortcut__{
            width: 100%;
            display: block;
        }
         #tabDesign05 .nav-tabs .v-tab{
            display: block;
            
        }
         #tabDesign05 .v-btn__content{
            display: block;
            width: calc(100vw - 64px);
            height: 100%;
            
        }
         #tabDesign05 .v-slide-group__content{
            display: block;
        }
         #tabDesign05 .v-slide-group__prev,  #tabDesign05 .v-slide-group__next{
            display: none;
        }
        #tabDesign05 .nav-tabs .v-tab a:before,#tabDesign05 .nav-tabs .v-tab a:after{
            display: none;
        }
      
    }
</style>
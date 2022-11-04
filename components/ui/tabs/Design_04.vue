<template>
    <div id="tabDesign04">
        <v-container>
            <v-card flat>
                <v-tabs v-model="activeTab" class="nav-tabs" show-arrows center-active>
                    <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)" :key="index"><a>{{item }}</a></v-tab>
                </v-tabs>
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
            },
            activeTab : {
                default: 0
            }
        },
        data(){
            return{
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
    #tabDesign04   > .v-card{
        display: none
    }
    #tabDesign04  .nav-tabs {
    margin: 0;
    border: none;
    position: relative;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    }
    #tabDesign04  .nav-tabs>.v-tab {
        float: left;
        margin-bottom: -1px;
        position: relative;
        display: block;
    
    }
    #tabDesign04  .nav-tabs .v-tab{
        padding: 0 !important;
      
    }
    #tabDesign04  .nav-tabs .v-tab a{
        font-size: 16px;
        font-weight: 700;
        background: none;
        color: var(--v-surface-variant);
        border: none;
        padding: 10px 15px;
        border-radius: 50px;
        transition: all 0.5s ease 0s;
        max-width: 220px;
        min-width: 100px;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    #tabDesign04  .nav-tabs .v-tab a, #tabDesign04  .nav-tabs .v-tab a:focus, #tabDesign04  .nav-tabs .v-tab a:hover {
        border: none;
        background: var(--v-background);
        color:var(--v-success);
    }
    #tabDesign04  .nav-tabs .v-tab.active a, #tabDesign04  .nav-tabs .v-tab a:hover, #tabDesign04  .nav-tabs .v-tab.active a:hover {
        color: var(--v-background);
        background-color:var(--v-success);
   
    }
    #tabDesign04  .nav-tabs .v-tab a:before, #tabDesign04  .nav-tabs .v-tab a:after {
        content: "";
        background:var(--v-success);
        height: 100%;
        width: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        transition: all 0.5s ease 0s;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    #tabDesign04  .v-tab--selected .v-tab__slider{
        display :  none
    }
    #tabDesign04  .v-btn__underlay, #tabDesign04  .v-btn__overlay{
        display: none;
    }
    #tabDesign04  .v-slide-group__next,#tabDesign04   .v-slide-group__prev{
        min-width: 15px  !important;
        background: var(--v-background);
        border: 2px solid var(--v-success);
        color: var(--v-success);
        max-width: 20px;
    }
    #tabDesign04  .v-btn__content{
        height: 100%;
    }
    #tabDesign04  .v-slide-group__next--disabled,#tabDesign04  .v-slide-group__prev--disabled{
        opacity: 1;
        background: var(--v-on-surface-variant);
    }
    #tabDesign04  > .v-container > .v-card, #tabDesign04  > .v-container > .v-card .v-card:first-of-type {
        box-shadow : none;
        border-radius: 0px;
    }
    #tabDesign04  > .v-container > .v-card .v-card:first-of-type {
        border : 2px solid var(--v-success);
       
    }
    @media only screen and (max-width:475px) {
        #tabDesign04  .nav-tabs .v-tab a{
            display: block;
            width: 100%;
            max-width: unset;
        }
        #tabDesign04  .nav-tabs{
            display: block;
        height: fit-content;
        }
        .v-slide-group__content .__web-inspector-hide-shortcut__{
            width: 100%;
            display: block;
        }
        #tabDesign04  .nav-tabs .v-tab{
            display: block;
            
        }
        #tabDesign04  .v-btn__content{
            display: block;
            width: calc(100vw - 64px);
            height: 100%;
            
        }
        #tabDesign04  .v-slide-group__content{
            display: block;
        }
        #tabDesign04  .v-slide-group__prev, #tabDesign04  .v-slide-group__next{
            display: none;
        }
    }
</style>
<template>
    <div id="photoAlbumDesign07">
        <v-container>
            <v-card>
          
                    <v-tabs class="nav-tabs" show-arrows center-active>
                    <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)" :key="index"><a>{{item}}</a></v-tab>
                    </v-tabs >

                <!-- <v-tabs background-color="success" show-arrows slider-color="background">
                    <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)" :key="index">
                        {{item.title }}
                    </v-tab>
                </v-tabs> -->
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
    #photoAlbumDesign07   > .v-card{
        display: none
    }
    #photoAlbumDesign07  .nav-tabs {
    margin: 0;
    border: none;
    position: relative;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    }
    #photoAlbumDesign07  .nav-tabs>.v-tab {
        float: left;
        margin-bottom: -1px;
        position: relative;
        display: block;
    
    }
    #photoAlbumDesign07  .nav-tabs .v-tab{
        padding: 0 !important;
      
    }
    #photoAlbumDesign07  .nav-tabs .v-tab a{
        padding: 10px 20px;
    margin: 0 10px -1px 0;
    font-size: 17px;
    font-weight: 600;
    color: var(--v-surface-variant);
    text-transform: uppercase;
    border: 2px solid var(--v-on-surface-variant);
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    z-index: 1;
    position: relative;
    transition: all 0.3s ease 0s;
    display: block;
    max-width: 220px;
    min-width: 100px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    }
    #photoAlbumDesign07 .nav-tabs .v-tab a:hover,#photoAlbumDesign07 .nav-tabs .v-tab.active a {
    background: var(--v-background);
    color: var(--v-success);
    border: 2px solid var(--v-success);
    border-bottom-color: transparent;
}  
#photoAlbumDesign07 .nav-tabs .v-tab a:before {
    content: "";
    display: block;
    height: 2px;
    background: var(--v-background);
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
   }
   #photoAlbumDesign07.nav-tabs .v-tab.active a:before,
   #photoAlbumDesign07 .nav-tabs .v-tab a:hover:before{ transform: scaleX(1); }
  
    /* #photoAlbumDesign07  .nav-tabs .v-tab a, #photoAlbumDesign07  .nav-tabs .v-tab a:focus, #photoAlbumDesign07  .nav-tabs .v-tab a:hover {
        border: none;
        background: var(--v-background);
        color:var(--v-success);
    }
    #photoAlbumDesign07  .nav-tabs .v-tab.active a, #photoAlbumDesign07  .nav-tabs .v-tab a:hover, #photoAlbumDesign07  .nav-tabs .v-tab.active a:hover {
        color: var(--v-background);
        background-color:var(--v-success);
   
    }
    #photoAlbumDesign07  .nav-tabs .v-tab a:before, #photoAlbumDesign07  .nav-tabs .v-tab a:after {
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
    } */

    #photoAlbumDesign07  .v-tab--selected .v-tab__slider{
        display :  none
    }
    #photoAlbumDesign07  .v-btn__underlay, #photoAlbumDesign07  .v-btn__overlay{
        display: none;
    }
    #photoAlbumDesign07  .v-slide-group__next,#photoAlbumDesign07   .v-slide-group__prev{
        min-width: 15px  !important;
        background: var(--v-background);
        border: 2px solid var(--v-success);
        color: var(--v-success);
        max-width: 20px;
    }
    #photoAlbumDesign07  .v-btn__content{
        height: 100%;
    }
    #photoAlbumDesign07  .v-slide-group__next--disabled,#photoAlbumDesign07  .v-slide-group__prev--disabled{
        opacity: 1;
        background: var(--v-on-surface-variant);
    }
     #photoAlbumDesign07 .v-slide-group__content{
        border-bottom: 2px solid var(--v-success);
    }
    @media only screen and (max-width:475px) {
        #photoAlbumDesign07  .nav-tabs .v-tab a{
            display: block;
            width: 100%;
            max-width: unset;
        }
        #photoAlbumDesign07  .nav-tabs{
            display: block;
        height: fit-content;
        }
        .v-slide-group__content .__web-inspector-hide-shortcut__{
            width: 100%;
            display: block;
        }
        #photoAlbumDesign07  .nav-tabs .v-tab{
            display: block;
            
        }
        #photoAlbumDesign07  .v-btn__content{
            display: block;
            width: calc(100vw - 64px);
            height: 100%;
            
        }
        #photoAlbumDesign07  .v-slide-group__content{
            display: block;
        }
        #photoAlbumDesign07  .v-slide-group__prev, #photoAlbumDesign07  .v-slide-group__next{
            display: none;
        }
    }
</style>
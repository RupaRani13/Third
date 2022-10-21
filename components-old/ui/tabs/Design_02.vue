<template>
    <div id="photoAlbumDesign02">
        <v-container>
            <v-card flat>
                <v-tabs class="nav-tabs" show-arrows center-active>
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
    #photoAlbumDesign02  > .v-card{
        display: none
    }
    #photoAlbumDesign02 .nav-tabs {
    margin: 0;
    border: none;
    position: relative;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    }
    #photoAlbumDesign02 .nav-tabs>.v-tab {
        float: left;
        margin-bottom: -1px;
        position: relative;
        display: block;
    
    }
    #photoAlbumDesign02 .nav-tabs .v-tab{
        padding: 0 !important;
      
    }
    #photoAlbumDesign02 .nav-tabs .v-tab a {
        color: var(--v-background);
        background-color: var(--v-success);
        font-size: 17px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-align: center;
        text-transform: capitalize;
        padding: 11px 18px;
        /* margin: 0 0 -3px 0; */
        border-radius: 0;
        border: none;
        display: block;
        overflow: hidden;
        position: relative;
        z-index: 1;
        transition: all 0.3s ease 0s;
        text-decoration: none;
        max-width: 220px;
        min-width: 100px;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 100%;
        border-left: 1px solid var(--v-background);
        border-right: 1px solid var(--v-background);
        border-bottom: 1px solid var(--v-background);

    }
    #photoAlbumDesign02 .nav-tabs .v-tab:first-child a{
        border-left: 2px solid var(--v-success);
    }
    #photoAlbumDesign02 .nav-tabs .v-tab:last-child a{
        border-right: 2px solid var(--v-success);
    }

    #photoAlbumDesign02 .nav-tabs .v-tab.active a, #photoAlbumDesign02 .nav-tabs .v-tab a:hover, #photoAlbumDesign02 .nav-tabs .v-tab.active a:hover {
        color: var(--v-success);
        background-color: var(--v-background);
   
    }
    #photoAlbumDesign02 .nav-tabs .v-tab a:before, #photoAlbumDesign02 .nav-tabs .v-tab a:after {
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
    #photoAlbumDesign02 .nav-tabs .v-tab a:after {
        background: var(--v-success);
    }
    #photoAlbumDesign02 .nav-tabs .v-tab.active a:before, #photoAlbumDesign02 .nav-tabs .v-tab a:hover:before {
        opacity: 1;
        clip-path: polygon(0 0, 100% 0, 5% 10%, 0% 100%);
    }
    #photoAlbumDesign02 .nav-tabs .v-tab.active a:after, #photoAlbumDesign02 .nav-tabs .v-tab a:hover:after {
        opacity: 1;
        clip-path: polygon(95% 90%, 100% 0, 100% 100%, 0% 100%);
    }
    #photoAlbumDesign02 .v-tab--selected .v-tab__slider{
        opacity: 0;
    }
    #photoAlbumDesign02 .v-btn__underlay, #photoAlbumDesign02 .v-btn__overlay{
        display: none;
    }
    #photoAlbumDesign02 .v-slide-group__next,#photoAlbumDesign02  .v-slide-group__prev{
        min-width: 15px  !important;
        background: var(--v-background);
        border: 2px solid var(--v-success);
        color: var(--v-success);
        max-width: 20px;
    }
    #photoAlbumDesign02 .v-btn__content{
        height: 100%;
    }
    #photoAlbumDesign02 .v-slide-group__next--disabled,#photoAlbumDesign02 .v-slide-group__prev--disabled{
        opacity: 1;
        background: var(--v-on-surface-variant);
    }
    #photoAlbumDesign02 > .v-container > .v-card, #photoAlbumDesign02 > .v-container > .v-card .v-card:first-of-type {
        box-shadow : none;
        border-radius: 0px;
    }
    #photoAlbumDesign02 > .v-container > .v-card .v-card:first-of-type {
        border : 2px solid var(--v-success);
       
    }
    @media only screen and (max-width:475px) {
        #photoAlbumDesign02 .nav-tabs .v-tab a{
            max-width: 100%;
        }
        #photoAlbumDesign02 .nav-tabs{
            display: block;
        height: fit-content;
        }
        .v-slide-group__content .__web-inspector-hide-shortcut__{
            width: 100%;
            display: block;
        }
        #photoAlbumDesign02 .nav-tabs .v-tab{
            display: block;
            
        }
        #photoAlbumDesign02 .v-btn__content{
            display: block;
            /* background: black; */
            width: calc(100vw - 64px);
            height: 100%;
            
        }
        #photoAlbumDesign02 .v-slide-group__content{
            display: block;
        }
        #photoAlbumDesign02 .v-slide-group__prev, #photoAlbumDesign02 .v-slide-group__next{
            display: none;
        }
    }
</style>
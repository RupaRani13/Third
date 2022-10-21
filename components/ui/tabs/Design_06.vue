<template>
    <div id="tabDesign06">
        <v-container>
            <v-card>
          <div>
            <v-tabs class="nav-tabs" show-arrows center-active>
                    <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)"  :key="index"><a>{{item }}</a></v-tab>
                </v-tabs>
          </div>
               
       
                <!-- <v-tabs background-color="success" show-arrows slider-color="background">
                    <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)" :key="index">
                        {{item.title }}
                    </v-tab>
                </v-tabs> -->
                

            </v-card>
            <slot></slot>
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
    
    /* #tabDesign06  > .v-card{
        display: none
    } */
    #tabDesign06 .nav-tabs {
        box-shadow: -1px 0 2px var(--v-success);
    border-bottom: 0 none;

    }
    #tabDesign06 .nav-tabs>.v-tab {
        float: left;
        margin-bottom: -1px;
        position: relative;
        display: block;
    
    }
    #tabDesign06 .nav-tabs .v-tab{
        padding: 0px 0px 20px 0px;
      
    }
    #tabDesign06 .nav-tabs>.v-tab {
    position: relative;
    display: block;
    }
    #tabDesign06 .nav-tabs .v-tab a {
        display: block;
    font-size: 14px;
    color: var(--v-background);
    text-align: center;
    border: none;
    padding: 18px;
    background: #272e38;
    border-radius: 0;
    margin: 0;
    position: relative;
    transition: all 0.3s ease 0s;
    max-width: 220px;
    min-width: 100px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    }
    #tabDesign06 .nav-tabs .v-tab.active a::before {
    content: "";
    position: absolute;
    top: 57px;
    left: 39%;
    border: 15px solid transparent;
    border-top-color: var(--v-success);
    background: transparent;
}
    #tabDesign06  .nav-tabs .v-tab.active a, #tabDesign06  .nav-tabs .v-tab.active a:focus, #tabDesign06   .nav-tabs .v-tab.active a:hover{
    border: none;
    background: var(--v-success);
    color: var(--v-background);
    transition: all 0.20s ease 0s;
   }

#tabDesign06 .v-card--variant-elevated{
    box-shadow:none;
} 
    #tabDesign06 .v-btn__underlay, #tabDesign06 .v-btn__overlay,#tabDesign06 .v-tab__slider{
        display: none;
    }
    #tabDesign06 .v-slide-group__next,#tabDesign06  .v-slide-group__prev{
        min-width: 15px  !important;
        background: var(--v-background);
        border: 2px solid var(--v-success);
        color: var(--v-success);
        max-width: 20px;
    }
    #tabDesign06 .v-btn__content{
        height: 100%;
    }
    #tabDesign06 .v-slide-group__next--disabled,#tabDesign06 .v-slide-group__prev--disabled{
        opacity: 1;
        background: var(--v-on-surface-variant);
    }
 
    @media only screen and (max-width:475px) {
        #tabDesign06 .nav-tabs .v-tab a{
            max-width: 100%;
        }
        #tabDesign06 .nav-tabs{
            display: block;
        height: fit-content;
        }
        .v-slide-group__content .__web-inspector-hide-shortcut__{
            width: 100%;
            display: block;
        }
        #tabDesign06 .nav-tabs .v-tab{
            display: block;
            
        }
        #tabDesign06 .v-btn__content{
            display: block;
          
            width: calc(100vw - 64px);
            height: 100%;
            
        }
        #tabDesign06 .v-slide-group__content{
            display: block;
        }
        #tabDesign06 .v-slide-group__prev, #tabDesign06 .v-slide-group__next{
            display: none;
        }
    }

  </style>



<!-- <style>
#tabDesign06 .nav-tabs{
    box-shadow: -1px 0 2px var(--v-success);
    border-bottom: 0 none;
    width: fit-content;
    display: flex;

}
#tabDesign06 .nav-tabs .v-tab{

    padding: 0px 0px 20px 0px;
}

#tabDesign06 .nav-tabs>.v-tab {
    position: relative;
    display: block;
  
}
#tabDesign06  .nav-tabs .v-tab a{
    display: block;
    font-size: 14px;
    color: var(--v-background);
    text-align: center;
    border: none;
    padding: 18px;
    background: #272e38;
    border-radius: 0;
    margin: 0;
    position: relative;
    transition: all 0.3s ease 0s;
    max-width: 220px;
    min-width: 100px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
#tabDesign06  .nav-tabs .v-tab.active a, #tabDesign06  .nav-tabs .v-tab.active a:focus, #tabDesign06   .nav-tabs .v-tab.active a:hover{
    border: none;
    background: var(--v-success);
    color: var(--v-background);
    transition: all 0.20s ease 0s;
}
#tabDesign06 .nav-tabs .v-tab.active:before {
    content: "";
    position: absolute;
    top: 57px;
    left: 39%;
    border: 15px solid transparent;
    border-top-color: var(--v-success);
    background: transparent;
}
#tabDesign06 .v-card--variant-elevated{
    box-shadow:none;
}

@media screen and (max-width: 475px){
    #tabDesign06 .nav-tabs{
        display: block;
    }
    #tabDesign06 .nav-tabs>.v-tab{
    display: block;
    width: 100%;
    padding: 0px 0px 3px 0px;
    }
    #tabDesign06 .nav-tabs .v-tab a{
        max-width: unset;   
    }
    #tabDesign06 .nav-tabs .v-tab.active:before{
        display: none;
    } 
  
    
}
</style> -->
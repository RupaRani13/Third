<template>
    <div id="tabDesign03">
        <v-container>
            <v-card>
                <v-tabs class="nav-tabs" show-arrows>
                    <v-tab v-for="(item,index) in list" :class="[activeTab==index?'active': '']" @click="setActiveTab(index)" :key="index"><a>{{item}}</a></v-tab>
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
    #tabDesign03 .nav-tabs {
    border: none;
    margin-bottom: 20px;
}
#tabDesign03 .nav-tabs>.v-tab {
    float: left;
    margin-bottom: -1px;
    position: relative;
    display: block;
 
}
#tabDesign03 .nav-tabs .v-tab{
    padding: 0 !important;
}
#tabDesign03 .nav-tabs .v-tab a {
    margin-right: 15px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background: var(--v-success);
    border: 1px solid var(--v-success);
    border-radius: 0;
    box-shadow: 5px 5px 0 0 var(--v-surface-variant);
    position: relative;
    transition: all 0.5s ease 0s;
    padding: 6px 12px;
    max-width: 220px;
    min-width: 100px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
#tabDesign03 .nav-tabs .v-tab.active a, #tabDesign03 .nav-tabs .v-tab a:hover, #tabDesign03 .nav-tabs .v-tab.active a:hover {
    color: var(--v-surface-variant);
    background: #fff;
    border: 1px solid var(--v-success);
    box-shadow: -5px -5px 0 0 var(--v-surface-variant);
}
.nav-tabs>.v-tab>a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
#tabDesign03 .v-btn.v-tab.active .v-tab__slider{
    display: none;
}
#tabDesign03 .v-slide-group__next,#tabDesign03 .v-slide-group__prev{
    min-width: 25px  !important;
        background: var(--v-background);
      
        color: var(--v-success);
        max-width: 20px;
}
#tabDesign03 .v-slide-group__next--disabled,#tabDesign03 .v-slide-group__prev--disabled{
    opacity: 0.8;
}
#tabDesign03 > .v-container > .v-card{
    overflow: initial;
}

#tabDesign03 > .v-container > .v-card , #tabDesign03 > .v-container > .v-card .v-card:first-of-type{
    box-shadow: none;
    border-radius: 0px;
}
#tabDesign03 > .v-container > .v-card .v-card:first-of-type{
    box-shadow: 9px 9px 1px -1px var(--v-success), 0px 1px 1px 0px var(--v-success), 0px 1px 3px 0px var(--v-success);
}

@media only screen and (max-width:475px){
    #tabDesign03 .nav-tabs .v-tab a{
            max-width: 100%;
            margin: 0px 15px;
        }
        #tabDesign03 .nav-tabs{
            display: block;
        height: fit-content;
        }
        #tabDesign03 .v-slide-group__prev, #tabDesign03 .v-slide-group__next{
            display: none;
        }
        #tabDesign03 .nav-tabs .v-tab{
            display: block;
            width: 100%;
        }
        #tabDesign03  .v-slide-group__content{
            width: 100%;
            display: block;
        }
       
       
}



</style>
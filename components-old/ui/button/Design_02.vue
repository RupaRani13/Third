<template>
    <v-btn class="ma-2" id="buttonDesign_02" href="">
        <span>button</span>
    </v-btn> 
</template>

<script>
    export default {
        
    }
</script>

<style>
#buttonDesign_02.v-btn{
    background: var(--v-on-surface-variant);
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px 20px 11px;
    border-radius: 0;
    border: none;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    text-decoration: none;
}
#buttonDesign_02.v-btn:focus,
#buttonDesign_02.v-btn:hover{
    color:  var(--v-success);
    background: transparent;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 
                7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
}
#buttonDesign_02.v-btn:before,
#buttonDesign_02.v-btn .v-btn__content:after
 {
    content: '';
    background: var(--v-success);
    height: 2px;
    width: 0;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.4s ease all;
}
#buttonDesign_02.v-btn .v-btn__content:after{
    top: auto;
    right: auto;
    left: 0;
    bottom: 0;
}
#buttonDesign_02.v-btn:hover:before,
#buttonDesign_02.v-btn .v-btn__content:hover:after{ 
    width: 100%;
    transition: 800ms ease all; 
} 
@media only screen and (max-width: 767px){
#buttonDesign_02 .v-btn{ margin-bottom: 30px; }
}

</style>
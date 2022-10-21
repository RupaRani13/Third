<template>
            <v-btn class="ma-2" href="" id="buttonDesign_05">
                <span>button</span>
             </v-btn> 
</template>

<script>
    export default {
        
    }
</script>

<style>
#buttonDesign_05.v-btn{
    color: var(--v-surface-variant);
    background: transparent;
    text-transform: uppercase;
    border-radius: 0;
    position: relative;
    z-index: 1;
    transition:all 0.5s ease 0s;
    text-decoration: none;
}
#buttonDesign_05.v-btn:focus,
#buttonDesign_05.v-btn:hover{
    color: var(--v-background);
    background: var(--v-success);
}
#buttonDesign_05.v-btn:before,
#buttonDesign_05.v-btn__content:after
{
    content: '';
    height: 100%;
    width: 80%;
    border: 2px solid var(--v-success);
    border-right: none;
    border-bottom: none;
    position: absolute;
    left: -7px;
    top: -7px;
    transition: all 0.2s ease-in, width 0.5s cubic-bezier(.45,-0.33,.43,1.46);
}
#buttonDesign_05.v-btn__content:after{
    transform: rotate(180deg);
    top: auto;
    left: auto;
    right: -7px;
    bottom: -7px;
}
#buttonDesign_05.v-btn:hover:before,
#buttonDesign_05.v-btn__content:hover::after{
    width: 30%;
}
@media only screen and (max-width: 767px){
    #buttonDesign_05.v-btn{ margin-bottom: 30px; }
}


</style>
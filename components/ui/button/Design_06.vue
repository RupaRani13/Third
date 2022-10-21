<template>
        <v-btn class="ma-2" href="" id="buttonDesign_06">
                <span>button</span>
             </v-btn> 
</template>

<script>
    export default {
        
    }
</script>

<style>
#buttonDesign_06.v-btn{
    color: var(--v-surface-variant);
    letter-spacing: 1px;
    text-transform: capitalize;
    padding: 7px 30px 8px;
    border: none;
    border-radius: 0;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    background-color: var(--v-on-surface-variant);
}
#buttonDesign_06.v-btn:focus{ color: var(--v-success); }
#buttonDesign_06.v-btn:hover{
    color: var(--v-success);
    background: var(--v-background);
    box-shadow: 0 0 5px rgba(0,0,0,0.1),3px 3px var(--v-background),6px 6px var(--v-success);
}
#buttonDesign_06.v-btn:before{
    content: '';
    background-color: var(--v-on-surface-variant);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease 0s;
}
#buttonDesign_06.v-btn:hover:before{ width: 50%; }
@media only screen and (max-width: 767px){
    #buttonDesign_06.v-btn{ margin-bottom: 20px; }
}

</style>
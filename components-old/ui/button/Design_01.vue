<template>
            <v-btn class="ma-2" id="buttonDesign_01" href="">
                <span>button</span>
            </v-btn> 
</template>

<script>
    export default {
        
    }
</script>

<style>
#buttonDesign_01.v-btn{
    color:var(--v-background);
    background: var(--v-success);
    transition: 0.5s ease-in-out;
    text-decoration: none;
}
#buttonDesign_01.v-btn:focus{ color: var(--v-background); }
#buttonDesign_01.v-btn:hover{
    color: var(--v-success);
    background: none;
    border-radius: 100px;
    box-shadow: 0 0 0 1px var(--v-background), 0 0 0 2px  var(--v-success), 
                0 0 0 5px  var(--v-success),0 0 0 6.5px  var(--v-background), 0 0 0 7px  var(--v-success);
}

</style>
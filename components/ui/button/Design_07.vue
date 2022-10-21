<template>
        <v-btn class="ma-2" href="" id="buttonDesign_07">
                <span>button</span>
        </v-btn>     
</template>

<script>
    export default {
        
    }
</script>

<style>
#buttonDesign_07.v-btn{
    text-transform: uppercase;
    color: var(--v-varient-surface);
    box-shadow:none;
    transition: all 0.40s ease;
    -webkit-transition: all 0.40s ease;
    -moz-transition: all 0.40s ease;
    -ms-transition: all 0.40s ease;
    -o-transition: all 0.40s ease;
    background:var(--v-success);
    padding: 10px;
    text-decoration: none;
}
#buttonDesign_07.v-btn:hover {
    color: var(--v-success);
    background: transparent;
    box-shadow: 0 0 10px 0 var(--v-success) inset, 0 0 10px 4px var(--v-success);
}

@media only screen and (max-width: 767px) {
    #buttonDesign_07.v-btn{ margin-bottom: 15px; }
}
</style>
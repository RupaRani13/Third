<template>
    <div>
        <v-img style="margin:auto" src="/404_pic1.svg" lazy-src="/404_pic1.svg" max-width=600px; aspect-ratio="1" cover>
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
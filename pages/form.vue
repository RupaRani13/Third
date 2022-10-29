<template>
    <div>
{{formData}}

    </div>
</template>

<script>
    export default {
        async setup(){
            const formData = await useContact()
            return{
                formData
            }
        },
        data(){
            return{
                
            }
        },
    }
</script>

<style>

</style>
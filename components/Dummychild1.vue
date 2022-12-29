<template>
    <div>
        subchild {{ xyz }}
    </div>
</template>

<script>
    export default {
        props:{
            xyz:{
                type : String,

            }
        }
    }
</script>

<style  scoped>

</style>
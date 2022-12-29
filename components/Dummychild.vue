<template>
    <div>
<p >Child {{myprop}}</p>
<dummychild-1 :xyz="myprop"></dummychild-1>
    </div>
</template>

<script>
    export default {
        props:{
            myprop:{
                type : String,

            }
        }
    }
</script>

<style  scoped>

</style>
<template>
    <div>
        <PagenotfoundDesign02 @handleClearError = 'handleClearError'></PagenotfoundDesign02>

        <!-- <button @click="handleClearError">Go Back</button> -->

    </div>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = ()=>clearError({redirect : '/'})
</script>

<style scoped>

</style>
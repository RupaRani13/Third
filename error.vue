<template>
    <div>
        <PagenotfoundDesign03 @handleClearError = 'handleClearError'></PagenotfoundDesign03>
    </div>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = ()=>clearError({redirect : '/'})
</script>

<style scoped>

</style>
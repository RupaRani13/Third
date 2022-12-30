<template>
    <div>
        <PagenotfoundDesign01 @handleClearError = 'handleClearError'></PagenotfoundDesign01>
    </div>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = ()=>clearError({redirect : '/'})
</script>

<style scoped>

</style>
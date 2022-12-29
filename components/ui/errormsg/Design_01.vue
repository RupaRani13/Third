<template>
      <div class="text-center">
        <v-snackbar v-model="modelValue" :timeout="timeout" @update:modelValue="$emit('update:modelValue', false)">
            {{ displayText }}
            <template v-slot:actions>
                <v-btn color="#03a84e" variant="text" @click="$emit('update:modelValue', false)">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        setup() {
            
        },
        props: {
        modelValue: {
            default: false,
        },
        displayText: {
            default: 'Please fill the required fields',
        },
        timeout: {
            default: 2000,
        }
    }
        
    }
</script>

<style lang="scss" scoped>

</style>
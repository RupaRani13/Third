<template>
    <div id="fromDesign01">
        <!-- <template v-if="type == 'text'">
                <v-text-field validate-on="input" v-if="required" :label="`${label}*`"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required]" >
                </v-text-field>
                <v-text-field validate-on="input" v-else :label="label"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" rules="" >
                </v-text-field>
        </template>
        <template v-if="type == 'mobile'">
                <v-text-field validate-on="input" v-if="required" :label="`${label}*`"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required, rules.mobileNumber]" >
                </v-text-field>
                <v-text-field validate-on="input" v-else :label="label"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.mobileNumber]" >
                </v-text-field>
        </template>
        <template v-if="type == 'email'">
                <v-text-field validate-on="input" v-if="required" :label="`${label}*`"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required, rules.email]" >
                </v-text-field>
                <v-text-field validate-on="input" v-else :label="label"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.email]" >
                </v-text-field>
        </template>
        <template v-if="type == 'number'">
                <v-text-field validate-on="input" v-if="required" :label="`${label}*`"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required, rules.number]" >
                </v-text-field>
                <v-text-field validate-on="input" v-else :label="label"
                    v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.number]" >
                </v-text-field>
        </template>
        <template v-if="type == 'textarea'">
                <v-textarea validate-on="input" v-if="required" :label="`${label}*`"
                    v-model="modelValue"  autoGrow shaped rows="4" row-height="50" @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required]" >
                </v-textarea>
                <v-textarea validate-on="input" v-else :label="label"
                    v-model="modelValue"  autoGrow shaped rows="4" row-height="50" @input="$emit('update:modelValue', $event.target.value)" :rules="''">
                </v-textarea>
        </template> -->
        <!-- <template v-if="type == 'dropdown'">
            <v-select :items="options"  v-if="required" :label="`${label}*`" v-model="modelValue"
            @update:modelValue="$emit('update:modelValue', modelValue)"
                :rules=" [rules.required,rules.requiredSelect]" class="mb-3">
            </v-select>
            <v-select :items="options"  v-else :label="`${label}*`" v-model="modelValue"
            @update:modelValue="$emit('update:modelValue', modelValue)"
                :rules="''" class="mb-3">
            </v-select>
        </template> -->
        <!-- <template v-if="type == 'radio'">
            <div class="titlesec">
                <v-radio-group inline v-model="modelValue"
                    @update:modelValue="$emit('update:modelValue', modelValue)" :rules="required ? [rules.required] : ''"
                    class="radiosection mb-3">
                    <p v-html="`${label}*`"></p>
                    <v-radio v-for="subItem in options" :key="subItem" :label="subItem" :value="subItem">
                    </v-radio>
                </v-radio-group>
            </div>
        </template> -->
        <!-- <template v-if="type == 'checkbox'">
            <div style="display:flex" class="checkboxmsg">
                <v-checkbox v-for="subItem2 in options" :key="subItem2" :value="subItem2" v-model="modelValue"
                    :label="subItem2"  @update:modelValue ="$emit('update:modelValue', modelValue)"
                    :rules="[rules.required]"></v-checkbox>
            </div>
        </template> -->
        <template v-if="type == 'file'">
                <v-file-input v-if="required" :label="`${label}*`"
                    v-model="modelValue" rows="4" show-size="1024" accept="image/png, image/jpeg, image/bmp" row-height="30" @change="$emit('update:modelValue', modelValue)" :rules="modelValue? [rules.fileSize]: [rules.fileRequired]" >
                </v-file-input>
                <v-file-input v-else :label="label"
                    v-model="modelValue" rows="4" show-size="1024" accept="image/png, image/jpeg, image/bmp" row-height="30" @change="$emit('update:modelValue', modelValue)" :rules="modelValue? [rules.fileSize]: ''" >
                </v-file-input>
        </template>
    </div>
</template>

<script>
export default {
    setup() {

    },
    props: {
        label: {
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        required: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array
        },
        fileType: {
            default: ['image/png', 'image/jpeg', 'image/bmp'],
        },
        fileSize: {
            default: 1 * 1048576,
            type: Number
        },
        modelValue: {
            type: String
        },
        controlName: {
            type: String
        }
    },
    data() {
        return {
            rules: {
                required: value => !!value || 'Required.',
                requiredSelect: (value) => value.length > 0 || "Value is required!!",
                number: value => Number.isInteger(Number(value)) || "The value must be an integer number",
                mobileNumber: value => (value > 1000000000 && value < 9999999999) || 'Enter a valid 10 digit Mobile Number',
                email: value => (value != '' && /.+@.+/.test(value)) || 'E-mail must be valid',
                fileSize: value => (value && value[0] && value[0].size < this.$props.fileSize) || `File size should be less than ${this.$props.fileSize / 1048576} MB`,
                fileRequired: value => (value && value.length) || 'File is required',
            },
        }
    },
    methods: {
        onFileSelected(event) {
            console.log(event);
            debugger
            this.$emit('update:modelValue', event)
        }
        //  onFileSelected(event) {
        //     console.log(event)
        // this.selectedFile = event.target.files[0]
        // console.log(this.selectedFile, 'file');
        // if (this.selectedFile.size < 1024) {
        //     return
        // } else {
        //     alert('file size should be less than 1MB')
        //     // event.target.value = '';
        // //    this.selectedFile.size.reset()
        // //    this.$refs.event.target.value= null
        // this.$refs.selectedFile = null
        // }
    },
}

</script>

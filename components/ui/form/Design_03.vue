<template>
    <div id="fromDesign03">
    
                <template v-if="type == 'text'">
                    <v-text-field validate-on="input" v-if="required" :label="`${label}*`" v-model="modelValue"
                        variant="underlined" @input="$emit('update:modelValue', $event.target.value)"
                        :rules="[rules.required, rules.specialcharacter]">
                    </v-text-field>
                    <v-text-field validate-on="input" v-else :label="label" v-model="modelValue" variant="underlined"
                        @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.specialcharacter]">
                    </v-text-field>
                </template>
       
                <template v-if="type == 'mobile'">
                    <v-text-field validate-on="input" v-if="required" :label="`${label}*`" v-model="modelValue"
                        variant="underlined" @input="$emit('update:modelValue', $event.target.value)"
                        :rules="modelValue ? [rules.mobileNumber] : [rules.required]">
                    </v-text-field>
                    <v-text-field validate-on="input" v-else :label="label" v-model="modelValue" variant="underlined"
                        @input="$emit('update:modelValue', $event.target.value)"
                        :rules="modelValue ? [rules.mobileNumber] : ''">
                    </v-text-field>
                </template>
  
                <template v-if="type == 'email'">
                    <v-text-field validate-on="input" v-if="required" :label="`${label}*`" v-model="modelValue"
                        variant="underlined" @input="$emit('update:modelValue', $event.target.value)"
                        :rules="modelValue ? [rules.email] : [rules.required]">
                    </v-text-field>
                    <v-text-field validate-on="input" v-else :label="label" v-model="modelValue" variant="underlined"
                        @input="$emit('update:modelValue', $event.target.value)"
                        :rules="modelValue ? [rules.email] : ''">
                    </v-text-field>
                </template>

                <template v-if="type == 'number'">
                    <v-text-field validate-on="input" v-if="required" :label="`${label}*`" v-model="modelValue"
                        variant="underlined" @input="$emit('update:modelValue', $event.target.value)"
                        :rules="[rules.required, rules.number]">
                    </v-text-field>
                    <v-text-field validate-on="input" v-else :label="label" v-model="modelValue" variant="underlined"
                        @input="$emit('update:modelValue', $event.target.value)" :rules="''">
                    </v-text-field>
                </template>
 
                <template v-if="type == 'textarea'">
                    <v-textarea validate-on="input" v-if="required" :label="`${label}*`" v-model="modelValue"
                        variant="underlined" autoGrow shaped rows="4" row-height="50"
                        @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required]">
                    </v-textarea>
                    <v-textarea validate-on="input" v-else :label="label" v-model="modelValue" variant="underlined"
                        autoGrow shaped rows="4" row-height="50"
                        @input="$emit('update:modelValue', $event.target.value)" :rules="''">
                    </v-textarea>
                </template>
       
                <template v-if="type == 'dropdown'">
                    <client-only>
                        <v-select :items="options" :label="required ? `${label}*` : label" v-model="modelValue"
                            variant="underlined" :clearable="!required"
                            @update:modelValue="$emit('update:modelValue', modelValue)"
                            :rules="required ? [rules.required] : ''">
                        </v-select>
                    </client-only>
                </template>
    
                <template v-if="type == 'radio'">
                    <div style="text-transform: capitalize;">
                        <client-only>
                            <v-radio-group inline v-model="modelValue" @change="$emit('update:modelValue', modelValue)"
                                :label="required ? `${label}*` : label" :rules="required ? [rules.required] : ''">
                                <v-radio v-for="item in options" :key="item" :label="item" :value="item" color="success"
                                    variant="underlined">
                                </v-radio>
                            </v-radio-group>
                        </client-only>
                    </div>
                </template>
                <template v-if="type == 'file'">
                    <v-file-input v-if="required" :label="`${label}*`"
                        v-model="modelValue" rows="4" show-size=1024 accept="image/png, image/jpeg, image/bmp" row-height="30" @change="$emit('update:modelValue', modelValue)" :rules="modelValue? [rules.fileSize]: [rules.fileRequired]" variant="underlined">
                    </v-file-input>
                    <v-file-input v-else :label="label"
                        v-model="modelValue" rows="4" show-size=1024 accept="image/png, image/jpeg, image/bmp" row-height="30" @change="onFileSelected(modelValue)" :rules="modelValue? [rules.fileSize]: ''"  variant="underlined">
                    </v-file-input>
                </template>

        <template v-if="type == 'checkbox'">
            <p>{{ label }}</p>
            <div style="display:flex" class="checkboxmsg">
                <v-checkbox v-for="(subItem2, index) in options" :key="index" :value="subItem2" v-model="bindingValue"
                    :label="subItem2" @update:modelValue="onFileSelected(modelValue)"
                    :rules="required ? [rules.requiredSelect] : ''" color="success" variant="underlined">
                </v-checkbox>
            </div>
        </template>


    </div>

</template>

<script>
export default {
    setup(props) {
        const bindingValue = ref(null)
        if (props.type == 'checkbox') {
            bindingValue.value = []
            console.log(bindingValue.value)
        }
        return {
            bindingValue,
        }

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
            type: String || Array
        },
        controlName: {
            type: String
        }

    },
    data() {
        return {
            rules: {
                required: value => !!value || 'Required.',
                specialcharacter: (value) => !/[^\w\s]/gi.test(value) || 'special character are not valid.',
                requiredSelect: (value) => value.length > 0 || "Value is required!!",
                number: value => Number.isInteger(Number(value)) || "The value must be an integer number",
                mobileNumber: value => (value > 1000000000 && value < 9999999999) || 'Enter a valid 10 digit Mobile Number',
                email: value => (value != '' && /.+@.+/.test(value)) || 'E-mail must be valid',
                fileSize: value => {
                    if (value && value && value[0]) {
                        return value[0].size < 10000 || `File size should be less than ${10000 / 1048576} MB`
                    }
                },
                fileRequired: value => {
                    if (value) {
                        return value.length > 0 || `'File is required'`
                    }
                },
            },
        }
    },
    methods: {
        onFileSelected(value) {  
            this.$emit('newVal', value);
        },
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
<style>
#fromDesign03 .checkboxmsg {

    position: relative;
    flex-wrap: wrap;
}

#fromDesign03 .checkboxmsg .v-input.v-input--horizontal.v-input--density-default.v-checkbox {
    max-width: 130px;
    width: 100px;
}

#fromDesign03 .checkboxmsg .v-input {
    flex: none;
}

#fromDesign03 .checkboxmsg .v-checkbox .v-input__details .v-messages {
    display: none;

}

#fromDesign03 .checkboxmsg .v-checkbox:last-child .v-input__details .v-messages {
    display: block;
}

#fromDesign03 .checkboxmsg .v-checkbox .v-input__details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
}

#submitmessage {
    font-size: 24px;
    font-weight: 500;
    border: 2px solid #03a84e;
    border-radius: 4px;
    padding: 20px;
    width: 500px;
    margin: auto;
    margin-top: 140px;
    margin-bottom: 140px;
}

#formFile {
    margin: 40px;
    padding: 20px;
    border: 3px solid #0e922e;
    border-radius: 5px;
}

#formFile .v-btn {
    display: block;
    margin: auto;
    background: var(--v-success);
    color: var(--v-background);
}
</style>

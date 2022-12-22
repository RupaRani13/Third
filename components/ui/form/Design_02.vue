<template>
    <div>
        <template v-if="type == 'text'">
            <v-text-field validate-on="input" v-if="required" :label="`${label}*`"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required, rules.specialcharacter]" >
            </v-text-field>
            <v-text-field validate-on="input" v-else :label="label"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)"  :rules="[rules.specialcharacter]">
            </v-text-field>
        </template>
        <template v-if="type == 'mobile'">
            <v-text-field validate-on="input" v-if="required" :label="`${label}*`"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.mobileNumber] : [rules.required]" >
            </v-text-field>
            <v-text-field validate-on="input" v-else :label="label"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.mobileNumber] : ''" >
            </v-text-field>
        </template>
        <template v-if="type == 'email'">
            <v-text-field v-if="required" validate-on="input" :label="`${label}*`"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.email] : [rules.required]" >
            </v-text-field>
            <v-text-field  v-else validate-on="input" :label="label"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.email] : ''" >
            </v-text-field>
        </template>
        <template v-if="type == 'number'">
            <v-text-field v-if="required" validate-on="input" :label="`${label}*`"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.number] : [rules.required]" >
            </v-text-field>
            <v-text-field v-else validate-on="input" :label="label"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.number] : ''" >
            </v-text-field>
        </template>
        <template v-if="type == 'textarea'">
            <v-text-field  v-if="required" validate-on="input" :label="`${label}*`"
                v-model="modelValue" rows="4" row-height="30" @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required]" >
            </v-text-field>
            <v-text-field v-else validate-on="input"  :label="label"
                v-model="modelValue" rows="4" row-height="30" @input="$emit('update:modelValue', $event.target.value)"  rules="" >
            </v-text-field>
        </template>
        <template v-if="type == 'file'">
                <v-file-input v-if="required" :label="`${label}*`"
                    v-model="modelValue" rows="4" show-size=1024 accept="image/png, image/jpeg, image/bmp" row-height="30" @change="$emit('update:modelValue', modelValue)" :rules="modelValue? [rules.fileSize]: [rules.fileRequired]" >
                </v-file-input>
                <v-file-input v-else :label="label"
                    v-model="modelValue" rows="4" show-size=1024 accept="image/png, image/jpeg, image/bmp" row-height="30" @change="onFileSelected(modelValue)" :rules="modelValue? [rules.fileSize]: ''" >
                </v-file-input>
        </template>
        <template v-if="type == 'radio'">
            <div style="text-transform: capitalize;">
                <v-radio-group inline v-model="modelValue" @change="$emit('update:modelValue', modelValue)"  :label="required?`${label}*`:label" :rules="required?[rules.required]:''">
                    <v-radio v-for="item in options" :key="item" :label="item" :value="item" color="success">
                    </v-radio>
                </v-radio-group>
            </div>
        </template>
        <template v-if="type == 'dropdown'">
            <client-only>
            <v-select :items="options" :label="required ? `${label}*` : label" 
                v-model="modelValue" :clearable="!required"  @update:modelValue="$emit('update:modelValue', modelValue)" :rules="required?[rules.required]:''">
            </v-select>
            </client-only>
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
            default : ['image/png', 'image/jpeg', 'image/bmp'],  
        },
        fileSize: {
            default : 1*1048576,
            type: Number
        },
        modelValue: {
            type: String || Array,
        },
        controlName : {
            type : String
        }    
    },
    data() {
        return {
            rules: {
                required: value => !!value || 'Required.',
                specialcharacter:  (value) => !/[^\w\s]/gi.test(value)||'special character are not valid.',
                requiredSelect: (value) => value.length > 0 || "Value is required!!",
                number: value => Number.isInteger(Number(value)) || "The value must be an integer number",
                mobileNumber: value => (value > 1000000000 && value < 9999999999) || 'Enter a valid 10 digit Mobile Number',
                email: value => (value != '' && /.+@.+/.test(value)) || 'E-mail must be valid',
                fileSize : value => (value&& value[0] && value[0].size < this.$props.fileSize) || `File size should be less than ${this.$props.fileSize/1048576} MB`,
                fileRequired : value => (value&& value.length) || 'File is required',
            },     
        }
    },
    methods:{
        newFun(event){
            console.log("register file")

            this.$refs.fileForm.validate();
            console.log(event);
        },
         onFileSelected(event) {
            console.log(event);
            this.$emit('update:modelValue', event)
            // this.selectedFile = event.target.files[0]
            // console.log(this.selectedFile, 'file');
            // if (this.selectedFile.size < 1024) {
            //     return
            // } else {
            //      alert('file size should be less than 1MB')
            //      event.target.value = '';
            //      this.selectedFile.size.reset()
            //      this.$refs.event.target.value= null
            // this.$refs.selectedFile = null
            // }
        },
        onUpload() {
            const fd = new FormData();
            fd.append('ekFile', this.selectedFile, this.selectedFile.name);
            console.log(fd.values());
            console.log(this.selectedFile.size)
            if (this.selectedFile.size < 1024) {
                $fetch('https://demo02.institute.org.in/api/public/file/upload', { method: 'POST', body: fd })
                    .then(res => console.log(res, alert("hello")))
                    .catch(e => console.log(e))
            } else {
                console.log("please upload 2kb image")
            }

        }
    },

}

</script>

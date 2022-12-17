<template>
    <div>
        <template v-if="type == 'text'">
            <v-text-field validate-on="input" v-if="required" :label="`${label}*`"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="[rules.required]" >
            </v-text-field>
            <v-text-field validate-on="input" v-else :label="label"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" rules="" >
            </v-text-field>
        </template>
        <template v-if="type == 'mobile'">
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.mobileNumber] : [rules.required]" >
            </v-text-field>
            <v-text-field validate-on="input" v-else :label="label"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.mobileNumber] : ''" >
            </v-text-field>
        </template>
        <template v-if="type == 'email'">
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.email] : [rules.required]" >
            </v-text-field>
            <v-text-field  v-else validate-on="input" :label="label"
                v-model="modelValue"   @input="$emit('update:modelValue', $event.target.value)" :rules="modelValue ? [rules.email] : ''" >
            </v-text-field>
        </template>
        <template v-if="type == 'number'">
        </template>
        <template v-if="type == 'file'">
                <v-file-input v-if="required" :label="`${label}*`"
                    v-model="modelValue" rows="4" show-size="1024" accept="image/png, image/jpeg, image/bmp" row-height="30" @change="$emit('update:modelValue', modelValue)" :rules="modelValue? [rules.fileSize]: [rules.fileRequired]" >
                </v-file-input>
                <v-file-input v-else :label="label"
                    v-model="modelValue" rows="4" show-size="1024" accept="image/png, image/jpeg, image/bmp" row-height="30" @change="onFileSelected(modelValue)" :rules="modelValue? [rules.fileSize]: ''" >
                </v-file-input>
        </template>
        <template v-if="type == 'radio'">
            <div style="text-transform: capitalize;">
                <v-radio-group inline v-model="modelValue" @change="$emit('update:modelValue', modelValue)"  :label="required?`${label}*`:label" :rules="required?[rules.required]:''">
                    <v-radio v-for="item in options" :key="item" :label="item" :value="item" color="success">
                    </v-radio>
                </v-radio-group>
        </template>
        <template v-if="type == 'dropdown'">
            <client-only>
            <v-select :items="options" :label="required ? `${label}*` : label" 
                v-model="modelValue" :clearable="!required"  @update:modelValue="$emit('update:modelValue', modelValue)" :rules="required?[rules.required]:''">
            </v-select>
            </client-only>
        </template>
            type: Array
        },
        fileType: {
            default : ['image/png', 'image/jpeg', 'image/bmp'],  
        },
        fileSize: {
            default : 1*1048576,
        },
        controlName : {
            type : String
        }    
    },
    data() {
        return {
    methods:{
        newFun(event){
            this.$refs.fileForm.validate();
            console.log(event);
        },
         onFileSelected(event) {
            console.log(event);
            this.$emit('update:modelValue', event)
            // this.selectedFile = event.target.files[0]
            // console.log(this.selectedFile, 'file');
            // if (this.selectedFile.size < 1024) {

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

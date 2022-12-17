<template>
    <v-form ref="form">
        <v-card height="100vh">
            <v-file-input v-model="myFile" label="File input" @update:modelValue="onFileSelected"></v-file-input>
            <button @click="onUpload">Submit</button>
            <v-file-input label="label" v-model="tempValue" clearable rows="4" show-size="1024"
                accept="image/png, image/jpeg, image/bmp" row-height="30" @change="onFileSelected(tempValue)"
                :rules="tempValue ? [rules.fileSize] : [rules.fileRequired]">
            </v-file-input>
            <v-btn @click="newMethod()">new btn</v-btn>
        </v-card>
    </v-form>
  
</template>

<script>
export default {
    data() {
        return {
            tempValue: [],
            selectedFile: null,
            myFile: '',
            fileSize: 10000,
            rules: {
                required: value => !!value || 'Required.',
                fileSize: value => (value && value[0] && value[0].size < fileSize) || `File size should be less than ${fileSize / 1048576} MB`,
                fileRequired: value => (value && value.length) || 'File is required',
            },
        }
    },
 
    methods: {
        newMethod() {
            alert("hello")
            debugger
            this.$refs.form.resetValidation()
        },
        onFileSelected() {
            console.log(this.myFile)
            this.selectedFile = this.myFile[0];
            debugger
            if (this.selectedFile.size < 3000) {
                return

            } else {
                this.myFile = [];
                return
            }
            debugger;

        },
        onUpload() {
            const fd = new FormData();
            fd.append('ekFile', this.selectedFile, this.selectedFile.name);
            console.log(fd.values());
            $fetch('https://demo02.institute.org.in/api/public/file/upload', { method: 'POST', body: fd }).then(res => console.log(res)).catch(e => console.log(e))

        }

    }
}
</script>

<style >

</style>

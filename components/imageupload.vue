<template>
    <v-form>
        <v-card height="100vh">
            <v-file-input v-model="myFile" label="File input" @update:modelValue="onFileSelected"></v-file-input>
            <button @click="onUpload">Submit</button>
        </v-card>

    </v-form>




</template>

<script>
export default {
    data() {
        return {
            selectedFile: null,
            myFile : '',
        }
    },
    methods: {
        onFileSelected() {
            console.log(this.myFile)
            this.selectedFile = this.myFile[0];
            debugger
            if(this.selectedFile.size<3000){
                return
                
            }else{
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
<template>

    <v-card height="100vh">

        <!-- <v-text-card>
        <v-img :src="image ? imagePreview : 'https://picsum.photos/id/11/500/300'"
        lazy-src="https://picsum.photos/id/11/10/6"
        height="20vh"
        ></v-img>

        <v-file-input 
        v-model="image"
        accept="image/png, image/jpeg"
        placeholder="Pick an image"
        prepend-icon="mdi-camera"
        @change="selecteImage"
        @click:clear="clearImagePreview()"
        label="Image"
        ></v-file-input>
    </v-text-card> -->
        <!-- <input class="settings-file-upload" type="file" @click="updateProfilePic" accept="image/*"> -->

        <!-- <input type="file" @change="onFileSelected"> -->
       
        <v-file-input show-size label="File input" type="file" @change="onFileSelected"></v-file-input>
        <button @click="onUpload">Submit</button>
    </v-card>

</template>

<script>
export default {
    data() {
        return {
           
            selectedFile: null,
        }
    },
    methods: {
        onFileSelected(event) {
            console.log(event)
            this.selectedFile = event.target.files[0]
            console.log(this.selectedFile, 'file')
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
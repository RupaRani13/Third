<template>
    <div>
        <v-form v-model="valid" @submit.prevent="onSubmit()">
            <v-responsive class="mx-auto" max-width="1000" pb-4>
                <div v-for="item in formFields" :key="item.id">
                    <UiFormDesign01 @newValue="myFunction" :label="item.title" :type="item.type" :required='item.required' :options="item.options" :fileType="item.fileType" :fileSize="item.fileSize" v-model="userData[item.controlName]" :controlName="item.controlName"></UiFormDesign01>
                </div>
                <v-btn class="btn" type="submit">submit</v-btn>
            </v-responsive>
       
        </v-form>
    </div>
</template>

<script>
export default {
    async setup() {
        const formdata = await useForm();
        const userData = reactive({});
        console.log(formdata, 'formdata');
        const formFields = ref(null);
        formFields.value = formdata.fields;
        console.log( formFields.value, ' formFields.value')
        formFields.value.forEach(item => {
            userData[item.controlName] = "";
        });
        console.log(userData,formFields);
        return {
            formFields, userData

        };
    },
    data() {
        return {
            fileModel: null,
            valid: false,
            terms: false,
            selectedFile: null,
        }
    },
    methods: {
        myFunction(a, b){
            this.userData[b]= a;
            console.log( this.userData);

        },
        async submitUserData(userData) {
            const apiUrl = `https://demo02.institute.org.in/api/form/formresponse`
            const data = {
                form: '6388487e8e13e93f22cbe9c4',
                response: userData,
            }
            alert(1);
            await $fetch(apiUrl, { method: 'POST', body: data }).then(res => console.log(res)).catch(e => console.log(e))
        },
        onSubmit(e) {
                this.submitUserData(this.userData);
            console.log(this.userData)
        },
        handleFileUpload(e) {
            console.log(e.target)
        },
     
    }
}
</script>

<style>
#fromDesign01 .v-responsive {
    border: 3px solid var(--v-success);
    padding: 20px;
    margin: 128px 20px;
    border-radius: 5px;
}

#fromDesign01 .v-row.checkboxmsg {
    position: relative;
}

#fromDesign01 .v-row.checkboxmsg .v-checkbox.v-input--error .v-input__details {
    display: none !important;

}

#fromDesign01 .v-row.checkboxmsg .v-col:last-child .v-checkbox.v-input--error .v-input__details {
    display: block !important;
    padding-top: 16px;
}

#fromDesign01 v-title {

    display: block;
}

/* #fromDesign01 .v-selection-control-group{
    margin-left: 15px;
} */
#fromDesign01 .titlesec {
    margin-left: 15px;
}

#fromDesign01 .checkboxmsg .v-col {
    display: contents;
}

#fromDesign01 .v-selection-control .v-label {
    height: fit-content;
}

#fromDesign01 .v-selection-control__input {
    height: fit-content;
}

#fromDesign01 .checkboxmsg .v-input__details {
    position: absolute;
    bottom: 0;
    left: 0px
}

#fromDesign01 .v-input .v-input--horizontal .v-input--density-default .v-input--error .v-checkbox {

    height: 40px;
    align-items: center;
    display: flex;
}

#fromDesign01 .titlesec .checkboxmsg {
    height: 75px;
}
</style>
<template>
    <div>
        <v-form v-if="!savingSuccessful" v-model="valid" @submit.prevent="onSubmit()" ref="form">
            <v-responsive class="mx-auto" max-width="1000" pb-4>
                <div v-for="item in formFields" :key="item.id">
                    <UiFormDesign01 :label="item.title" :type="item.type" :required='item.required'
                        :options="item.options" :fileType="item.fileType" :fileSize="parseInt('400000')"
                        v-model="userData[item.controlName]" :controlName="item.controlName">
                    </UiFormDesign01>
                </div>
            </v-responsive>
        </v-form>
        <div v-else id="submitmessage">
            <v-container>
                <h4>Your form Successfully submitted</h4>
            </v-container>
        </div>
    </div>
</template>
<script>

export default {
    async setup() {
        const formdata = await useForm();
        const userData = ref({});
        console.log(formdata, 'formdata');
        debugger
        const formFields = ref(null);
        formFields.value = formdata.fields;
        
        console.log(formFields.value, ' formFields.value')
        console.log(userData, formFields);
        return {
            formFields, userData
        };
    },
    data() {
        return {
            fileModel: null,
            valid: true,
            terms: false,
            selectedFile: null,
            savingSuccessful: false,
        }
    },
    methods: {
        async submitUserData(userData) {
            const apiUrl = `https://demo02.institute.org.in/api/form/formresponse`
            const data = {
                form: '6388487e8e13e93f22cbe9c4',
                response: userData,
            }
            await $fetch(apiUrl, { method: 'POST', body: data }).then(res => {
                console.log(res);   
                this.savingSuccessful = true;

            }).catch(e => console.log(e))
        },
        checkValidity() {
            this.$refs.form.validate();
            console.log(this.valid)
            if (this.valid == null) {
                if (this.$refs.form.items.filter(e => e.isValid == null).length > 0) {
                    this.valid = null
                } else {
                    this.valid = true
                }
            } else {
                return this.valid;
            }
        },
        isFile(value) {
            if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) {
                return true
            } else {
                return false
            }
        },
        async onSubmit() {
            let newUserData = {}
            if (this.checkValidity()) {
                for (const key in this.userData) {
                    if (this.isFile(this.userData[key])) {
                        const fd = new FormData();
                        fd.append('ekFile', this.userData[key][0], this.userData[key][0].name);
                        let myData = null;
                        myData = await $fetch('https://demo02.institute.org.in/api/public/file/upload', { method: 'POST', body: fd })
                        if (myData) {
                            try {
                                newUserData[key] = myData.url;
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    } else {
                        newUserData[key] = this.userData[key]
                    }
                }
                this.submitUserData(newUserData);
                return
            } else {
                return
            }
        },
        // this.submitUserData(this.userData)
        handleFileUpload(e) {
            console.log(e.target)
        }
    },
}

</script>

<style>
/* #fromDesign01 .v-responsive {
    border: 3px solid var(--v-success);
    padding: 20px;
    margin: 128px 20px;
    border-radius: 5px;
}*/

#fromDesign01 .checkboxmsg {
    position: relative;
    flex-wrap: wrap;
}
#fromDesign01 .checkboxmsg .v-input.v-input--horizontal.v-input--density-default.v-checkbox{
    max-width: 130px;
    width: 100px;
}
#fromDesign01 .checkboxmsg .v-input{
flex:none;
}
/* #fromDesign01 .v-row.checkboxmsg .v-checkbox.v-input--error .v-input__details {
    display: none !important;

} */

#fromDesign01 .checkboxmsg:last-child .v-checkbox.v-input--error .v-input__details {
    display: block !important;
    padding-top: 16px;
    padding-left: 14px;
}

/* #fromDesign01 v-title {

    display: block;
} */
/* 
#fromDesign01 .titlesec {
    margin-left: 15px;
} */

/* #fromDesign01 .checkboxmsg .v-col {
    display: contents;
} */

/* #fromDesign01 .v-selection-control .v-label {
    height: fit-content;
} */

/* #fromDesign01 .v-selection-control__input {
    height: fit-content;
} */

#fromDesign01 .checkboxmsg .v-input__details {
    position: absolute;
    bottom: 0;
    left: 0px
}

/* #fromDesign01 .v-input .v-input--horizontal .v-input--density-default .v-input--error .v-checkbox {

    height: 40px;
    align-items: center;
    display: flex;
} */
/* 
#fromDesign01 .titlesec .checkboxmsg {
    height: 75px;
}  */

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
<template>
    <div>
        <template v-if="type == 'text'">
            <v-text-field :label="required ? `${label}*` : label" hideDetails="auto" variant="solo" class="mb-3"
                v-model="value" @input="$emit('newValue', $event.target.value, controlName)" :rules="required ? [rules.required] : ''">
            </v-text-field>
        </template>
        <template v-if="type == 'number'">
            <v-text-field :label="required ? `${label}*` : label" hideDetails="auto" v-model="value"
            @input="$emit('newValue', $event.target.value, controlName)"  :rules="required ? [rules.required, rules.number] : rules.number" variant="solo"
                class="mb-3"></v-text-field>
        </template>
        <template v-if="type == 'mobile'">
            <v-text-field :label="required ? `${label}*` : label" hideDetails="auto" v-model="value"
            @input="$emit('newValue', $event.target.value, controlName)"  :rules="required ? [rules.required, rules.mobileNumber, rules.number] : [rules.mobileNumber, rules.number]"
                variant="solo" class="mb-3">
            </v-text-field>

        </template>
        <template v-if="type == 'email'">
            <v-text-field :label="required ? `${label}*` : label" hideDetails="auto" v-model="value"
            @input="$emit('newValue', $event.target.value, controlName)"   :rules="required ? [rules.required, rules.email] : [rules.email]" variant="solo" class="mb-3">
            </v-text-field>
        </template>

        <template v-if="type == 'textarea'">
            <v-textarea variant="filled solo" autoGrow :label="required ? `${label}*` : label" rows="4" row-height="30"
                shaped v-model="value"  @input="$emit('newValue', $event.target.value, controlName)"  :rules="required ? [rules.required] : ''" class="mb-3">
            </v-textarea>
        </template>
        <template v-if="type == 'dropdown'">
            <v-combobox :items="options" :label="required ? `${label}*` : label" 
                v-model="value"  @input="$emit('newValue', $event.target.value, controlName)"  :rules="required ? [rules.requiredSelect] : ''" variant="solo"
                class="mb-3">
            </v-combobox>
        </template>
        <template v-if="type == 'radio'">
            <div class="titlesec">
                <v-radio-group inline v-model="value"
                @input="$emit('newValue', $event.target.value, controlName)"  :rules=" rules.required ? [rules.requiredSelect] : ''" class="radiosection mb-3" variant="solo">
                    <v-title v-html="required ? `${label}*` : label"></v-title>
                    <v-radio v-for="subItem in options" :key="subItem" :label="subItem" :value="subItem">
                    </v-radio>
                </v-radio-group>
            </div>
        </template>
        <!-- <template v-if="type == 'file'">
            <v-file-input v-if="fileType.includes('PDF')" showSize :label="label" type="file"
                ref="fileUpload" @change="onFileSelected"
                :accept="fileType.includes('PDF') && fileType.includes('Image') ? 'application/pdf, image/png, image/jpeg, image/bmp' : 'application/pdf'"
                variant="solo" class="mb-3"  v-model="value"   @input="$emit('newValue', $event.target.value, controlName)"></v-file-input>

            <v-file-input v-else-if="fileType.includes('Image')" showSize :label="title" type="file"
                ref="fileUpload" @change="onFileSelected"
                :accept="fileType.includes('Image') ? 'image/png, image/jpeg, image/bmp' : ''" variant="solo"
                class="mb-3"  v-model="value"   @input="$emit('newValue', $event.target.value, controlName)"></v-file-input>
            <v-btn @click="onUpload">Submit</v-btn>
        </template>  -->
  
    </div>
</template>

<script>


export default {
    setup() {

    },
    data(props) {
        return {
            value : props.modelValue,
            rules: {
                required: value => !!value || 'Required.',
                requiredSelect: (value) => value.length > 0 || "Value is required!!",
                number: value => Number.isInteger(Number(value)) || "The value must be an integer number",
                mobileNumber: value => (value > 1000000000 && value < 9999999999) || 'Enter a valid 10 digit Mobile Number',
                email: value => (value != '' && /.+@.+/.test(value)) || 'E-mail must be valid',
            },     
        }
    },
    methods:{
         onFileSelected(event) {
            console.log(event)
            this.selectedFile = event.target.files[0]
            console.log(this.selectedFile, 'file');
            if (this.selectedFile.size < 1024) {
                return
            } else {
                alert('file size should be less than 1MB')
                // event.target.value = '';
            //    this.selectedFile.size.reset()
            //    this.$refs.event.target.value= null
            this.$refs.selectedFile = null

              

            }
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
            
        },
        fileSize: {
            type: String
        },
        modelValue: {
            type: String
        },
        controlName : {
            type : String
        }
       
    }
}

</script>

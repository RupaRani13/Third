<template>
    <div>
        <v-container>
            <div  v-for="(value,property) in newFinalObj" :key="property">
                <template v-if="(page==property)">
                    <v-form  :ref="'form'+ property" v-model="valid[property]">
                            <template v-for="(item,index) in value" :key="index">
                                    <div class="form-group-container">
                                        <div class="form-heading" v-if="item.heading">{{item.heading}}</div>
                                        <div v-for="(subItem,index) in item.formData" :key="index" >
                                            <ui-form-design02 :label="subItem.label" :type="subItem.type" :required="subItem.mandatory" :options="subItem.options?subItem.options : ''" v-model="userData[subItem.controlName]">
                                            </ui-form-design02>
                                        </div>
                                    </div>
                            </template>
                            <div class="d-flex justify-center">
                                <v-btn v-if="(property<Object.keys(newFinalObj).length-1)" class="mt-5 mx-2 d-inline-block" size="x-large" color="primary" type="button" @click="saveNext(property)">Save & Next</v-btn>
                                <v-btn v-if="property>0" class="mt-5 mx-2 d-inline-block" size="x-large" color="warning" type="button" @click="page--">Back</v-btn>
                                <v-btn v-if="(property==Object.keys(newFinalObj).length-1)" class="mt-5 mx-2 d-inline-block" size="x-large" color="success" type="submit" @click.prevent="onSubmit(property)">Submit</v-btn>
                            </div>
                    </v-form>
                </template>
            </div>
            <template v-if="(page==Object.keys(newFinalObj).length)">
                <div>
                    You have successfully registered!!
                    {{userData}}
                </div>
            </template>
        </v-container>
    </div>

</template>

<script>
export default {

    async setup() {
        const data = reactive({});
        console.log(data);
        data.value = await useAdmissionSettings();
        data.value.more.medicalHistory =  data.value.more.medicalHistoryNew;
        data.value.more.address =  data.value.more.correspondenceAddress;
        delete  data.value.more.medicalHistoryNew;
        delete  data.value.more.correspondenceAddress;
        delete  data.value.more.unBase;
        delete  data.value.more.srn;
        let myNewArr = []
        let myObj = data.value.more;
        const state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
        myObj.gender.options = ['male', 'female', 'others'];
        myObj.address.fields.state.type = 'dropdown';
        myObj.address.fields.state.options = state;
        myObj.permanentAddress.fields.state.type = 'dropdown';
        myObj.permanentAddress.fields.state.options = state;
        for(const key in myObj){
            if(!myObj[key].hasOwnProperty('fields')){
                if(myObj[key].hasOwnProperty('display')&&myObj[key].display){
                    if(myObj[key].type){
                        if(myObj[key].options){
                            myNewArr.push({'controlName' : key, 'order' : myObj[key].order, 'label' : myObj[key].label, 'mandatory' : myObj[key].mandatory, 'heading' : myObj[key].heading, 'type' : myObj[key].type, 'newPage' : myObj[key].newPage, 'options' : myObj[key].options } )
                        }else{
                            myNewArr.push({'controlName' : key, 'order' : myObj[key].order, 'label' : myObj[key].label, 'mandatory' : myObj[key].mandatory, 'heading' : myObj[key].heading, 'type' : myObj[key].type, 'newPage' : myObj[key].newPage} )
                        }
                    }else{
                        myNewArr.push({'controlName' : key, 'order' : myObj[key].order, 'label' : myObj[key].label, 'mandatory' : myObj[key].mandatory, 'heading' : myObj[key].heading, 'type' : 'text', 'newPage' : myObj[key].newPage})
                    }
                }
            }else{
                let myObj1 = myObj[key].fields;
                for(const key1 in myObj1){
                    if(!myObj1[key1].hasOwnProperty('fields')){
                        let newObjKey1 = `${key}.${key1}`;
                        if(myObj1[key1].hasOwnProperty('display')&&myObj1[key1].display){
                            if(myObj1[key1].type){
                                if(myObj1[key1].options){
                                    myNewArr.push({'controlName' : newObjKey1, 'order' : myObj1[key1].order, 'label' : myObj1[key1].label, 'mandatory' : myObj1[key1].mandatory,  'heading' : myObj1[key1].heading, 'type' : myObj1[key1].type , 'newPage' : myObj1[key1].newPage, 'options' : myObj1[key1].options})
                                }else{
                                    myNewArr.push({'controlName' : newObjKey1, 'order' : myObj1[key1].order, 'label' : myObj1[key1].label, 'mandatory' : myObj1[key1].mandatory,  'heading' : myObj1[key1].heading, 'type' : myObj1[key1].type, 'newPage' : myObj1[key1].newPage})
                                }
                            }else{
                                myNewArr.push({'controlName' : newObjKey1, 'order' : myObj1[key1].order, 'label' : myObj1[key1].label, 'mandatory' : myObj1[key1].mandatory, 'heading' : myObj1[key1].heading, 'type' : 'text', 'newPage' : myObj1[key1].newPage})
                            }
                        }
                    }else{
                        let myObj2 = myObj1[key1].fields;
                        for(const key2 in myObj2){
                            if(!myObj2[key2].hasOwnProperty('fields')&&myObj2[key2].display){
                                let newObjKey2 = `${key}.${key1}.${key2}`;
                                if(myObj2[key2].hasOwnProperty('display')){
                                    if(myObj2[key2].type){
                                        if(myObj2[key2].options){
                                            myNewArr.push({'controlName' : newObjKey2, 'order' : myObj2[newObjKey2].order, 'label' : myObj2[key2].label, 'mandatory' : myObj2[key2].mandatory, 'heading' : myObj2[key2].heading, 'type' : myObj2[key2].type, 'newPage' : myObj2[key2].newPage, 'options' : myObj2[key2].options})
                                        }else{
                                            myNewArr.push({'controlName' : newObjKey2, 'order' : myObj2[newObjKey2].order, 'label' : myObj2[key2].label, 'mandatory' : myObj2[key2].mandatory, 'heading' : myObj2[key2].heading, 'type' : myObj2[key2].type, 'newPage' : myObj2[key2].newPage})
                                        }
                                    }else{
                                        myNewArr.push({'controlName' : newObjKey2, 'order' : myObj2[key2].order, 'label' : myObj2[key2].label, 'mandatory' : myObj2[key2].mandatory, 'heading' : myObj2[key2].heading, 'type' : 'text', 'newPage' : myObj2[key2].newPage})
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        myNewArr.sort(function(a, b){return a.order - b.order});
        const newTempObj = {}
        let page = 0;
        console.log("register file")
        myNewArr.forEach((item,index)=>{
            if(index==0){
                newTempObj[page]= [];
                newTempObj[page].push(item)
            }else if(item.newPage){
                page=page+1;
                newTempObj[page]= [];
                newTempObj[page].push(item)
            }else{
                newTempObj[page].push(item)
            }  
        })
        const valid = ref([]);
        const newFinalObj = {}
        for (const key in newTempObj){
            valid.value.push(true);
            const groupArr = [];
            let groupIndex = 0;
            newTempObj[key].forEach(item => {
                if(groupArr.length){
                    if(item.heading){
                        groupIndex = groupIndex+1;
                        groupArr[groupIndex] = {heading : '', formData : []}
                        groupArr[groupIndex].heading = item.heading;
                        groupArr[groupIndex].formData.push(item);
                    }else{
                        groupArr[groupIndex].formData.push(item);
                    }
                }else{
                    groupArr[groupIndex] = {heading : '', formData : []}
                    groupArr[groupIndex].heading = item.heading;
                    groupArr[groupIndex].formData.push(item);
                }
            });
            newFinalObj[key] = groupArr;
        }
        return { newFinalObj, valid }
    },
    data(){
        return{
            page : 0,
            userData : {},
        }
    },
    methods : {
        checkValidity(i){
            let refData = `form${i}`;
            this.$refs[refData][0].validate();
            if(this.valid[i]==null){
                if (this.$refs[refData][0].items.filter(e => e.isValid == null).length<=0) {
                    this.valid[i]=true
                }
            }
            return this.valid[i];
        },
        saveNext(i){
            if(this.checkValidity(i)){
                this.page= this.page+1;
            }else{
                return
            }
        },
        isFile(value){
            if(Array.isArray(value) && value.length>0&&value[0] instanceof File){
                return true
            }else{
                return false
            }
        },
        async getFileUploadUrl(obj){
            return new Promise(async (resolve, reject) => {
                let newObj = {}
                for (const key in obj){
                    if(this.isFile(obj[key])){
                        const fd = new FormData();
                        fd.append('ekFile', obj[key][0], obj[key][0].name);
                        let myData = null;
                        myData = await $fetch('https://demo02.institute.org.in/api/public/file/upload', { method: 'POST', body: fd });
                        if(myData){
                            try {
                                newObj[key]= myData.url;
                            } catch (error) {
                                console.log(error); 
                                reject(error) 
                            }
                        }
                    }else{
                        newObj[key]= obj[key];
                    }
                }
                resolve(newObj)
            })
        },
        createStdData(objData){
            let outputObj = {};
            for(let key in objData){
                let x = key.split('.');
                if(x.length==3){
                    if(outputObj.hasOwnProperty(x[0])){
                        outputObj[x[0]]={};
                        outputObj[x[0]][x[1]]={};
                        outputObj[x[0]][x[1]][x[2]]=objData[key];
                    }else{
                        if(!outputObj[x[0]].hasOwnProperty(x[1])){
                            outputObj[x[0]][x[1]]={};
                            outputObj[x[0]][x[1]][x[2]]=objData[key];
                        }else{
                            outputObj[x[0]][x[1]][x[2]]=objData[key];
                        }
                    }
                }else if(x.length==2){
                    if(!outputObj.hasOwnProperty(x[0])){
                        outputObj[x[0]]={};
                        outputObj[x[0]][x[1]]=objData[key];
                    }else{
                        outputObj[x[0]][x[1]]=objData[key];
                    }

                }
                else if(x.length==1){
                    outputObj[key]=objData[key];
                }
            }
            return outputObj;

        },
        async onSubmit(i){   
            let newUserData = {};
            if(this.checkValidity(i)){
                newUserData = await this.getFileUploadUrl(this.userData); 
                let stdData = this.createStdData(newUserData);
                stdData.address = {}; //required in api
                stdData.father = {};
                stdData.mother = {};
                stdData.pastCourses = [];
                stdData.pastExams = [];
                stdData.email = `${stdData.mobile}@edukitapp.com`;
                let bodyData = {
                    createLogin: true,
                    student: stdData,
                    user: {
                        password: stdData.password || Math.random() * 100000 | 0 ,
                        username:  stdData.mobile
                    }
                };
                $fetch('https://demo02.institute.org.in/api/public/user/student', { method: 'POST', body: bodyData }).then((res)=>{
                    console.log(res);
                    // if(process.client){
                    //     localStorage.setItem("user", JSON.stringify(res.user));
                    // }
                    
                    this.page= this.page+1;
                    }

                ).catch(e=> console.log(e))
   

            }else{
                return
            }
        }
    },

}
</script>

<style scoped>
.heading{
    padding: 15px;
    background: var(--v-success);
    font-size: 22px;
    margin-bottom: 11px;
    color: white;
}
.sub-heading{
    padding: 6px 15px;
    background: var(--v-surface-variant);
    font-size: 18px;
    margin-bottom: 11px;
    color: white;
}
.form-group-container{
    padding: 50px 20px 20px;
    border: 2px solid var(--v-success);
    border-radius: 13px;
    margin-top: 60px;
    position: relative;
}
.form-heading{
    padding: 10px 20px;
    position: absolute;
    width: 70%;
    top: 0px;
    text-align: center;
    left: 50%;
    background: white;
    transform: translate(-50%, -50%);
    background: var(--v-success);
    color: white;
    font-size: 28px;
    font-weight: bold;
    border-radius: 15px;
    text-transform: capitalize;
}

</style>
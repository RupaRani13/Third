<template>
    <div>
        <v-container>
            <div  v-for="(value,property) in newFinalObj" :key="property">
                <v-form :ref="'form'+ property" :v-model="valid+property" @submit.prevent="onSubmit()">
                    <template v-if="(page==property)">
                        <div v-for="(item,index) in value" :key="index">
                                <div class="form-group-container">
                                    <div class="form-heading" v-if="item.heading">{{item.heading}}</div>
                                    <div v-for="(subItem,index) in item.formData" :key="index" >
                                        <ui-form-design02 :label="subItem.label" :required="subItem.mandatory" v-model="userData[subItem.controlName]">
                                        </ui-form-design02>
                                    </div>
                                </div>
                        </div>
                        <div class="d-flex justify-center">
                            <v-btn v-if="(property<Object.keys(newFinalObj).length-1)" class="mt-5 mx-2 d-inline-block" size="x-large" color="primary" type="button" @click="saveNext(property)">Save & Next</v-btn>
                            <v-btn v-if="property>0" class="mt-5 mx-2 d-inline-block" size="x-large" color="warning" type="button" @click="page--">Back</v-btn>
                            <v-btn v-if="(property==Object.keys(newFinalObj).length-1)" class="mt-5 mx-2 d-inline-block" size="x-large" color="success" type="submit" @click="onSubmit(property)">Submit</v-btn>
                        </div>
                    </template>
                </v-form>



                <!-- <div class="d-flex justify-center">
                    <v-btn v-if="(property<groupArr.length-1)" class="mt-5 mx-2 d-inline-block" size="x-large" color="primary" type="button" @click="saveNext(index)">Save & Next</v-btn>
                    <v-btn v-if="(page>0)" class="mt-5 mx-2 d-inline-block" size="x-large" color="warning" type="button" @click="page--">Back</v-btn>
                    <v-btn v-if="(page==groupArr.length-1)" class="mt-5 mx-2 d-inline-block" size="x-large" color="success" type="submit">Submit</v-btn>
                </div> -->
            </div>

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
        for(const key in myObj){
            if(!myObj[key].hasOwnProperty('fields')){
                if(myObj[key].hasOwnProperty('display')&&myObj[key].display){
                    if(myObj[key].type){
                        myNewArr.push({'controlName' : key, 'order' : myObj[key].order, 'label' : myObj[key].label, 'mandatory' : myObj[key].mandatory, 'heading' : myObj[key].heading, 'type' : myObj[key].type, 'newPage' : myObj[key].newPage} )
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
                                myNewArr.push({'controlName' : newObjKey1, 'order' : myObj1[key1].order, 'label' : myObj1[key1].label, 'mandatory' : myObj1[key1].mandatory,  'heading' : myObj1[key1].heading, 'type' : myObj1[key1].type, 'newPage' : myObj1[key1].newPage})
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
                                        myNewArr.push({'controlName' : newObjKey2, 'order' : myObj2[newObjKey2].order, 'label' : myObj2[key2].label, 'mandatory' : myObj2[key2].mandatory, 'heading' : myObj2[key2].heading, 'type' : myObj2[key2].type, 'newPage' : myObj2[key2].newPage})
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
        const userData = reactive({});
        myNewArr.sort(function(a, b){return a.order - b.order});
        debugger
        const newTempObj = {}
        let page = 0;
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
        const newFinalObj = {}
        for (const key in newTempObj){
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
        return {userData, newFinalObj }
    },
    data(){
        return{
            rules : {
                required : value => !!value || 'Required',
            },
            valid : true,
            page : 0,
        }
    },
    methods : {
        saveNext(i){
            let refData = `form${i}`;
            debugger
            this.$refs[refData][0].validate();
            debugger
            if(this.valid||this.valid==null){
                this.page= this.page+1;
            }else{
                return
            }
        },
        onSubmit(i){
            let refData = `form${i}`;
            this.$refs[refData][0].validate();
            debugger
            
            if(this.valid||this.valid==null){
                debugger
                let stdData = {}
                for(let key in this.userData){
                    let x = key.split('.');
                    if(x.length==3){
                        if(stdData.hasOwnProperty(x[0])){
                            stdData[x[0]]={};
                            stdData[x[0]][x[1]]={};
                            stdData[x[0]][x[1]][x[2]]=this.userData[key];
                        }else{
                            if(!stdData[x[0]].hasOwnProperty(x[1])){
                                stdData[x[0]][x[1]]={};
                                stdData[x[0]][x[1]][x[2]]=this.userData[key];
                            }else{
                                stdData[x[0]][x[1]][x[2]]=this.userData[key];
                            }
                        }
                    }else if(x.length==2){
                        if(!stdData.hasOwnProperty(x[0])){
                            stdData[x[0]]={};
                            stdData[x[0]][x[1]]=this.userData[key];
                        }else{
                            stdData[x[0]][x[1]]=this.userData[key];
                        }

                    }
                    else if(x.length==1){
                        stdData[key]=this.userData[key];
                    }
                }
                this.page= this.page+1;
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
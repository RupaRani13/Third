<template>
    <div>
        <!-- <Dummychild myprop="myclass"></Dummychild> -->
        <!-- <V-card v-for="(item,index) in dummydata" :key="index">
            {{ item }}
        </V-card> -->
        <!-- <div>{{dummydata[0]}}</div> -->
        <!-- <Dummychild desc="this is desc" @showMsg="getData($event)"></Dummychild>
        <h4>Result: {{ result }}</h4> -->
        <!--         
            <v-card v-for="(item,index) in dummydata" :key="index" class="mx-auto"
    max-width="344">
                <v-img :src="item.image" height="200px" cover></v-img>
                <v-card-title>
                   {{ item.studentName }}
                </v-card-title>
                <v-card-subtitle>
                   {{ item.srn }}
                </v-card-subtitle>
                <v-card-actions>
                    <v-btn color="orange-lighten-2" variant="text">
                        Explore
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <v-card-text>
                          {{ item.message }}
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card> -->
        <dummychild @opcao-emit="receivedOpcao($event)"></dummychild>
        <h4>Result: {{ result }}</h4>

        <div>
            <div  class="text-center">
                <v-btn @click="newalert">
                    Reset
                </v-btn>
            </div>
            <v-alert  v-model="newalert" border="start" variant="tonal" closable close-label="Close Alert"
                color="deep-purple-accent-4" title="Closable Alert">
                Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
            </v-alert>
          
          
        </div>



    </div>
</template>

<script>
export default {
    async setup() {
        const dummydata = await usedummytesti()
        console.log(dummydata)
        let newalert = ref(null)
        newalert = !newalert;
        return {
            dummydata,newalert
        }
    },
    data() {
        return {
            result: '',
            show: false,
            newalert: true,
        }
    },
    methods: {
        getData(data) {
            this.result = data;
        },
        receivedOpcao(data) {
            this.result = data
        }
    }
}
</script>

<style scoped>

</style>
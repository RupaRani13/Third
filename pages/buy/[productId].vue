<template>
    <div>
        <div v-for="(value,key) in planWisePaymentNodes" :key="key">
            {{ key }}
            <div v-for="item in value" :key="item">{{item}}</div>
        </div>

    </div>
</template>

<script>
import { useLoginStore } from '~~/stores/login';
    export default {
        async setup(){
            const route = useRoute();
            const router = useRouter();
            function createPaymentUrl(storeId, orderId, orderNo, totalAmt, nodeId){
                let url = `https://demo02.institute.org.in/api/sales/order/make-online-payment?storeId=${storeId}&orderId=${orderId}&nodeId=${nodeId}&orderNo=${orderNo}&totalAmount=${totalAmt}&redirectUrl=https://demo02.institute.org.in/api/sales/order/online-payment-response/${storeId}&cancelUrl=https://demo02.institute.org.in/api/sales/order/online-payment-cancel-response/${storeId}&responsePreviewUrl=https://demo02.institute.org.in/api/sales/order/online-payment-response/${storeId}`;
                window.location.href = url;

            }
            function goToPaymentPage(nodeIdVal){
                $fetch(`https://demo02.institute.org.in/api/cmn/order/${orderId}`,{method: 'PUT', headers: { token: store.token },  body : {paymentOptionAmt : res1[0].amount, paymentOption : res1[0].title}}).then(res2=>{
                                        console.log(res2);
                                        let storeId = res2.store.id;
                                        let orderId = res2.id;
                                        let orderNo = res2.orderNo;
                                        let totalAmt = res2.paymentOptionAmt;
                                        let nodeId = [];
                                        nodeId.push(nodeIdVal);

                                        // let nodeId = ;

                                        createPaymentUrl(storeId, orderId, orderNo, totalAmt, nodeId)
                                        
                                    }).catch(e=>console.log(e))
            }
            const store = useLoginStore();
            const data = ref(null)
            const batch = ref(null)
            const placeOrderData = {
                user : '' ,
                order : {} ,
            }
            const planWisePaymentNodes =ref({});
            placeOrderData.order = {
                stream: "",
                course: "",
                session: "",
                center: "",
                batch: "",
                store: "",
                relProductCategory: "",
                productCategory: "",
                productType: "",
                total: "",
                tracer:{ form : 'Website-sales-order' }
            }
            try {
                if(route.params.productId){
                    data.value = await useProductdetails1(route.params.productId);
                };  
                if(data.value[0].haveBatch){
                    batch.value= await useProductBatch(route.params.productId)
                };
                placeOrderData.order.stream = data.value[0].stream
                placeOrderData.order.course = data.value[0].course
                placeOrderData.order.session = data.value[0].session
                placeOrderData.order.center = data.value[0].center
                placeOrderData.order.batch = batch.value[0].id
                placeOrderData.order.store = data.value[0].store
                placeOrderData.order.relProductCategory = data.value[0].category
                placeOrderData.order.productCategory = data.value[0].category
                placeOrderData.order.productType = data.value[0].type
                placeOrderData.order.total = data.value[0].cost
                placeOrderData.order.product = [];
                placeOrderData.order.product.push(data.value[0].id);

                debugger



            } catch (error) {
                console.log(error)
                
            }
            if(process.client){
                store.getLocalStorageData();

                debugger
                    if(store.isLogin){
                        placeOrderData.user = store.user;
                        debugger
                    }
                    $fetch('https://demo02.institute.org.in/api/cmn/order/place-order', {method : 'POST', body : placeOrderData}).then(
                        (res)=>{
                            console.log(res);
                            debugger
                            const orderId = res.id
                            $fetch(`https://demo02.institute.org.in/api/cmn/order/payment-nodes?order=${orderId}&populatePaymentOpt=true`).then(
                                res1=>{
                                    
                                    res1.forEach(item=>{
                                        if(!planWisePaymentNodes.value.hasOwnProperty(item.paymentOption.emiPlan)){
                                            planWisePaymentNodes.value[item.paymentOption.emiPlan]= [];
                                            planWisePaymentNodes.value[item.paymentOption.emiPlan].push({
                                                title : item.title,
                                                amount : item.amount,
                                                nodeId : item.id,
                                            });
                                        }else{
                                            planWisePaymentNodes.value[item.paymentOption.emiPlan].push({
                                                title : item.title,
                                                amount : item.amount,
                                                nodeId : item.id,
                                            })
                                        }
                                    })
                                    console.log(res1);
                                }
                            ).catch(e=>console.log(e))
                            debugger
                        }
                    ).catch(e=>{
                        debugger
                        console.log(e)});
                }
            debugger


            return {data, goToPaymentPage,planWisePaymentNodes}

        }
        
    }
</script>

<style scoped>

</style>
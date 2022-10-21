
export default async function (path) {
    const apiUrl = 'https://demo02.institute.org.in/api/webfront/page'
    const data:any[] = await $fetch(apiUrl);
    let myData:String;
    data.forEach(item => {
        if(item.uri==path){
            myData= item.id;
            return  
        }
    });
    return myData
    }



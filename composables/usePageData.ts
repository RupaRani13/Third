
export default async function (path) {
    const apiUrl = 'https://demo02.institute.org.in/api/webfront/page'
    const data:any[] = await $fetch(apiUrl);
    let myData= {
    };
    data.forEach(item => {
        if(path=='/materialdesignicons.min.css.map'){
            path = '/';
        }
        if(item.uri==path){
            myData['id']= item.id;
            myData['metaTags'] = {};
            if(item.metaTags&&item.metaTags.keywords){
                myData['metaTags']['keywords']= item.metaTags.keywords
            }else{
                myData['metaTags']['keywords']= item.website.metaTags.keywords
            }
            if(item.metaTags&&item.metaTags.ogTitle){
                myData['metaTags']['ogTitle']= item.metaTags.ogTitle
            }else{
                myData['metaTags']['ogTitle']= item.website.metaTags.ogTitle
            }
            if(item.metaTags&&item.metaTags.ogDescription){
                myData['metaTags']['ogDescription']= item.metaTags.ogDescription
            }else if(item.website.metaTags.ogDescription){
                myData['metaTags']['ogDescription']= item.website.metaTags.ogDescription
            }else{
                myData['metaTags']['ogDescription']= item.website.description
            }
            if(item.metaTags&&item.metaTags.ogImage){
                myData['metaTags']['ogImage']= item.metaTags.ogImage
            }else{
                myData['metaTags']['ogImage']= item.website.metaTags.ogImage
            }
            myData['title']= item.title;
            return  
        }
    });
    return myData
 }



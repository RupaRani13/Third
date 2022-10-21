const storeDownloadCategory = () => useState<any>('downloadCategory',()=>null);
const storeDownload = () => useState<any>('download',()=>null);

async function useDownloadCategory(sort='createdAt',orderBy = 'ASC', status = true, limit='all', page = '') {
    const apiUrl = 'https://demo02.institute.org.in/api/webber/downloadcategory?status=true&limit=all'
    const params = {
        sort : sort,
        orderBy : orderBy,
        status : status,
        limit : limit,
        page : page,
    }
    const downloadCategory = storeDownloadCategory();
    if(downloadCategory.value==null){
        downloadCategory.value = [];
        downloadCategory.value = await $fetch(apiUrl,{params : params})
    }
    return downloadCategory.value;
  }
 async function useDownload(id='',sort='createdAt',orderBy = 'ASC', status = true,limit='all', page = 1) { 
    const apiUrl = "https://demo02.institute.org.in/api/webber/download";
    const params = {
        category : id,
        sort : sort,
        orderBy : orderBy,
        status : status,
        limit : limit,
        page : page,
    }
    const download = storeDownload();
    if(download.value==null){
        download.value = {};
      let objKey = null;
      id ==''? objKey = 'all' : objKey = id;
      download.value[objKey] = await $fetch(apiUrl,{params : params})
    }else{
      if(id==''&&!download.value.hasOwnProperty('all')){
        download.value.all = await $fetch(apiUrl,{params : params})
      }else if(!download.value.hasOwnProperty(id)){
        download.value[id] = await $fetch(apiUrl,{params : params})
      }
    }
    if(id==''){
      return download.value.all
    }else{
      return download.value[id];
    }
}

  export {useDownload, useDownloadCategory}


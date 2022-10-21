const storeContentList = () => useState<any>('contentList',()=>null);
const storeContentListItem = () => useState<any>('contentListItem',()=>null);
async function useContentList(sort='createdAt',orderBy = 'ASC', status = true, limit='all', page = '') { 
    const apiUrl = 'https://demo02.institute.org.in/api/webber/webberlist'
    const params = {
        sort : sort,
        orderBy : orderBy,
        status : status,
        limit : limit,
        page : page,
    }
    const contentList = storeContentList();
    if(contentList.value==null){
        contentList.value = [];
        contentList.value = await $fetch(apiUrl,{params : params})
    }
    return contentList.value;
  }
async function useContentListItem(id='',sort='createdAt',orderBy = 'ASC', status = true,limit='all', page = 1) { 
    const apiUrl = "https://demo02.institute.org.in/api/webber/webberlistitem";
    const params = {
        list : id,
        sort : sort,
        orderBy : orderBy,
        status : status,
        limit : limit,
        page : page,
    }
    const contentListItem = storeContentListItem();
    if(contentListItem.value==null){
        contentListItem.value = {};
      let objKey = null;
      id ==''? objKey = 'all' : objKey = id;
      contentListItem.value[objKey] = await $fetch(apiUrl,{params : params})
    }else{
      if(id==''&&!contentListItem.value.hasOwnProperty('all')){
        contentListItem.value.all = await $fetch(apiUrl,{params : params})
      }else if(!contentListItem.value.hasOwnProperty(id)){
        contentListItem.value[id] = await $fetch(apiUrl,{params : params})
      }
    }
    if(id==''){
      return contentListItem.value.all
    }else{
      return contentListItem.value[id];
    }
}
export {useContentList, useContentListItem}

const storeNewsCategory = () => useState<any>('newsCategory',()=>null);
const storeNews = () => useState<any>('news',()=>null);
async function useNewsCategory(sort='createdAt',orderBy = 'ASC', status = true, limit='all', page = '1') { 
    const apiUrl = 'https://demo02.institute.org.in/api/webber/newscategory'
    const params = {
        sort : sort,
        orderBy : orderBy,
        status : status,
        limit : limit,
        page : page,
    }
    const newsCategory = storeNewsCategory();
    if(newsCategory.value==null){
      newsCategory.value = [];
      newsCategory.value = await $fetch(apiUrl,{params : params})
    }
    return newsCategory.value;
  }
  async function useNews(id='',sort='createdAt',orderBy = 'ASC', status = true,limit='all', page = 1) { 
    const apiUrl = "https://demo02.institute.org.in/api/webber/news";
    const params = {
        category : id,
        sort : sort,
        orderBy : orderBy,
        status : status,
        limit : limit,
        page : page,
    }
    const news = storeNews();
    if(news.value==null){
      news.value = {};
      let objKey = null;
      id ==''? objKey = 'all' : objKey = id;
      news.value[objKey] = await $fetch(apiUrl,{params : params})
    }else{
      if(id==''&&!news.value.hasOwnProperty('all')){
        news.value.all = await $fetch(apiUrl,{params : params})
      }else if(!news.value.hasOwnProperty(id)){
        news.value[id] = await $fetch(apiUrl,{params : params})
      }
    }
    if(id==''){
      return news.value.all
    }else{
      return news.value[id];
    }

}
  export {useNewsCategory, useNews}





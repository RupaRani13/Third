 async function useBlogCategory(){
    const apiUrl = 'https://demo02.institute.org.in/api/blog/blogpostcategory'
    const params = {
        sort : 'order',
        orderBy : 'ASC',
        status : true,
    }
    const data = await $fetch(apiUrl, {params : params})
    return data;
 
}
async function useBlog(id=null, limit=5) {
    const apiUrl = 'https://demo02.institute.org.in/api/public/data/posts'
    const params = {
        category : id,
       
        limit : limit,
        sort : 'order',
        orderBy : 'ASC',
        status : true,
        needTotalRecords : true
    } 
    const res = await $fetch.raw(apiUrl, {params : params});
    const data = res._data;
    const totalRecords = res.headers.get('totalRecords');
    return {data, totalRecords};
}
//for recent blog page
async function useRecentBlog(id=null, limit=3) {
  const apiUrl = 'https://demo02.institute.org.in/api/blog/blogpost/'
  const params = {
      category : id,    
      limit : limit,
      sort : 'order',
      orderBy : 'ASC',
      status : true,
  } 
  const data = await $fetch(apiUrl, {params : params});
  return {data};
}
//
 const authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZmRiZWQ2MzBhYWI1ZDE5NTgyYzhhIiwiZmlyc3ROYW1lIjoiRGVtbyIsImxhc3ROYW1lIjoiRWR1a2l0IiwiZW1haWwiOiJkZW1vMDJAZ21haWwuY29tIiwibW9iaWxlIjoiMTIxMjEyMTIxMiIsInVzZXJuYW1lIjoiZGVtbzAyQGdtYWlsLmNvbSIsInR5cGUiOiJBRE1JTiIsImNsaWVudCI6IjVmN2ZkYmVkZWE1OTk5MzJmMTA0NDZlYiJ9LCJpYXQiOjE2NjMzMTUzOTAsImF1ZCI6ImV6dWtpdC5jb20iLCJpc3MiOiJFenVraXQifQ.mO_4CZnSCXKMINWCoHDoIgb84MX1CihHL2OgjrzG8XM";
 async function useBlogDetails(id) { 
    //  const data = await $fetch(`https://demo02.institute.org.in/api/blog/blogpost/${id}`, {
    //   headers: { token: authToken }})
    const apiUrl = ` https://demo02.institute.org.in/api/blog/blogpost/` 
    const data: Object[] = await $fetch(`${apiUrl}${id}`, {
      headers: { token: authToken }
    })
    return data;
  }
 async function useBlogList(id=null, page=1, limit='all' ) { 
    const apiUrl = ` https://demo02.institute.org.in/api/blog/blogpost`;
    const params = {
        postCategories : id,
        page : page,
        limit : limit

    } 
    const data: Object[] = await $fetch(`${apiUrl}`, {
      params: params
    })
    return data;
  }


export {useBlogCategory, useBlog, useBlogDetails,useBlogList,useRecentBlog}


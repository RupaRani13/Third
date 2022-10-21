const storeGalleryList = () => useState<any>('galleryList',()=>null);
const storeGalleryAlbum = () => useState<any>('galleryAlbum',()=>null);


async function useGalleryAlbum(type, id='',sort='createdAt',orderBy = 'ASC', status = true, limit='all', page = '') { 
      type != undefined ? type = type.toUpperCase() : '';
      const apiUrl = 'https://demo02.institute.org.in/api/webber/album'
      const params = {
          albumId : id,
          type : type,
          sort : sort,
          orderBy : orderBy,
          status : status,
          limit : limit,
          page : page,
      }
      const galleryAlbum = storeGalleryAlbum();
      if(type=='PHOTO'){
        if(galleryAlbum.value==null){
          galleryAlbum.value = {};
          galleryAlbum.value.photo = await $fetch(apiUrl,{params : params})
        }
        if(!galleryAlbum.value.hasOwnProperty('photo')){
          galleryAlbum.value.photo = await $fetch(apiUrl,{params : params})
        }
        return galleryAlbum.value.photo;
      }
      if(type=='VIDEO'){
        if(galleryAlbum.value==null){
          galleryAlbum.value = {};
          galleryAlbum.value.video = await $fetch(apiUrl,{params : params})
        }
        if(!galleryAlbum.value.hasOwnProperty('video')){
          galleryAlbum.value.video = await $fetch(apiUrl,{params : params})
        }
        return galleryAlbum.value.video;
      }
    }
  async function useGalleryList(type='PHOTO',id='',sort='createdAt',orderBy = 'ASC', status = true,limit='all', page = 1) { 
    type = type.toUpperCase();
    const apiUrl = "https://demo02.institute.org.in/api/webber/album/data";
    const params = {
        type : type,
        albumId : id,
        sort : sort,
        orderBy : orderBy,
        status : status,
        limit : limit,
        page : page,
    }
    const galleryList = storeGalleryList();
    if(galleryList.value==null){
      galleryList.value = {};
      let objKey = null;
      id ==''? objKey = 'all' : objKey = id;
      galleryList.value[objKey] = await $fetch(apiUrl,{params : params})
    }else{
      if(id==''&&!galleryList.value.hasOwnProperty('all')){
        galleryList.value.all = await $fetch(apiUrl,{params : params})
      }else if(!galleryList.value.hasOwnProperty(id)){
        galleryList.value[id] = await $fetch(apiUrl,{params : params})
      }
    }
    if(id==''){
      return galleryList.value.all
    }else{
      return galleryList.value[id];
    }
  }
export {useGalleryList, useGalleryAlbum}




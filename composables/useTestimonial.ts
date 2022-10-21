
const storeTestimonial = () => useState<any>('testimonial',()=>null);
export default async function (id = '', sort = 'createdAt', orderBy = 'ASC', status = true, limit = 'all', page = '') {
    const apiUrl = 'https://demo02.institute.org.in/api/webber/testimonial'
    const params = {
        category: id,
        sort: sort,
        orderBy: orderBy,
        status: status,
        limit: limit,
        page: page,
    }
    const testimonial = storeTestimonial();
    if(testimonial.value==null){
        testimonial.value = {};
        let objKey = null;
        id ==''? objKey = 'all' : objKey = id;
        testimonial.value[objKey] = await $fetch(apiUrl,{params : params})
      }else{
        if(id==''&&!testimonial.value.hasOwnProperty('all')){
            testimonial.value.all = await $fetch(apiUrl,{params : params})
        }else if(!testimonial.value.hasOwnProperty(id)){
            testimonial.value[id] = await $fetch(apiUrl,{params : params})
        }
      }
      if(id==''){
        return testimonial.value.all
      }else{
        return testimonial.value[id];
      }
    }
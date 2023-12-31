const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZmRiZWQ2MzBhYWI1ZDE5NTgyYzhhIiwiZmlyc3ROYW1lIjoiRGVtbyIsImxhc3ROYW1lIjoiRWR1a2l0IiwiZW1haWwiOiJkZW1vMDJAZ21haWwuY29tIiwibW9iaWxlIjoiMTIxMjEyMTIxMiIsInVzZXJuYW1lIjoiZGVtbzAyQGdtYWlsLmNvbSIsInR5cGUiOiJBRE1JTiIsImNsaWVudCI6IjVmN2ZkYmVkZWE1OTk5MzJmMTA0NDZlYiJ9LCJpYXQiOjE2NjMzMTUzOTAsImF1ZCI6ImV6dWtpdC5jb20iLCJpc3MiOiJFenVraXQifQ.mO_4CZnSCXKMINWCoHDoIgb84MX1CihHL2OgjrzG8XM";
async function useProductdetails(id) {
  const apiUrl = ` https://demo02.institute.org.in/api/cmn/product/` 
  const data: Object[] = await $fetch(`${apiUrl}${id}`, {
    headers: { token: authToken }
  })
  return data;
}  
async function useProductdetails1(id) {
  const apiUrl = ` https://demo02.institute.org.in/api/public/data/products` 
  const data = await $fetch(`${apiUrl}?id=${id}`, {
  })
  return data;
} 
async function useProductBatch(id) {
  const apiUrl = `https://demo02.institute.org.in/api/public/data/product-batches` 
  const data = await $fetch(`${apiUrl}?product=${id}`, {
  })
  return data;
} 

export { useProductdetails, useProductdetails1, useProductBatch }

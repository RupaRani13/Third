const authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZmRiZWQ2MzBhYWI1ZDE5NTgyYzhhIiwiZmlyc3ROYW1lIjoiRGVtbyIsImxhc3ROYW1lIjoiRWR1a2l0IiwiZW1haWwiOiJkZW1vMDJAZ21haWwuY29tIiwibW9iaWxlIjoiMTIxMjEyMTIxMiIsInVzZXJuYW1lIjoiZGVtbzAyQGdtYWlsLmNvbSIsInR5cGUiOiJBRE1JTiIsImNsaWVudCI6IjVmN2ZkYmVkZWE1OTk5MzJmMTA0NDZlYiJ9LCJpYXQiOjE2NjMzMTUzOTAsImF1ZCI6ImV6dWtpdC5jb20iLCJpc3MiOiJFenVraXQifQ.mO_4CZnSCXKMINWCoHDoIgb84MX1CihHL2OgjrzG8XM";
async function useWebsiteData(id:String) {
    const data = await $fetch(`https://demo02.institute.org.in/api/webber/website/${id}`, {
      headers: { token: authToken }})
    return data;
  }
async function useWebsiteDataTemplate(id:String) {
    const data = await $fetch(`https://demo02.institute.org.in/api/webber/website/${id}/template`, {
      headers: { token: authToken }})
    return data;
  }


export {useWebsiteData, useWebsiteDataTemplate}


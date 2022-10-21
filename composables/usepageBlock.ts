const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBmOTU2ZjUxZjgwOTYwYThmMDI0YzQ4IiwiZmlyc3ROYW1lIjoiUmF2aSIsImxhc3ROYW1lIjoiLiIsImVtYWlsIjoicmF2aS5ndXB0YTE5MUBnbWFpbC5jb20iLCJtb2JpbGUiOiI4NDQ3NDU4MDI3IiwidXNlcm5hbWUiOiJyYXZpLmd1cHRhMTkxQGdtYWlsLmNvbSIsInR5cGUiOiJBRE1JTiIsImNsaWVudCI6IjYwZjk1NmY0ZWRhMzlkNTFjYzBmMDA4MyJ9LCJpYXQiOjE2NTYzOTM4NTUsImF1ZCI6ImV6dWtpdC5jb20iLCJpc3MiOiJFenVraXQifQ.gwVVOjT5wej9GHHsH9U9T_uTRy7ZeyNfpaFJWnvWwWs";
export default async function (id) {
  const apiUrl = `https://demo02.institute.org.in/api/webber/webpage/${id}/contentblocks`
  const params = {
    sort : 'order',
    orderBy : 'ASC',
    status : true,
}
  const data: Object[] = await $fetch(apiUrl, {params : params, 
    headers: { token: authToken }
  })
  return data;
}

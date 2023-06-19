const  getRequest = async (url)=>{
     const response = await fetch(url)
    .then((response) => response.json())
    .catch(err=>console.log(err))
    return response?.products;
}

export { getRequest }
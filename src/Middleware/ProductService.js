import { getRequest } from "../Utils/HttpRequest";

const getProducts =  async()=>{
    const url  = 'https://dummyjson.com/products';
    const response = await getRequest(url)
    return response
}

export { getProducts }
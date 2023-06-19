import { GET_PRODUCTS } from "./types"
import { getProducts } from "../Middleware";

export const getProductsAction = () => async (dispatch) => {
    const res = await getProducts();
    dispatch({
        type: GET_PRODUCTS,
        products: res,
    });
}


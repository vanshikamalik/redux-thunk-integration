import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../Actions/index";
import DataTable from './Tables/Tables'

const ProductListing = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    const productRes = useSelector(state => state.ProductReducer)
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 130 },
        { field: 'category', headerName: 'Category', width: 130 },
        {
            field: 'description',
            headerName: 'description',
            type: 'string',
            width: 600,
        }
    ];
    return (
        <div className="container">
            <h4>Welcome to Products Listing Page</h4>
            <DataTable rows={productRes.products} col={columns} />
        </div>
    )
}

export default ProductListing;
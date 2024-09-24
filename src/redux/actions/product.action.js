import { ADD_PRODUCT_ERROR, ADD_PRODUCT_START, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_START, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_START, UPDATE_PRODUCT_SUCCESS } from "../constants/product.constant";
// GET product action
export const getProductStart =(data)=>({
    type:GET_PRODUCT_START
})

export const getProductSuccess =(data)=>({
    type:GET_PRODUCT_SUCCESS,
    payload:data
})

export const getProductError =(data)=>({
    type:GET_PRODUCT_ERROR,
    payload:data
})

// add product action
export const addProductStart =(data)=>({
    type:ADD_PRODUCT_START,
    payload:data
})

export const addProductSuccess =(data)=>({
    type:ADD_PRODUCT_SUCCESS,
    payload:data
})

export const addProductError =(data)=>({
    type:ADD_PRODUCT_ERROR,
    payload:data
})

// update product action
export const updateProductStart =(data,id)=>({
    type:UPDATE_PRODUCT_START,
    payload:{
        data,
        id
    }
})

export const updateProductSuccess =(data,id)=>({
    type:UPDATE_PRODUCT_SUCCESS,
    payload:{
        data,
        id
    }
})

export const updateProductError =(data)=>({
    type:UPDATE_PRODUCT_ERROR,
    payload:data
})

// update product action
export const deleteProductStart =(id)=>({
    type:DELETE_PRODUCT_START,
    payload:id
})

export const deleteProductSuccess =(data,id)=>({
    type:DELETE_PRODUCT_SUCCESS,
    payload: id
})

export const deleteProductError =(data)=>({
    type:DELETE_PRODUCT_ERROR,
    payload:data
})

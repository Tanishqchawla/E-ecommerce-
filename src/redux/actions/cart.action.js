import { ADD_CART_ERROR, ADD_CART_START, ADD_CART_SUCCESS, DELETE_CART_ERROR, DELETE_CART_START, DELETE_CART_SUCCESS, GET_CART_ERROR, GET_CART_START, GET_CART_SUCCESS, UPDATE_CART_ERROR, UPDATE_CART_START, UPDATE_CART_SUCCESS } from "../constants/cart.constant"


// GET Cart action
export const getCartStart =(data)=>({
    type:GET_CART_START
})

export const getCartSuccess =(data)=>({
    type:GET_CART_SUCCESS,
    payload:data
})

export const getCartError =(data)=>({
    type:GET_CART_ERROR,
    payload:data
})

// add Cart action
export const addCartStart =(data)=>({
    type:ADD_CART_START,
    payload:data
})

export const addCartSuccess =(data)=>({
    type:ADD_CART_SUCCESS,
    payload:data
})

export const addCartError =(data)=>({
    type:ADD_CART_ERROR,
    payload:data
})

// update Cart action
export const updateCartStart =(data,id)=>({
    type:UPDATE_CART_START,
    payload:{
        data,
        id
    }
})

export const updateCartSuccess =(data,id)=>({
    type:UPDATE_CART_SUCCESS,
    payload:{
        data,
        id
    }
})

export const updateCartError =(data)=>({
    type:UPDATE_CART_ERROR,
    payload:data
})

// update Cart action
export const deleteCartStart =(id)=>({
    type:DELETE_CART_START,
    payload:id
})

export const deleteCartSuccess =(data,id)=>({
    type:DELETE_CART_SUCCESS,
    payload: id
})

export const deleteCartError =(data)=>({
    type:DELETE_CART_ERROR,
    payload:data
})

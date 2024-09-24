import { GET_ORDER_ERROR, GET_ORDER_START, GET_ORDER_SUCCESS, PLACE_ORDER_ERROR, PLACE_ORDER_START, PLACE_ORDER_SUCCESS } from "../constants/order.constant"

// get order actions
export const getOrderStart = () => ({
    type: GET_ORDER_START,
})

export const getOrderSuccess = (data) => ({
    type: GET_ORDER_SUCCESS,
    payload: data
})

export const getOrderError = (data) => ({
    type: GET_ORDER_ERROR,
    payload: data
})

// place order actions
export const placeOrderStart = (data) => ({
    type: PLACE_ORDER_START,
    payload: data
})

export const placeOrderSuccess = (data) => ({
    type: PLACE_ORDER_SUCCESS,
    payload: data
})

export const placeOrderError = (data) => ({
    type: PLACE_ORDER_ERROR,
    payload: data
})

import { GET_ORDER_SUCCESS } from "../constants/order.constant";

const initialState = {
    orders: 
        localStorage.getItem('orders') ? 
        JSON.parse(localStorage.getItem('orders')) : []
}

export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_SUCCESS:
            let data = [...action.payload];

            localStorage.setItem("orders", JSON.stringify(data))

            return {
                ...state,
                orders: [...data]
            }
        default:
            return state
    }
}
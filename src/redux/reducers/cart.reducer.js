import { GET_CART_SUCCESS } from "../constants/cart.constant";

const initialState = {
    carts: 
        localStorage.getItem('carts') ? 
        JSON.parse(localStorage.getItem('carts')) : {
            subTotal: 0,
            tax: 0,
            grandTotal: 0,
            items: [],
            customer: {}
        }
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_SUCCESS:
            if(action.payload.subTotal) {
                let data = {...action.payload};

                localStorage.setItem("carts", JSON.stringify(data))
    
                return {
                    ...state,
                    carts: data
                }
            }else {
                let defaultCart = {
                    subTotal: 0,
                    tax: 0,
                    grandTotal: 0,
                    items: [],
                    customer: {}
                }

                localStorage.setItem("carts", JSON.stringify(defaultCart))

                return {
                    ...state,
                    carts: defaultCart
                }
            }
            
            
        default:
            return state
    }
}
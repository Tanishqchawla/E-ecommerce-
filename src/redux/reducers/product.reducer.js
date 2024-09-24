import { GET_PRODUCT_SUCCESS } from "../constants/product.constant"

const initialState ={
    products:localStorage.getItem('products') ?
     JSON.parse(localStorage.getItem('products')):[]
}

 export const ProductReducer =(state =initialState,action)=>{
    switch (action.type) {
      case GET_PRODUCT_SUCCESS:
        let data =[...action.payload]


localStorage.setItem("products",JSON.stringify(data))

        return{
            ...state,
            products: [...data]
        }
        default:
            return state
    }
}
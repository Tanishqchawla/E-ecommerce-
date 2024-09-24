import { combineReducers } from "@reduxjs/toolkit";
import { ProductReducer } from "./product.reducer";
import { CategoryReducer } from "./category.reducer";
import { UserReducer } from "./users.reducer";
import { CartReducer } from "./cart.reducer";
import { OrderReducer } from "./order.reducer";

const rootReducer =combineReducers({
    product:ProductReducer,
    category:CategoryReducer,
    user: UserReducer,
    cart:CartReducer,
    order:OrderReducer
    
})
export default rootReducer;
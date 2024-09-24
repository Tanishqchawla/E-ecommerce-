import {all, fork} from "redux-saga/effects"
import { product } from "./product.saga"
import { Category } from "./category.saga"
import {  user } from "./users.saga"
import {cart } from "./cart.saga"
import { order } from "./order.saga"


export function* root() {
    yield all([
        fork(product),
        fork(Category),
        fork(user),
        fork(cart),
        fork(order)
    ])
}
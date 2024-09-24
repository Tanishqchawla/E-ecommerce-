import { put, takeLatest } from "redux-saga/effects";
import { GET_ORDER_START, PLACE_ORDER_START } from "../constants/order.constant";
import { getOrderFromFirebase, placeOrderToFirebase } from "../services/order.service";
import { getOrderError, getOrderStart, getOrderSuccess, placeOrderError } from "../actions/order.action";

function* getOrder() {
    try {
        let data = yield getOrderFromFirebase();
        yield put(getOrderSuccess(data))
    } catch (error) {
        yield put(getOrderError(error.message))
    }
}

function* placeOrder({payload}) {
    try {
        yield placeOrderToFirebase(payload);
        yield put(getOrderStart())
    } catch (error) {
        yield put(placeOrderError(error.message))
    }
}

export function* order() {
    yield takeLatest(GET_ORDER_START, getOrder);
    yield takeLatest(PLACE_ORDER_START, placeOrder)
}
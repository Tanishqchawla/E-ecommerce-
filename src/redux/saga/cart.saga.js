import{put, takeLatest} from "redux-saga/effects";
import { addCartError, deleteCartError, getCartError, getCartStart, getCartSuccess, updateCartError } from "../actions/cart.action";
import { ADD_CART_START, DELETE_CART_START, GET_CART_START, UPDATE_CART_START } from "../constants/cart.constant";
import { addCartToFirebase, deleteCartToFirebase, getCartFromFirebase, updateCartToFirebase } from "../services/cart.service";


function* getCart(){
    try {
   let data = yield getCartFromFirebase();
   yield put(getCartSuccess(data))
    } catch (error) {
        yield put(getCartError(error.massage))
    }
}

function* addCart({payload}){
    try {
  yield addCartToFirebase(payload);
  yield put(getCartStart())
    } catch (error) {
        yield put(addCartError(error.massage))
    }
}


function* updateCart({payload}){
    try {
  yield updateCartToFirebase(payload.data, payload.id);
  yield put(getCartStart())
    } catch (error) {
        yield put(updateCartError(error.massage))
    }
}

function* deleteCart({payload}){
    try {
  yield deleteCartToFirebase(payload);
  yield put(getCartStart())
    } catch (error) {
        yield put(deleteCartError(error.massage))
    }
}

export function* cart(){
    yield takeLatest(GET_CART_START,getCart)
    yield takeLatest(ADD_CART_START,addCart)
    yield takeLatest(UPDATE_CART_START,updateCart)
    yield takeLatest(DELETE_CART_START,deleteCart)
}
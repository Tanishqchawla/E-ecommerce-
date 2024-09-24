import{put, takeLatest} from "redux-saga/effects";
import { ADD_PRODUCT_START, DELETE_PRODUCT_START, GET_PRODUCT_START, UPDATE_PRODUCT_START } from "../constants/product.constant";
import { addProductError, deleteProductError, getProductError, getProductStart, getProductSuccess, updateProductError } from "../actions/product.action";
import { addProductToFirebase, deleteProductToFirebase, getProductFromFirebase, updateProductToFirebase } from "../services/product.service";


function* getProduct({payload}){
    try {
   let data = yield getProductFromFirebase();
   yield put(getProductSuccess(data))
    } catch (error) {
        yield put(getProductError(error.massage))
    }
}

function* addProduct({payload}){
    try {
  yield addProductToFirebase(payload);
  yield put(getProductStart())
    } catch (error) {
        yield put(addProductError(error.massage))
    }
}


function* updateProduct({payload}){
    try {
  yield updateProductToFirebase(payload.data, payload.id);
  yield put(getProductStart())
    } catch (error) {
        yield put(updateProductError(error.massage))
    }
}

function* deleteProduct({payload}){
    try {
  yield deleteProductToFirebase(payload);
  yield put(getProductStart())
    } catch (error) {
        yield put(deleteProductError(error.massage))
    }
}

export function* product(){
    yield takeLatest(GET_PRODUCT_START,getProduct)
    yield takeLatest(ADD_PRODUCT_START,addProduct)
    yield takeLatest(UPDATE_PRODUCT_START,updateProduct)
    yield takeLatest(DELETE_PRODUCT_START,deleteProduct)
}
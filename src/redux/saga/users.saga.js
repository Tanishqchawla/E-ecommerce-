import{put, takeLatest} from "redux-saga/effects";
import { addUserToFirebase, deleteUserToFirebase, getUserFromFirebase, updateUserToFirebase } from "../services/users.service";
import { addUserError, deleteUserError, getUserError, getUserStart, getUserSuccess, updateUserError } from "../actions/users.action";
import { ADD_USER_START, DELETE_USER_START, GET_USER_START, UPDATE_USER_START } from "../constants/users.constant";

function* getUser({payload}){
    try {
   let data = yield getUserFromFirebase();
   yield put(getUserSuccess(data))
    } catch (error) {
        yield put(getUserError(error.massage))
    }
}

function* addUser({payload}){
    try {
  yield addUserToFirebase(payload);
  yield put(getUserStart())
    } catch (error) {
        yield put(addUserError(error.massage))
    }
}


function* updateUser({payload}){
    try {
  yield updateUserToFirebase(payload.data, payload.id);
  yield put(getUserStart())
    } catch (error) {
        yield put(updateUserError(error.massage))
    }
}

function* deleteUser({payload}){
    try {
  yield deleteUserToFirebase(payload);
  yield put(getUserStart())
    } catch (error) {
        yield put(deleteUserError(error.massage))
    }
}

export function* user(){
    yield takeLatest(GET_USER_START,getUser)
    yield takeLatest(ADD_USER_START,addUser)
    yield takeLatest(UPDATE_USER_START,updateUser)
    yield takeLatest(DELETE_USER_START,deleteUser)
}
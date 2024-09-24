import { ADD_USER_ERROR, ADD_USER_START, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "../constants/users.constant"

// GET User action
export const getUserStart =(data)=>({
    type:GET_USER_START
})

export const getUserSuccess =(data)=>({
    type:GET_USER_SUCCESS,
    payload:data
})

export const getUserError =(data)=>({
    type:GET_USER_ERROR,
    payload:data
}) 

// add User action
export const addUserStart =(data)=>({
    type:ADD_USER_START,
    payload:data
})

export const addUserSuccess =(data)=>({
    type:ADD_USER_SUCCESS,
    payload:data
})

export const addUserError =(data)=>({
    type:ADD_USER_ERROR,
    payload:data
})

// update User action
export const updateUserStart =(data,id)=>({
    type:UPDATE_USER_START,
    payload:{
        data,
        id
    }
})

export const updateUserSuccess =(data,id)=>({
    type:UPDATE_USER_SUCCESS,
    payload:{
        data,
        id
    }
})

export const updateUserError =(data)=>({
    type:UPDATE_USER_ERROR,
    payload:data
})

// update User action
export const deleteUserStart =(id)=>({
    type:DELETE_USER_START,
    payload:id
})

export const deleteUserSuccess =(data,id)=>({
    type:DELETE_USER_SUCCESS,
    payload: id
})

export const deleteUserError =(data)=>({
    type:DELETE_USER_ERROR,
    payload:data
})

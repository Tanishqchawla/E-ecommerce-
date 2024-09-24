
import { GET_CATEGORY_SUCCESS } from "../constants/category.constant"


const initialState ={
   categories :
   localStorage.getItem('categories') ?
     JSON.parse(localStorage.getItem('categories')):[]
}

 export const CategoryReducer =(state =initialState,action)=>{
    switch (action.type) {
      case GET_CATEGORY_SUCCESS:
        let data =[...action.payload]


localStorage.setItem("categories",JSON.stringify(data))

        return{
            ...state,
            categories: [...data]
        }
        default:
            return state
    }
}
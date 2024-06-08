import { POST_TEACHER_SUCCESS } from "./actionType"

const initialState = {
    teachers: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case POST_TEACHER_SUCCESS:
            return {...state, teachers: [...state.teachers, action.payload]}

        default:
            return state    
    }
}
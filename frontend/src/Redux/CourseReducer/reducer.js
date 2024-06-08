import { GET_COURSE_FAILURE, GET_COURSE_REQUEST, GET_COURSE_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    courses: [],
    isError: false
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_COURSE_REQUEST:
            return {...state, isLoading: true}

        case GET_COURSE_SUCCESS:
            return {...state, isLoading: false, courses: action.payload}
            
        case GET_COURSE_FAILURE:
            return {...state, isError: true}    

        default:
            return state    
    }
}
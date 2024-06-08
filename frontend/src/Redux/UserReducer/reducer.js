import { POST_USER_FAILURE, POST_USER_REQUEST, POST_USER_SUCCESS } from "./actionType"

const initialState = {
     isLoading: false,
     username: '',
     isError: false,
     isAuth: false
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){

        case POST_USER_REQUEST:
            return {...state, isLoading: true}

        case POST_USER_SUCCESS:
            return {...state, isLoading: false, isAuth: true, username: action.payload}

        case POST_USER_FAILURE:
            return {...state, isError: true}

        default:
            return state    
    }
}
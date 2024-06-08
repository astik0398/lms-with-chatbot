import axios from 'axios'
import { POST_USER_FAILURE, POST_USER_REQUEST, POST_USER_SUCCESS } from './actionType';

export const registerUser =(obj)=> (dispatch)=> {
    let response = axios.post('https://lms-with-chatbot.onrender.com/user/register', obj)
    response.then(function(data){
        console.log(data);
    })
}

export const loginUser =(obj)=> (dispatch)=> {
    dispatch({type: POST_USER_REQUEST})
    let response = axios.post('https://lms-with-chatbot.onrender.com/user/login', obj)
    response.then(function(data){
        console.log(data);
        dispatch({type: POST_USER_SUCCESS, payload: data.data.username})
    })
    .catch(function(){
        dispatch({type: POST_USER_FAILURE})
    })
}
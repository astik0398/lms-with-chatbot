import axios from "axios"
import { GET_COURSE_FAILURE, GET_COURSE_REQUEST, GET_COURSE_SUCCESS, POST_COURSE_SUCCESS } from "./actionType"

export const getAllCourses = ()=> (dispatch)=> {
    dispatch({type: GET_COURSE_REQUEST})

    let response = axios.get('https://lms-with-chatbot.onrender.com/courses')
    response.then(function(data){
        console.log(data);
        dispatch({type: GET_COURSE_SUCCESS, payload: data.data})
    })
    .catch(function(){
        dispatch({type: GET_COURSE_FAILURE})
    })
}

export const postCourse = (obj)=>(dispatch)=> {
    dispatch({type: GET_COURSE_REQUEST})

    let response = axios.post('https://lms-with-chatbot.onrender.com/courses/addCourse', obj)
    response.then(function(data){
        console.log(data);
        dispatch({type: POST_COURSE_SUCCESS, payload: data})
    })
    .catch(function(){
        dispatch({type: GET_COURSE_FAILURE})
    })
}

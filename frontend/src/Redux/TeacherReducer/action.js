import axios from "axios"

export const registerTeacher =(obj)=> (dispatch)=> {
    let response = axios.post('https://lms-with-chatbot.onrender.com/teacher/register', obj)
    response.then(function(data){
        console.log(data);
    })
}
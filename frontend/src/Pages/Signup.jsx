import React, { useState } from 'react'
import './Signup.css'
import { useDispatch } from 'react-redux'
import { registerUser } from '../Redux/UserReducer/action'
import { Link, useNavigate } from 'react-router-dom'
import { registerTeacher } from '../Redux/TeacherReducer/action'
import { Button } from '@chakra-ui/react'

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSignup(){
    let obj = {
      name,
      email,
      password,
      username,
      role
    }

    if(role == 'student'){
      dispatch(registerUser(obj))
    }
    else{
      dispatch(registerTeacher(obj))
    }

  }
  return (
    <div id='sign-up-div'>
      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Your Name'/>
      <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='Enter Your Username'/>
      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Enter Your E-Mail' />
      <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter Your Password' />
      <select value={role} onChange={(e)=> setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <Button colorScheme='blue' onClick={handleSignup}>Sign Up</Button>
      <Link style={{textAlign:'right', color:'#200589'}} to={'/login'}><b >Have an accound already? Login</b></Link>
    </div>
  )
}

export default Signup
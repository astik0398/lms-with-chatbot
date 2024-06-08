import React, { useState } from 'react'
import '../Pages/Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/UserReducer/action';
import {Link, useNavigate} from 'react-router-dom'
import { Button, Input } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    let obj = {
      email,
      password
    }
    dispatch(loginUser(obj))
  };

  return (
    <div className="login-container">
      <div className="input-group">
        <Input type="text" placeholder='Enter Your Mail' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <Input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button colorScheme={'blue'} onClick={handleLogin}>Login</Button>
      <div style={{marginTop:'10px', textAlign:'right', color:'#200589'}}>
      <Link to={'/signup'}><b >Are you a new user? Sign up instead</b></Link>
      </div>
    </div>
  );
}

export default Login
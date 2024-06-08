import React from 'react'
import {Link} from 'react-router-dom'
import '../MainRoutes/Navbar.css'
import { Avatar, Button, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'

const Navbar = () => {

  const username = useSelector(store=> store.userReducer.username)
  const isAuth = useSelector(store=> store.userReducer.isAuth)
  
  return (
    <div id='nav-div'>
      <div style={{display:'flex', gap:'50px'}}>
      <Link className='link' to={'/'}>HOME</Link>
      <Link className='link' to={'/course'}>COURSES</Link>
      <Link className='link' to={'/mycourses'}>MY COURSES</Link>
      </div>
      <div style={{display:'flex', gap:'20px'}}>
      {isAuth ? <div style={{display:'flex', gap:'10px', color:'white', alignItems:'center'}}>
        <Avatar size={'sm'} name={username}/>
        <Text>{username}</Text>
      </div> : null}
      <Link className='link' to={'/login'}>{isAuth ? <Button colorScheme='white' variant={'outline'}>LOG OUT</Button> : <Button colorScheme='white' variant={'outline'}>LOGIN</Button>}</Link>
      </div>
    </div>
  )
}

export default Navbar
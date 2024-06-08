import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Course from '../Pages/Course'
import Signup from '../Pages/Signup'
import MyCourses from '../Pages/MyCourses'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mycourses' element={<PrivateRoute>
          <MyCourses/>
        </PrivateRoute>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes
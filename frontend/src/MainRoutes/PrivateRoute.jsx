import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {

    const isAuth = useSelector(store=> store.userReducer.isAuth)

    if(!isAuth){
        return <Navigate to={'/login'}/>
    }

  return props.children
}

export default PrivateRoute
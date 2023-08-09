import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseUserAuth } from '../../context/AuthContext'
function ProtectedRoute({children}) {
    let {user} = UseUserAuth()
    if(!user){
    return <Navigate to="/login"/>
    }
  return children
  console.log(user)
}

export default ProtectedRoute
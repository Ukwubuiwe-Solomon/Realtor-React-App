import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuthStatus from '../hooks/useAuthStatus'

const PrivateRoute = () => {
    const {loggedLn, checkingStatus} = useAuthStatus();
    if(checkingStatus){
        return <h1>Loading</h1>
    }
  
   return loggedLn ? <Outlet /> : <Navigate to= "/sign-in" />
  
}

export default PrivateRoute
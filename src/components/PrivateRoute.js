import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuthStatus from '../hooks/useAuthStatus'
import Spinner from './Spinner';

const PrivateRoute = () => {
    const {loggedLn, checkingStatus} = useAuthStatus();
    if(checkingStatus){
        return <Spinner />
    }
  
   return loggedLn ? <Outlet /> : <Navigate to= "/sign-in" />
  
}

export default PrivateRoute
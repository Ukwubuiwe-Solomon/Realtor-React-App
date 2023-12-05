import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

const useAuthStatus = () => {
    const [loggedLn, setLoggedLn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedLn(true)
            }
            setCheckingStatus(false)
        })
    },[])
  return {loggedLn, checkingStatus}
}

export default useAuthStatus
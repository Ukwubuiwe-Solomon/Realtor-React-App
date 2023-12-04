import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import {db} from '../firebase'
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const OAuth = () => {
  const navigate = useNavigate()
  async function onGoogleClick(){
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      // checking for user
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef);
      
      if(!docSnap.exists()){
        await setDoc(docRef,{
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not authorize with Google")
    }
  }
 
  return (
    <button onClick={onGoogleClick} className='flex justify-center items-center w-full bg-red-700 text-white px-7 py-3 uppercase
    text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-xl transition duration-150 ease-in-out rounded'>
    <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
    Continue with Google
    </button>
  )
}

export default OAuth
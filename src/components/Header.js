import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'


const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    function pathMatchRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo'
                className='h-5 cursor-pointer' onClick={()=>navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10 '>
                    <li className={`py-3 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer text-gray-400 ${pathMatchRoute("/") && "text-gray-800  border-b-red-600"}`} onClick={()=>navigate("/")} >Home</li>
                    <li  className={`py-3 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer text-gray-400 ${pathMatchRoute("/offers") && "text-gray-800  border-b-red-600"}`} onClick={()=>navigate("/offers")} >Offer</li>
                    <li  className={`py-3 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer text-gray-400 ${pathMatchRoute("/sign-in") && "text-gray-800 border-b-red-600"}`} onClick={()=>navigate("/sign-in")} >Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header
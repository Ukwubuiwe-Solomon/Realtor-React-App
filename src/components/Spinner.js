import React from 'react'
import Spin from '../assets/svg/spinner.svg'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center z-50 right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50 fixed'>
        <div>
            <img src={Spin} alt='loading...' className='h-24' />
        </div>
    </div>
  )
}

export default Spinner
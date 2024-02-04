import React from 'react';
import ErrorImage from '../assets/Images2/404 error with a landscape-cuate.png'

const Error = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-3xl text-white'>
        <img src={ErrorImage} alt="error" className=' w-[40%]'/>
    </div>
  )
}

export default Error
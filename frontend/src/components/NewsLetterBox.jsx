import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        
    }

    
  return (
    <div className='text-center'>
        <p className='font-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>Join our exclusive list and unlock 20% off your first order. Stay updated with the latest trends and deals</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required />
            <button className='bg-black text-white text-xs px-10 py-4 ' type='submit'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox

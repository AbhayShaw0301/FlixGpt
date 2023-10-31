import React from 'react'

const GptSearchBar = () => {
  return (
    <div className=' pt-[10%] flex justify-center '>
        <form className='w-1/2 bg-black  grid grid-cols-12 '>
            <input className='p-4 m-4 col-span-9' type='text'  placeholder='what would you like to watch today?'/>
        <button className='bg-red-600  text-lg text-white py-4 my-4  px-2 rounded mx-4 col-span-3'>Search</button>
            
        </form>
    </div>
  )
}

export default GptSearchBar
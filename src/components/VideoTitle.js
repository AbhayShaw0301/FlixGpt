import React from 'react'

const VideoTitle = ({title,overview}) => {
   
  return (
    <div className='w-screen aspect-video  pt-[20%]  px-6 md:px-16 absolute text-white bg-gradient-to-r from-black '>
        <h1 className=' text-xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-md w-1/4'>{overview}</p>
        <div className='my-2 md:m-0'>
<button className='text-xl text-black bg-white  px-2 py-1 md:px-12 md:py-4 rounded hover:opacity-50 '>
 ▶️ Play
</button>
<button className='hidden  md:inline-block text-xl text-white bg-gray-500 bg-opacity-50  px-12 p-4 rounded mx-2 hover:opacity-50'>
     MoreInfo
</button>
        </div>
    </div>
  )
}

export default VideoTitle
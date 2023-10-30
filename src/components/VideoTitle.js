import React from 'react'

const VideoTitle = ({title,overview}) => {
   
  return (
    <div className='w-screen aspect-video  pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className=' py-6 text-lg w-1/4'>{overview}</p>
        <div>
<button className='text-xl text-black bg-white   px-12 p-4 rounded hover:opacity-50 '>
 ▶️ Play
</button>
<button className='text-xl text-white bg-gray-500 bg-opacity-50  px-12 p-4 rounded mx-2 hover:opacity-50'>
     MoreInfo
</button>
        </div>
    </div>
  )
}

export default VideoTitle
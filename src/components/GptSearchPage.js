import React from 'react'
import { BG_URL } from '../utils/constant'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'


const GptSearchPage = () => {
  return (<>
        <div className='absolute -z-10'>
        <img  className='h-screen object-cover md:w-screen' src={BG_URL} alt='background-img'/>
        </div>
    <div className='pt-[30%] md:pt-0'>
       
        <GptSearchBar/>
        {/* <GptSuggestions/> */}
    </div>
  </>
  )
}

export default GptSearchPage
import React from 'react'
import { BG_URL } from '../utils/constant'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'


const GptSearchPage = () => {
  return (<>
        <div className='fixed -z-10'>
        <img  className='h-screen object-cover md:w-screen' src={BG_URL} alt='background-img'/>
        </div>
    <div className=''>
       
        <GptSearchBar/>
        <GptSuggestions/>
    </div>
  </>
  )
}

export default GptSearchPage
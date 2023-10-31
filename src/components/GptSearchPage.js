import React from 'react'
import { BG_URL } from '../utils/constant'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'


const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img src={BG_URL} alt='background-img'/>
        </div>
       
        <GptSearchBar/>
        <GptSuggestions/>
    </div>
  )
}

export default GptSearchPage
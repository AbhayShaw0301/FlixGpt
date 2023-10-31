import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstant';

const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang);
  return (
    <div className=' pt-[10%] flex justify-center '>
        <form className='w-1/2 bg-black  grid grid-cols-12 '>
            <input className='p-4 m-4 col-span-9' type='text'  placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='bg-red-600  text-lg text-white py-4 my-4  px-2 rounded mx-4 col-span-3'>{lang[langKey].search}</button>
            
        </form>
    </div>
  )
}

export default GptSearchBar
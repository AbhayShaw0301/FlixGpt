import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieSearch from "../Hooks/useMovieSearch";
import useOpenAI from "../Hooks/useOpenAI";
import { API_OPTIONS, OPENAI_API_KEY } from "../utils/constant";
import { addGptResults } from "../utils/gptSearchSlice";
import lang from "../utils/languageConstant";
import openai from "../utils/openAI";
 
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch();
  const {SearchMovieTMDB}=useMovieSearch();
  const { getGptResults } = useOpenAI();

 

  const handleSearchText = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and give result for :" +
      searchText.current.value +
      "only give name of 5 movies, comma separated like the example given ahead.Example Results: Don,Gadar,Golmaal,Sholay,Dhamaal";
   

      const gptMovieResults = await getGptResults(gptQuery);
     const promiseArray=gptMovieResults.map((movie)=>SearchMovieTMDB(movie))
     const tmdbResults=await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptResults({movieNames:gptMovieResults,tmdbMovieList:tmdbResults}));
    
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full mx-2 md:w-1/2 bg-black  grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-600  text-lg text-white py-4 my-4  px-2 rounded mx-4 col-span-3"
          onClick={handleSearchText}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

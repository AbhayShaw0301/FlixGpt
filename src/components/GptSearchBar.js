import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, OPENAI_API_KEY } from "../utils/constant";
import { addGptResults } from "../utils/gptSearchSlice";
import lang from "../utils/languageConstant";
import openai from "../utils/openAI";
 
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch();

  const SearchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchText = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and give result for :" +
      searchText.current.value +
      "only give name of 5 movies, comma separated like the example given ahead.Example Results: Don,Gadar,Golmaal,Sholay,Dhamaal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieResults =gptResults.choices?.[0]?.message?.content.split(",");
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

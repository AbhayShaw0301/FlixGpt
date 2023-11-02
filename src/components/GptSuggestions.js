import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieNames, tmdbMovieList } = useSelector((store) => store.gpt);
  if(!movieNames)return null;

  return (
    <div className="m-4 p-4 bg-black text-white bg-opacity-70">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieNames[index]}
            movies={tmdbMovieList[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;

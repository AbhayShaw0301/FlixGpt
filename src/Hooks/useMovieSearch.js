import { API_OPTIONS } from "../utils/constant";



const useMovieSearch=()=>{
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

      return{SearchMovieTMDB};
}

export default useMovieSearch;
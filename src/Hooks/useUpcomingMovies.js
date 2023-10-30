import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpComingMovies } from "../utils/movieSlice";



const useUpcomingMovies = ()=>{
    const dispatch=useDispatch();
    const getUpComingMovie = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1',API_OPTIONS)
      const json =await data.json();
  
      dispatch(addUpComingMovies(json.results));
  
    }
    
    useEffect(()=>{
      getUpComingMovie();
    },[]);
}

export default useUpcomingMovies;
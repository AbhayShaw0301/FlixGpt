import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const gptSearchSlice = createSlice({
    name:'gptSearch',
    initialState:{
        showGptSearch:false,
        showGptResult:null,
        showGptMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptResults:(state,action)=>{
            const{movieNames,tmdbMovieList}=action.payload;
            state.movieNames=movieNames;
            state.tmdbMovieList=tmdbMovieList;
        },
       


    }
})
export const {toggleGptSearchView,addGptResults}=gptSearchSlice.actions;
export default gptSearchSlice.reducer;
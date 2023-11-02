import { createSlice } from "@reduxjs/toolkit";

 const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        upComingMovies:null,
      
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;

        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;

        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        }
    
      

    }
})

export const {addNowPlayingMovies,addTrailerVideo,addUpComingMovies}=movieSlice.actions;
export default movieSlice.reducer;
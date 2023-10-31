import { configureStore } from '@reduxjs/toolkit';
import gptReducer from './gptSearchSlice';
import moviesReducer from './movieSlice';
import userReducer from './userSlice';
const appStore= configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
    },
});

export default appStore;
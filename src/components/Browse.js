import React from 'react';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  
  return (<>
    <div ><Header/></div>
  <MainContainer/>
  <SecondaryContainer/> 
  </>
  )
}

export default Browse
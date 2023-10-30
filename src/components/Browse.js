import React from 'react';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  useNowPlayingMovies();
  return (<>
    <div><Header/></div>
 <MainContainer/>
  <SecondaryContainer/>
  </>
  )
}

export default Browse
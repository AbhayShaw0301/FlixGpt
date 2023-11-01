import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies= useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies &&(
      <div className='bg-black w-screen '>

      <div className='mt-0 md:-mt-52 z-20 relative pl-4 md:pl-12 pb-12'>
      <MovieList title='NowPlaying' movies={movies?.nowPlayingMovies}/>
      <MovieList title='UpComing' movies={movies?.upComingMovies}/>
     
  
     </div>
      </div>
    )
  
  )
}

export default SecondaryContainer
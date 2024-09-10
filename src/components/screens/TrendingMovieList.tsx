import React, { useState } from 'react'
import { trending } from '../../dummyData';
import MoviesList from '../list/MoviesList';

const TrendingMovieList = () => {
    const [list, setList]= useState(trending);
  return (
    <>
      <MoviesList title="Trending Movies" listData={list}/>
    </>
  )
}

export default TrendingMovieList
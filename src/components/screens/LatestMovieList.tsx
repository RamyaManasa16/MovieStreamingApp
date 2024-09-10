import React, { useState } from 'react'
import { latest } from '../../dummyData';
import MoviesList from '../list/MoviesList';

const LatestMovieList = () => {
    const [list, setList]= useState(latest);
  return (
    <div>
      <MoviesList title="Latest Movies" listData={list}/>
    </div>
  )
}

export default LatestMovieList
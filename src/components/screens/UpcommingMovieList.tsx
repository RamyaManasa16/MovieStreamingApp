import React, { useState } from 'react'
import { upcome } from '../../dummyData';
import MoviesList from '../list/MoviesList';

const UpcommingMovieList = () => {
    const [list, setList]= useState(upcome);
  return (
    <div>
      <MoviesList title="UpcommingMovies" listData={list}/>
    </div>
  )
}

export default UpcommingMovieList;
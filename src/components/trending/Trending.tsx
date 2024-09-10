import React, { useState } from 'react';
import './Trending.css'
import { trending } from '../../dummyData';
import SliderComponent from '../slider/SliderComponent';

const Trending = () => {
  const [trendingData, setTrendingData] = useState(trending);
  return (
    <>
      <section className='trending'>
      <div className='homeContainer'>
          <SliderComponent items={trendingData} type="trending" />
        </div>
      </section>
    </>
  )
}

export default Trending

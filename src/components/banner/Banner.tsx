import { useState } from 'react'
import { homeData } from '../../dummyData';
import SliderComponent from '../slider/SliderComponent';
import './Banner.css';


const Banner = () => {
  const [items, setItems] = useState(homeData);
  return (
    <>
      <section className='home'>
        <div className='homeContainer'>
          <SliderComponent items={items} type="Home" />
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Banner;

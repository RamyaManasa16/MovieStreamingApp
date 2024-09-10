import React, { useEffect, useState } from 'react';
import './WatchPage.css';
import { useParams } from 'react-router-dom';
import { homeData, latest, recommended, trending, upcome } from '../../dummyData';
import Upcomming from '../upcoming/Upcomming';

interface HomeItem {
  desc: any;
  date: any;
  video: any;
  time: any;
  name: any;
  id: number;
}
interface SinglePageProps {
  homeData: HomeItem[];
}


const SinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const {path} = useParams<{path: string}>();
  const [item, setItem] = useState<HomeItem | null>(null);
  const [rec, setRec] = useState(recommended);
  const [data, setData] = useState(path==='Home' ? homeData: (path==='latest' ? latest : (path=== "trending" ? trending : upcome)));
  
  useEffect(() => {
    const parsedId = parseInt(id ? id : '');
    let item = data.find((item) => item.id === parsedId)
    console.log(id)
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className="singleHeading">
              <h1>{item.name}</h1>
              <span> | {item.time} | </span> <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className='para'>
                <h3>Date: {item.date}</h3>
                <p> {item.desc} </p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
              </div>
              <div className="social">
                <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title='Recommended Movies' />
        </>
      ) : null}
    </>
  )
}

export default SinglePage

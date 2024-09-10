import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { latest, recommended, trending, upcome } from '../../dummyData';
import './MovieDetails.css';
import FetchApi from '../../api/Api';
import Upcomming from '../upcoming/Upcomming';

const MovieDetails = () => {
  const { id } = useParams<{ id: any }>();
  const { pathname } = useParams<{ pathname: string }>();
  const [movie, setMovie] = useState<any | null>();
  const [rec, setRec] = useState(recommended);

  const getData = async () => {
    const result = await FetchApi.getLatestData();
    setMovie(result);
  }

  useEffect(() => {
    getData();
  }, [])


  console.log(movie)

  const [data, setData] = useState(pathname === 'trending' ? trending : (pathname === 'upcomming' ? upcome : (pathname === 'latest' ? latest : recommended)));

  const parsedId = parseInt(id ? id : '');
  const filteredData = data.filter((x: { id: any; }) => x.id === parsedId);
  console.log(pathname);
  return (
    <div>
      {filteredData.map((item: any, index: any) => (
        <section className='singlePage1'>
          <div className="singleHeading1">
            <h1>{item.name}</h1>
            <span> | {item.time} | </span> <span>HD</span>
          </div>
          <div className="container">
            <img src={item.cover} alt="" width={350} height={350} style={{ marginTop: 50 }} />
            <div className='playButton row' style={{ marginTop: 20 }}>
              <Link to={`/singlepage/${item.id}/${pathname === "latest" ? "latest" : pathname === "trending" ? "trending" : "upcomming"}`}>
                <button>
                  <div className='img'>
                    <img src='../../images/play-button.png' alt='' />
                    <img src='../../images/play.png' className='change' />
                  </div>
                  WATCH TRAILER
                </button>
              </Link>
            </div>
            <div className='para'>
              <h3>Release Date: {item.date}</h3>
              <p> {item.desc} </p>
              <p>Genres : {item.genres}</p>
              <p>Actors : {item.starring}</p>
            </div>

          </div>

        </section>

      ))}
      <Upcomming items={rec} title='Recommended Movies' />

    </div>


  )
}

export default MovieDetails;
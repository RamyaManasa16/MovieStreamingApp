import { faPlay, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface props {
  item: {
    id: number;
    cover: any;
    name: string;
    rating: number;
    time: string;
    starring: string;
    genres: string;
    desc: string;
    tags: string;
    video: any;
  };
  path: String;
}

const BannerCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags }, path }: props) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                <FontAwesomeIcon className="ratingIcon" icon={faStarHalf} />
              </div>
              <label>{rating}</label>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <FontAwesomeIcon icon={faPlay} />PLAY NOW
            </button>
          </div>
          <div className='playButton row'>
            <Link to={`/singlepage/${id}/${path}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerCard;
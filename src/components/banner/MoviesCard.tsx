import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface props {
  item: any;
}

const MoviesCard = ({ item: { id, cover, name, time } }: props) => {
  return (
    <>
      <div className="MovieBox" id={id}>
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span><br />
          <button className='primary-btn'>
            <FontAwesomeIcon icon={faPlay} className="PlayNowIcon" />PLAY NOW
          </button>
        </div>
      </div>
    </>
  )
}

export default MoviesCard;

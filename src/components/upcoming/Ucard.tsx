import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface props {
  item: any;
}

const Ucard = ({item : {id, cover, name, time }}: props) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt=""/>
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span><br />
          <button className='primary-btn'>
            <FontAwesomeIcon icon={faPlay} className="PlayNowIcon"/>PLAY NOW
          </button>
        </div>
      </div>
    </>
  )
}

export default Ucard

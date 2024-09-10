import React from 'react'
interface props {
  movie: any;
}

const MovieCard = ( {movie: {name, id, cover, title, genres, overview, desc }}: props) => {
    return (
        <div className="movie" key={id}>
            <div>
                <p>{name ? name : title}</p>
            </div>
            <div>
            <img src={name? cover : "./images/home4.jpg"}/>
            </div>
            <div>
                <span>{name? genres : "Action"}</span>
                <h3>{name ? desc : overview.substring(0, 70)}</h3>
            </div>
        </div>
    )
}

export default MovieCard
import React from 'react';
import './styles.css';


const MovieImageSlider = (props) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w780";
    const { backdrop_path, id, poster_path, title, voter_average} = props.data;
    let picture = '';
    if (backdrop_path == null) {
        picture = poster_path;
    } else {
        picture = backdrop_path;
    }
    return (
        <div className="card" id="card">
            <img className="card-img-top" src={BASE_URL + picture} alt="#" />
            <div className="card-title">
                {title}
            </div>
            <div className="card-body">genre goes here</div>
        </div>
    );
}

export default MovieImageSlider;
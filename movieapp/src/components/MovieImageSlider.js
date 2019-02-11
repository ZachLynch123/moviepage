import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';


const MovieImageSlider = (props) => {
    console.log(props);
    
    const BASE_URL = "https://image.tmdb.org/t/p/w154";
    const { backdrop_path, id, poster_path, title, voter_average} = props.data;
    let picture = '';
    if (backdrop_path == null) {
        picture = poster_path;
    } else {
        picture = backdrop_path;
    }
    return (
        <div className="card" id="card">
            <Link to={`/details/${id}`}><img className="card-img-top" src={BASE_URL + poster_path} alt="#" /></Link>
            <div className="card-title">
                {title}
            </div>
            <div className="card-body">genre goes here</div>
        </div>
    );
}

export default MovieImageSlider;
import React from 'react';

const Cast = (props) => {
    console.log(props);
    
    const BASE_URL = "https://image.tmdb.org/t/p/w154";

    const { character, name, profile_path } = props.data;
    console.log(props.data);
    
    return(
        <div className="card" id="card">
            <img className="card-img-top" src={BASE_URL + profile_path} alt={name}></img>
            <div className="card-title">
                {name}
            </div>
            <div className="card-body">
                {character}
            </div>
        </div>
    );
}

export default Cast;
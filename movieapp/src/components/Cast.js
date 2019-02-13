import React from 'react';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const Cast = (props) => {
    console.log(props.data);
    
    const BASE_URL = "https://image.tmdb.org/t/p/w154";

    for(var i = 0; i < props.data.length-1; i++) {
        if (props.data[i].profile_path === null) {
            
        }
    }

    const { character, name, profile_path } = props.data;
    
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
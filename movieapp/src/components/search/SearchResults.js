import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
    // Deconstructing props
    const { poster_path, title, id } = props.data

    return(
            <Link to={`/details/${id}`}>
            <div className="search-results-main-item">
                <img className="search-results-main-img" src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt="img" />
                <h3 className="search-results-main-title">{title}</h3>
            </div>
            </Link>
        
    )
}

export default SearchResults;
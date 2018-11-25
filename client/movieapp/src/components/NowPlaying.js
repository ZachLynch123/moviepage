import React from 'react';
import axios from 'axios';
import keys from '../keys';


class NowPlaying extends React.Component {
    state = {
        movies: []
    }
    /* For images: need 3 pieces of data. base url, file size, and file path
    example url: https://image.tmdb.org/t/p/{file_size}/{file_path}
    */

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keys.apiKey}&language=en-US`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
        });
    }

    render() {
        return(
            <ul>
            { this.state.movies.map(movie => <li>{movie.title}</li>)}
          </ul>
        )
    }

}

export default NowPlaying;
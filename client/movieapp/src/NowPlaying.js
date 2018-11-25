import React from 'react';
import axios from 'axios';
import keys from './keys';


class NowPlaying extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keys.apiKey}&language=en-US`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
            console.log(movies);
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
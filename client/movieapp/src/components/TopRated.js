import React from 'react';
import axios from 'axios';
import keys from '../keys';


class TopRated extends React.Component {

    state = {
        TopRated: []
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${keys.apiKey}&language=en-US&page=1`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ TopRated: movies});
        });
    }



    render(){
        return(
            <div>
                <ul>
                    {this.state.TopRated.map(movies => <li>{movies.title}</li>)}
                </ul>
            </div>
        );
    }
}

export default TopRated;
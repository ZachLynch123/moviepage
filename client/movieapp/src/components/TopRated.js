import React from 'react';
import axios from 'axios';
import keys from '../keys';


const TopRated = (props) => {
    
}

/* class TopRated extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            activeIndex: 0
        };
    }

    gotToSlide(index) {
        this.setState({ activeIndex: index });
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${keys.apiKey}&language=en-US&page=1`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ result: movies});
        });
    }



    render(){
        return(
            <div>
                <ul>
                    {this.state.result.map(movies => <li>{movies.title}</li>)}
                </ul>
            </div>
        );
    }
} */

export default TopRated;
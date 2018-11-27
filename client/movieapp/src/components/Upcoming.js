import React from 'react';


const Upcoming = (props) => {
    return (
        <ul>
            {props.data.map(movie => <li>{movie.title}</li>)}
        </ul>
    );
}
/* class Upcoming extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        movies: []
    }


    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1`)
        .then(res => {
            const movies = res.data.results;
            this.setState({movies});
            console.log('from mount ', movies);
        })
    }

    render() {
        console.log('from render', this.state.movies);
        return(
            <div>
                <h1>hello!</h1>
                <ul>
                {this.state.movies.map(movie => <li>{movie.title}</li>)}
                </ul>
            </div>
        )
    }
} */

export default Upcoming;
import React from 'react';


const MovieImageSlider = (props) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w500";
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
/* class MovieImageSlider extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        movies: []
    }


    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/MovieImageSlider?api_key=${keys.apiKey}&language=en-US&page=1`)
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

export default MovieImageSlider;
import React from 'react';
import Slider from 'react-slick';
import Cast from '../Cast';
import Trailers from '../Trailers';
import settings from '../../sliderSettings';
import './styles.css'

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posterUrl: "https://image.tmdb.org/t/p/w154",
            backdropUrl: 'https://image.tmdb.org/t/p/original',
            id: this.props.location.pathname.slice(-6),
            backdrop: '',
            poster: '',
            title: '',
            genres: [],
            overview: '',
            voteAverage: 0,
            castList: [],
            trailerList: [],
            reviewList: [],
            isLoaded: false
        }
}

    async getMovieDetails() {
        try {        
            const data = await fetch(`
            https://api.themoviedb.org/3/movie/${this.state.id}?api_key=f8be595d434ed3dc41d8c73f0760f653&language=en-US`, );
            const jsonData = await data.json();
            this.setState({
                backdrop: jsonData.backdrop_path,
                poster: this.state.posterUrl + jsonData.poster_path,
                title: jsonData.original_title,
                genres: jsonData.genres,
                overview: jsonData.overview,
                voteAverage: jsonData.vote_average,
                isLoaded: true
            });            
        } catch(e) {
            console.log(e);
        }
    }

    async getCast() {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=f8be595d434ed3dc41d8c73f0760f653`);
            const jsonData = await data.json();
            this.setState({
                castList: jsonData.cast
            })
        } catch(e) {
            console.log(e);
        }
    }
    
    async getTrailers() {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/videos?api_key=f8be595d434ed3dc41d8c73f0760f653&language=en-US
            `);
            const jsonData = await data.json();
            this.setState({
                trailerList: jsonData.results
            });
        } catch(e) {
            console.log(e);
        }
    }

    async getReviews() {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${this.state.id}/reviews?api_key=f8be595d434ed3dc41d8c73f0760f653&language=en-US&page=1`);
            const jsonData = await data.json();
            this.setState({
                reviewList: jsonData.results
            });
        } catch(e) {
            console.log(e);
        }
    }


    componentDidMount() {
        window.scrollTo(0,0);
        this.getMovieDetails();
        this.getCast();
        this.getTrailers();
        this.getReviews();
    }

    getGenres = genreArray => {
        if (genreArray.length > 2) {
            const genreOne = genreArray[genreArray.length-2].name;
            const genreTwo = genreArray[genreArray.length-1].name;
            return <p className="items-details-info-container-content-genres">{genreOne} | {genreTwo}</p>
        }
        return <p>hello</p>
    }

    render() {
        const headerStyle = {
            background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(https://image.tmdb.org/t/p/original${this.state.backdrop}) center top no-repeat rgb(255, 255, 255)`
        }
          const { castList, reviewList, trailerList } = this.state

          /* 
            for loop to delete every video that isn't a trailer from trailer list && for loop to delete ever cast member that doesn't have a profile picture. Or even just ignore all that don't follow those criteria in the map function? But arrow function in map function must return something if an if statement is added. . no? will test later Also maybe add a specific set of rules for trailers list in slider settings to accomidate the large size
          */

        return(
            <div className="item-details">
                <div className="item-details-header" style={headerStyle}>
                    <div className="item-details-info-container">
                        <img src={this.state.poster} alt="poster" />
                        <div className="item-details-info-container-content">
                            <h1 className="items-details-info-container-content-title">{this.state.title}</h1>
                            <p className="items-details-info-container-content-rating">{this.state.voteAverage}</p>
                            {this.getGenres(this.state.genres)}
                        </div>
                    </div>
                </div>

                <div className="item-details-main">
                    <div className="item-details-main-summary">
                        <h3>Summary</h3>
                        <p>{this.state.overview}</p>
                    </div>
                    <div className="item-details-main-cast">
                        <Slider {...settings}>
                            {
                                castList.map(castMember => 
                                    <Cast data={castMember} />
                                )
                            }
                        </Slider>
                    </div>
                    <div className="item-details-main-trailers">
                        <Slider {...settings}>
                            {
                                trailerList.map(trailer => 
                                    <Trailers data={trailer} />)
                            }
                        </Slider>
                    </div>
                    <div className="item-details-main-reviews">
                        <h1>Add get request for reviews {/* /movie/{movie_id}/reviews */}</h1>
                    </div>
                </div>
            </div>
        )
    }
}


export default Details
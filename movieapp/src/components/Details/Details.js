import React from 'react';
import Slider from 'react-slick';
import Cast from '../Cast';
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

    componentDidMount() {
        window.scrollTo(0,0);
        this.getMovieDetails();
        this.getCast();
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
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          }
          const { castList } = this.state
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
                        <h1>Add get request for trailers {/* /movie/{movie_id}/videos */}</h1>
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
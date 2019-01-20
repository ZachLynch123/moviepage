import React, { Component } from 'react';
import axios from 'axios';
import keys from '../keys';
import Slider from 'react-slick'
import Footer from './Footer'
import MovieImageSlider from './MovieImageSlider';
import Header from './Header'

class Home extends Component {
state = {
    upcoming: [],
    nowPlaying: [],
    topRated: [],
    movieId: 0,
    genres: [],
    isLoaded: false,
    BASE_URL: 'https://image.tmdb.org/t/p/original'
  }

  setMovieId = id => {
    this.setState({
      movieId: id
    })
  }

  // React lifecycle component (initial) that fetches all the data needed on this page in 1 axious request
  componentDidMount() {
    axios.all([
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1`),
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keys.apiKey}&language=en-US`),
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${keys.apiKey}&language=en-US&page=1`)
    ])
      .then(axios.spread((upcomingRes, nowPlayingRes, topRatedRes) => {
        const upC = upcomingRes.data.results;
        const nowPlay = nowPlayingRes.data.results;
        const topRate = topRatedRes.data.results;  
        this.setState({
          upcoming: upC,
          nowPlaying: nowPlay,
          topRated: topRate,
          isLoaded: true
        });
        
               
      }));

 
      
  }
  render() {
    const { isLoaded, nowPlaying, topRated, upcoming } = this.state;
    if (isLoaded){
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
    return (
      <div className="App">
      <Header data={nowPlaying} setMovieid={this.setMovieId} />      

        <div className="container">
          <h2 style={{'margin-top': '20px'}}>UPCOMING</h2>
          <Slider {...settings}>
          {
              upcoming.map(movie => <MovieImageSlider data={movie} key={movie.id}/>
              
                )
          }
          </Slider>
          <h2>TOP RATED</h2>
          <Slider {...settings}>
          {
            topRated.map(movie => <MovieImageSlider data={movie} key={movie.id} />)
          }
          </Slider>
           </div>
          <Footer />
      </div>

    );
          } else {
            return(<div>loading...</div>)
          }
}

}

export default Home;

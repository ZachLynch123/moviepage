import React, { Component } from 'react';
import { Carousel, } from 'react-bootstrap';
import axios from 'axios';
import keys from './keys';
import Slider from 'react-slick'
import './App.css';
import MovieImageSlider from './components/MovieImageSlider';


class App extends Component {

  state = {
    upcoming: [],
    nowPlaying: [],
    topRated: [],
    topRatedOnlyOneMovie: '',
    genres: [],
    isLoaded: false,
    index: 0,
    BASE_URL: 'https://image.tmdb.org/t/p/original'
  }

  // Sets new index for carousel, moving it to the right by 1
  nextMovie = (movieArray) => {
    const newIndex = this.state.topRatedOnlyOneMovie.index + 1;
    this.setState({
      topRatedOnlyOneMovie: this.state.topRated[newIndex]
    })

  }

  previousMovie = (movieArray) => {
    const newIndex = this.state.index - 1;
    let last = movieArray.slice(-1);
    let rest = movieArray.slice(0,-1);
    let movies = [last, ...rest];
    this.setState({
      index: newIndex,
      movieArray: movies
    });
  }

  addIndexToArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i].index = i;
    }
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
        this.addIndexToArray(upC);
        this.addIndexToArray(nowPlay);
        this.addIndexToArray(topRate);
        this.setState({
          upcoming: upC,
          nowPlaying: nowPlay,
          topRated: topRate,
          isLoaded: true
        });
        if(this.state.isLoaded) {
          this.setState({
            topRatedOnlyOneMovie: this.state.topRated[0]
          })
        }
               
      }));

      
  }
  render() {
    const { index, isLoaded, nowPlaying, topRated, topRatedOnlyOneMovie, upcoming } = this.state;
    if (isLoaded){
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
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return (
      <div className="App">
     <button onClick={() => this.nextMovie(topRated)}>next</button>
    
      
      <Carousel id="header" showControles={false} showIndicators={false}>
        {
          nowPlaying.map(movie => <Carousel.Item>
            <img src={this.state.BASE_URL + movie.backdrop_path} alt="" />
            <Carousel.Caption>
              <h4>Latest</h4>
              <h3>{movie.title}</h3>
              <h4>{movie.vote_average}</h4>
            </Carousel.Caption>
          </Carousel.Item>)
        }
      </Carousel>

        <div className="container">
          <Slider {...settings}>
        
          {
              upcoming.map(movie => <MovieImageSlider data={movie} key={movie.id}/>)
          }
          </Slider>
          <Slider {...settings}>
          {
            topRated.map(movie => <MovieImageSlider data={movie} key={movie.id} />)
          }

          </Slider>
           </div>
      </div>
    );
          } else {
            return(<div>loading...</div>)
          }
}

}

export default App;

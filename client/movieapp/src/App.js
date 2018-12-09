import React, { Component } from 'react';
import { Carousel, } from 'react-bootstrap';
import axios from 'axios';
import keys from './keys';
import './App.css';
import MovieImageSlider from './components/MovieImageSlider';
import Header from './components/Header'


class App extends Component {

  state = {
    upcoming: [],
    nowPlaying: [],
    topRated: [],
    genres: [],
    isLoaded: false,
    index: 0,
    BASE_URL: 'https://image.tmdb.org/t/p/original'
  }

  // Sets new index for carousel, moving it to the right by 1
  nextMovie = (movieArray) => {
    if (this.state.index >= 20) {
      // use setState instead of mutating state directly
      this.state.index = 0;
    }
    const newIndex = this.state.index + 1;
    let [first, ...rest] = movieArray;
    let movies = [...rest, first];
    this.setState({
      index: newIndex,
      upcoming: movies
    });
    console.log(this.state.index);

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
        })

      }));

      
  }
  render() {
    const { index, isLoaded, nowPlaying, topRated, upcoming } = this.state;
    if (isLoaded){
    return (
      <div className="App">
     {/*  <button onClick={() => this.previousMovie(topRated)}>Prev</button>
      <button onClick={() => this.nextMovie(topRated)}>Next</button> */}
      
      <Carousel id="header">
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

        <div className="cards-slider toprated">
          <div className="card-slider-wrapper toprated">
          {
              topRated.map(movie => <MovieImageSlider data={movie} key={movie.id}/>)
            }
           </div>
           </div>
      </div>
    );
          } else {
            return(<div>loading...</div>)
          }
}

}

export default App;
/*  style={
            {
               'transform': `translateX(-${index*(100/upcoming.length) + 3}%)`
           }
          }>
          {
              upcoming.map(movie => <MovieImageSlider data={movie} key={movie.id}/>)
           }*/
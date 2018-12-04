import React, { Component } from 'react';
import axios from 'axios';
import keys from './keys';
import './App.css';
import NowPlaying from './components/NowPlaying';
import MovieImageSlider from './components/MovieImageSlider';
import TopRated from './components/TopRated';


class App extends Component {

  state = {
    upcoming: [],
    nowPlaying: [],
    topRated: [],
    genres: [],
    isLoaded: false,
    index: 0
  }

  // Sets new index for carousel, moving it to the right by 1
  nextMovie = (movieArray) => {
    if (this.state.index >= 20) {
      // use setState instead of mutating state directly
      this.state.index = 0;
      console.log('hello ' + this.state.index)
    }
    const newIndex = this.state.index + 1;
    //let last = movieArray.slice(-1);
    // let rest = movieArray.slice(0, -1);
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
        console.log(upcomingRes.data.results)
        
        this.setState({
          upcoming: upC,
          nowPlaying: nowPlay,
          topRated: topRate,
          isLoaded: true
        })
      }));

      
  }
  render() {
    const { index, nowPlaying, topRated, upcoming } = this.state;
    return (
      <div className="App">
      <button onClick={() => this.previousMovie(upcoming)}>Prev</button>
      <button onClick={() => this.nextMovie(upcoming)}>Next</button>
       <div className="cards-slider">
          <div className="card-slider-wrapper" style={
            {
               'transform': `translateX(-${index*(100/upcoming.length) + 3}%)`
           }
          }>
          {
              upcoming.map(movie => <MovieImageSlider data={movie} key={movie.id}/>)
           }
          </div>
        </div> 
        <div className="cards-slider toprated">
          <div className="card-slider-wrapper toprated">
          {
              topRated.map(movie => <MovieImageSlider data={movie} key={movie.id}/>)
            }
           </div>
           </div>
        <div className="card-slider">
            <div className="card-slider-wrapper">
            {
              nowPlaying.map(movie => <MovieImageSlider data={movie} key={movie.id} />)
            }
            </div>
        </div>
      </div>
    );
}

}

export default App;

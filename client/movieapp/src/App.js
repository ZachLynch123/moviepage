import React, { Component } from 'react';
import axios from 'axios';
import keys from './keys';
import './App.css';
import NowPlaying from './components/NowPlaying';
import Upcoming from './components/Upcoming';
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
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1`)
      .then(res => {
          const upC = res.data.results;
          this.setState({
            upcoming: upC,
            isLoaded:true,
          });
      })
      .then(res => {
        const moviesList = res.data.resluts;
        this.setState({
          topRated: moviesList,
          isLoaded: true
        });
      });

      
  }
  render() {
    const { upcoming, index, isLoaded } = this.state;
    const upcomingMovie = upcoming[index];
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
             upcoming.map(movie => <Upcoming data={movie} key={movie.id}/>)
           }
          </div>
        </div>        
      </div>
    );
}

}

export default App;

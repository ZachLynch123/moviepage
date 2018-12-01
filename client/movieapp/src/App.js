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
    genres: []
  }

  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1`)
      .then(res => {
          const upC = res.data.results;
          this.setState({upcoming: upC});
      });
  }
  render() {
    const { upcoming } = this.state;
    return (
      <div className="App">
       <div className="cards-slider">
          <div className="card-slider-wrapper">
          {
            upcoming.map(movie => <Upcoming data={movie} key={movie.id}/>)
          }
          />
          </div>
        </div>        
      </div>
    );
  }
}

export default App;

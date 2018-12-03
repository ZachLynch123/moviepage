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
    upcomingMovie: [],
    isLoaded: false,
    index: 0
  }

  nextProperty = () => {
    const newIndex = this.state.index + 1;
    this.setState({
      index: newIndex
    })
  }

 
  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1`)
      .then(res => {
          const upC = res.data.results;
          this.setState({
            upcoming: upC,
            isLoaded:true,
            upcomingMovie: upC[0]
          });
      });
  }
  render() {
    const { upcoming, index, isLoaded } = this.state;
    const upcomingMovie = upcoming[index];
    if (isLoaded && upcomingMovie !== undefined){
      console.log(upcomingMovie)

    return (
      <div className="App">
      <button>Prev</button>
      <button onClick={upcoming => this.nextProperty(upcoming)}>Next</button>
       <div className="cards-slider">
          <div className="card-slider-wrapper" style={
            {
              'transform': `translateX(-${index*(100/upcoming.length) + 3}%)`
            }
          }>
          {
             upcoming.map(movie => <Upcoming data={movie} key={movie.id}/>)
           }
          />
          </div>
        </div>        
      </div>
    );
}
else {
  return(<div>Loading..</div>)
}
  }
}

export default App;

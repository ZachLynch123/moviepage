import React, { Component } from 'react';
import axios from 'axios';
import keys from './keys';
import './App.css';
import NowPlaying from './components/NowPlaying';
import Upcoming from './components/Upcoming';


class App extends Component {

  state = {
    upcoming: []
  }

  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${keys.apiKey}&language=en-US&page=1`)
      .then(res => {
          const upC = res.data.results;
          this.setState({upcoming: upC});
      })
  }
  render() {
    return (
      <div className="App">
       { <NowPlaying />}
        <Upcoming data={this.state.upcoming}/>
        
      </div>
    );
  }
}

export default App;

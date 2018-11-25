import React, { Component } from 'react';
import './App.css';
import NowPlaying from './components/NowPlaying';
import Upcoming from './components/Upcoming';


class App extends Component {
  render() {
    return (
      <div className="App">
       { <NowPlaying />}
        <Upcoming />
        
      </div>
    );
  }
}

export default App;

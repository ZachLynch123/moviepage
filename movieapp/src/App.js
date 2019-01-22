import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Details from './components/Details'


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route path="https://zachlynch123.github.io/moviepage/" component={Home} />
          <Route path="/:id" component={Details} />
        </div>
      </BrowserRouter>
    )
  }
  
}




export default App;

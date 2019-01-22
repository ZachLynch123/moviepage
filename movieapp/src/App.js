import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Details from './components/Details'


class App extends Component {
  render() {
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Details} />
        </div>
      </BrowserRouter>
    )
  }
  
}




export default App;

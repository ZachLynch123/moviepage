import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Details from './components/Details'
import Login from './components/login';


class App extends Component {


  render() {
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path = "/login" component={Login}/>
        </div>
      </BrowserRouter>
    )
  }
  
}




export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Details from './components/Details/Details'
import Login from './components/login';
import Guest from './components/Guest';
import Search from './components/Search';


class App extends Component {


  render() {
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path = "/login" component={Login} />
          <Route path="/profile/guest" component={Guest} />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    )
  }
  
}




export default App;
